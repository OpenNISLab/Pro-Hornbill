#include "msp430fr2433.h"
#include <msp430.h>
#include "driverlib.h"
#include "Board.h"
#include <string.h>


//*****************************************************************************
// clock frequency
//*****************************************************************************
#define CS_MCLK_DESIRED_FREQUENCY_IN_KHZ   1000		//Target frequency for MCLK in kHz
#define CS_MCLK_FLLREF_RATIO               30		//MCLK/FLLRef Ratio
//*****************************************************************************
// NFC Slave address
//*****************************************************************************
#define SLAVE_ADDRESS	0x55
//*****************************************************************************
// SPI pin definition
//*****************************************************************************
#define GPIO_PORT_SYSN	GPIO_PORT_P2      // SPI Port
#define GPIO_PIN_SYSN	GPIO_PIN3         // SPI SYSN Pin
//*****************************************************************************
// DAC channel Definition
//*****************************************************************************
#define DAC_A		0x01    // Selects DAC A
#define DAC_B		0x08    // Selects DAC B
#define DAC_ALL		0x09    // Selects DAC A and DAC B
#define DAC_RefCH	0x01	// DAC reference electrode channel
#define DAC_WCH		0x08    // DAC working electrode channel
//*****************************************************************************
// ADC input pin definition
//*****************************************************************************
#define GPIO_PORT_ADCIn		GPIO_PORT_P1
#define GPIO_PIN_ADCIn0		GPIO_PIN0
#define GPIO_PIN_ADCIn1		GPIO_PIN1
//*****************************************************************************
// LED
//*****************************************************************************
#define GPIO_PORT_LED_01	GPIO_PORT_P2
#define GPIO_PIN_LED_01		GPIO_PIN7

//*****************************************************************************
// DPV parameters
//*****************************************************************************
volatile unsigned int refPot = 0;				// Reference electrode potential, OutputPotential=refPot/65535*Vref, Vref=2.5V
volatile uint_fast16_t timerBaseStep = 50;		// ms sampling period
volatile int oddnum=0;							// Number of odd period samples, Odd period=oddnum*timerBaseStep
volatile int evenum=0;							// Number of even period samples, Even period=evennum*timerBaseStep
volatile int samplenum=1;						// Number of samples
volatile bool oddflag=true;						// The periodic parity flag
volatile int stanum=0;							// Number of standing, standing time=stanum*timerBaseStep
volatile int numberOfSteps = 0;					// The number of steps, one odd and one even in one cycle, a total of two steps
volatile int Nstep = 0;							// Current step count
volatile bool sRunning = false;					// Start of potential scan
volatile bool sBegin = false;					// Program start


volatile int refIncOdd = 0;						// Odd periodic potential change
volatile int refIncEven = 0;					// Even periodic potential change
volatile long tmp = 0;							// Potential change is a temporary variable

volatile unsigned int outRefPot_odd = 0;		// Output odd-cycle reference potential, DAC setting value is not the actual value of the electrode
volatile unsigned int outRefPot_even = 0;		// Output even cycle reference potential, DAC setting value is not the actual electrode value

volatile unsigned int outInp_odd1 = 0;			// The odd-period ADC0 sampling value is output
volatile unsigned int outInp_even1 = 0;			// The even period ADC0 sampling value is output
volatile unsigned int outInp_odd2 = 0;			// The odd-period ADC1 sampling value is output
volatile unsigned int outInp_even2 = 0;			// The even period ADC1 sampling value is output
volatile unsigned int outN = 0;					// The current number of steps


volatile bool outSend = false;					// Output flag
volatile bool runLEDFlag = true;				// Running process LED sign
volatile bool cycleDone = false;				// End of run flag

volatile uint32_t ADCsum1 = 0;					// ADC0 sampling, an odd/even period sum
volatile uint32_t ADCsum2 = 0;					// ADC1 sampling, an odd/even period sum
volatile uint32_t ADCsum1_mid = 0;				// ADC0 sampling, a sum of sampling periods
volatile uint32_t ADCsum2_mid = 0;				// ADC1 sampling, a sum of sampling periods

//*****************************************************************************
// NFC parameters
//*****************************************************************************
volatile uint8_t NFCWriteData[17]={0x01,
                                   0x00,0x00,0x00,0x00,
                                   0x00,0x00,0x00,0x00,
                                   0x00,0x00,0x00,0x00,
                                   0x00,0x00,0x00,0x00};		// NFC Write data
volatile uint8_t NFCWriteREGData[2];							// NFC writes register data
volatile uint8_t NFCReadData[16]={0x00};			// NFC reading data
volatile uint8_t NFCNDEFData_mid[20]={0x00};		// NFC reading data

volatile uint8_t NFCNDEFData[1000];								// NFC encapsulates the NDEF message format
volatile uint8_t NFCReadREGData[2];								// NFC reads the register data

char AllData[1700];												// All the data

volatile bool NAKFlag=true;										// I2C does not acknowledge flag, 1--TX,0--RX
volatile uint8_t TXCOUNT=0x00;									// The number of data sent by I2C
volatile uint8_t RXCOUNT=0x00;									// The number of data received by I2C

//I2C operates on register variables
volatile uint8_t MEMA=0x00;
volatile uint8_t REGA=0x00;
volatile uint8_t MASK=0x00;
volatile uint8_t REGDAT=0x00;

//---------------------------------------------------------------
//                      --- Function declaration---
//---------------------------------------------------------------

// Initializing hardware
void initHardware();
// Initializing the clock
void initClockTo16MHz();
// Initialize the GPIO pin
void initGPIO();
// Initialize I2C
void initI2C();
// NFC Write data
void NFCWrite(uint8_t MEMA);
// NFC writes to the register
void NFCWriteREG(uint8_t MEMA, uint8_t REGA, uint8_t MASK,uint8_t REGDAT);
// NFC reading data
void NFCRead(uint8_t MEMA);
// NFC reads the register
void NFCReadREG(uint8_t MEMA, uint8_t REGA);
// Initializing SPI
void initSPI();
// SPI sends multiple data
void SPI_masterSendMultipleByte(uint8_t *txData, int len);
// 3 bits are written to the DAC register
void WriteRegisterToDAC(uint8_t b1,uint8_t b2, uint8_t b3);
// Initializing the DAC
void initDAC();
// Setting the DAC value
void setDAC(uint8_t channel,uint16_t value);
// Initializing the ADC
void initADC();
// Initializing Timer
void initTimer();
// Sets the timer interrupt period
void setTimer();
// Initializing the ADC
void initADC();
// Obtaining ADC values
uint16_t getADCValue();
// Send data
void saveData();
void WriteAllData();
void NFCNDEF();
// Integer to character variable
char binaryToAscii(int data, char *str);

void main (void)
{
    int i;
    //Turn off the guard dog
    WDT_A_hold(WDT_A_BASE);
	
    initHardware();
    __bis_SR_register(GIE);

    while(1)
    {
        if(sBegin){
            //The potential will be set if the number of parity in a cycle meets the parameter setting, 
            //otherwise only sampling will be carried out
            if(oddflag){
                if(samplenum>=oddnum){
                    sRunning=true;
                }
            }else{
                if(samplenum>=evenum){
                    sRunning=true;
                }
            }
            //When the send data flag is true, the light flashes and the data is sent
            if(outSend){
                if(runLEDFlag){
                    runLEDFlag=false;
                    GPIO_setOutputHighOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
                }else{
                    runLEDFlag=true;
                    GPIO_setOutputLowOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
                }
                saveData();
                outSend=false;
            }
            //When the measurement is complete, clear the system setup and process the data
            if(cycleDone){
                Timer_A_startCounter(TIMER_A1_BASE, TIMER_A_STOP_MODE);
                setDAC(DAC_RefCH, 0);
                NFCNDEF();

                WriteAllData();

                NFCWriteData[0]=(uint8_t)(0x01);
                for(i=1;i<17;i++){
                    NFCWriteData[i]=(uint8_t)(0x00);
                }
                cycleDone = false;
                sBegin=false;
                oddflag=true;
                samplenum=1;
            }

        }else{
            //LED s
            GPIO_setOutputLowOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
            for(i=0;i<10000;i++){
                __delay_cycles(100);
            }
            GPIO_setOutputHighOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
            for(i=0;i<1000;i++){
                __delay_cycles(100);
            }
            GPIO_setOutputLowOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
            for(i=0;i<1000;i++){
                __delay_cycles(100);
            }
            GPIO_setOutputHighOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
            for(i=0;i<1000;i++){
                __delay_cycles(100);
            }
            GPIO_setOutputLowOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
            for(i=0;i<1000;i++){
                __delay_cycles(100);
            }
            //Determine whether the test flag is started. If it is a, the test is started
            NFCRead(0x01);
            NFCNDEFData_mid[0]=NFCReadData[15];
            NFCRead(0x02);
			
            for(i=0;i<16;i++)
            {
                NFCNDEFData_mid[i+1]=NFCReadData[i];
            }

            if(NFCNDEFData_mid[0]=='a'){
                //Set according to the parameters read
                refPot=NFCNDEFData_mid[1];
                setDAC(DAC_RefCH, refPot);
                oddnum=9;
                evenum=1;
                refIncOdd=NFCNDEFData_mid[4];
                refIncEven=NFCNDEFData_mid[3]-NFCNDEFData_mid[4];
                numberOfSteps=200;
                timerBaseStep=50;
                setTimer();
                stanum=0;
                sBegin=true;
                Nstep=0;

                Timer_A_startCounter(TIMER_A1_BASE, TIMER_A_UP_MODE);
            }
            //Resetting arrays
            for(i=0;i<16;i++){
                NFCNDEFData_mid[i]=(uint8_t)(0x00);
                NFCReadData[i]=(uint8_t)(0x00);
            }
        }
    }
}
/*
 * @description	: Converts an integer to a character
 * @param-data	: Integer number
 * @param-*str	: A pointer to a character type
 * @return		: character size
 */
char binaryToAscii(int data, char *str)
{
    int len = 0;
    int value;
    char i;
    char num_str[10] = { 0 };
    int quotient;

    if (data < 0)
    {
        value = 0;
        len = 0;
        num_str[len] = value + '0';
        len++;
    }
    else
    {
        value = data;
        len = 0;
    }

    quotient = value / 10;
    while (quotient != 0)
    {
        num_str[len] = value % 10 + '0';
        len++;
        value = quotient;
        quotient = value / 10;
    }

    if (value != 0)
    {
        num_str[len] = value + '0';
        len++;
    }

    for (i = 0; i < len; i++)
    {
        *str = num_str[len - i - 1];
        str++;
    }

    return len;
}

/*
 * @description	: Initializing hardware
 * @param		: None
 * @return		: None
 */
void initHardware()
{
    initClockTo16MHz();
    initGPIO();
    //For FRAM devices, at start up, the GPO power-on default
    //high-impedance mode needs to be disabled to activate previously
    //configured port settings. This can be done by clearing the LOCKLPM5
    //bit in PM5CTL0 register
    PMM_unlockLPM5();
    initI2C();
    initSPI();
    initDAC();
    initADC();
    initTimer();
    GPIO_setOutputLowOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
}

/*
 * @description	: Initializing the clock
 * @param		: None
 * @return		: None
 */
void initClockTo16MHz()
{
    //Initialize DCO    DCO FLL reference = REFO
    CS_initClockSignal(
            CS_FLLREF,
            CS_REFOCLK_SELECT,
            CS_CLOCK_DIVIDER_1
            );
    CS_initFLLSettle(
            CS_MCLK_DESIRED_FREQUENCY_IN_KHZ,
            CS_MCLK_FLLREF_RATIO
            ); //kHz, 1MHz
    //Initialize MCLK = DCO  16MHz  REFOCLK, DCOCLK, XT1CLK, or VLOCLK.
    CS_initClockSignal(
            CS_MCLK,
            CS_DCOCLKDIV_SELECT,
            CS_CLOCK_DIVIDER_1
            );
    //Initialize ACLK = REFO //32768Hz  T1CLK or REFOCLK.
    CS_initClockSignal(
            CS_ACLK,
            CS_REFOCLK_SELECT,
            CS_CLOCK_DIVIDER_1
            );
    //Initialize SMCLK = DCO/16 1MHz = 16MHz/16
    CS_initClockSignal(
            CS_SMCLK,
            CS_DCOCLKDIV_SELECT,
            CS_CLOCK_DIVIDER_1
            );
}

/*
 * @description	: Initialize the GPIO
 * @param		: None
 * @return		: None
 */
void initGPIO()
{
    //Configuration LED pin
    GPIO_setAsOutputPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
    //Set LED pins HI
    GPIO_setOutputHighOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
    //Configure Pins for I2C
    GPIO_setAsPeripheralModuleFunctionInputPin(
        GPIO_PORT_UCB0SCL,
        GPIO_PIN_UCB0SCL,
        GPIO_FUNCTION_UCB0SCL
    );
    GPIO_setAsPeripheralModuleFunctionInputPin(
        GPIO_PORT_UCB0SDA,
        GPIO_PIN_UCB0SDA,
        GPIO_FUNCTION_UCB0SDA
    );
    //Configure SPI pin for SYSN
    GPIO_setAsOutputPin(GPIO_PORT_P2,GPIO_PIN3);
    GPIO_setOutputHighOnPin(GPIO_PORT_P2,GPIO_PIN3);
    //Configure SPI Pins for UCA0CLK, UCA0TXD/UCA0SIMO and UCA0RXD/UCA0SOMI
    GPIO_setAsOutputPin(
        GPIO_PORT_P2,
        GPIO_PIN4 + GPIO_PIN5 + GPIO_PIN6
    );
    //ADC
    //Set A1 as an input pin.
    //Set appropriate module function
    GPIO_setAsPeripheralModuleFunctionInputPin(
            GPIO_PORT_ADCIn,
            GPIO_PIN_ADCIn0+GPIO_PIN_ADCIn1,
            GPIO_PRIMARY_MODULE_FUNCTION
            );
}

/*
 * @description	: Initialize the IIC
 * @param		: None
 * @return		: None
 */
void initI2C()
{
    EUSCI_B_I2C_initMasterParam param = {0};
    param.selectClockSource = EUSCI_B_I2C_CLOCKSOURCE_SMCLK;
    param.i2cClk = CS_getSMCLK();
    param.dataRate = EUSCI_B_I2C_SET_DATA_RATE_400KBPS;
    param.byteCounterThreshold = RXCOUNT;
    param.autoSTOPGeneration = EUSCI_B_I2C_NO_AUTO_STOP;
    //Initialize I2C
    EUSCI_B_I2C_initMaster(EUSCI_B0_BASE,&param);
    //Specify slave address
    EUSCI_B_I2C_setSlaveAddress(EUSCI_B0_BASE,SLAVE_ADDRESS);
    //Set in transmit mode
    EUSCI_B_I2C_setMode(EUSCI_B0_BASE,EUSCI_B_I2C_TRANSMIT_MODE);
    //Enable I2C Module to start operations
    EUSCI_B_I2C_enable(EUSCI_B0_BASE);
    EUSCI_B_I2C_clearInterrupt(EUSCI_B0_BASE,
                    EUSCI_B_I2C_TRANSMIT_INTERRUPT0 +
                    EUSCI_B_I2C_RECEIVE_INTERRUPT0+
                    EUSCI_B_I2C_NAK_INTERRUPT
                    );
    //Enable master Receive interrupt
    EUSCI_B_I2C_enableInterrupt(EUSCI_B0_BASE,
                    EUSCI_B_I2C_TRANSMIT_INTERRUPT0 +
                    EUSCI_B_I2C_RECEIVE_INTERRUPT0+
                    EUSCI_B_I2C_NAK_INTERRUPT
                  );
}

/*
 * @description	: Write data to the NFC chip
 * @param-MEMA	: To write the address, you need to check the chip manual to determine the address distribution
 * @return		: None
 */
void NFCWrite(uint8_t MEMA){
    while (EUSCI_B_I2C_SENDING_STOP == EUSCI_B_I2C_masterIsStopSent(EUSCI_B0_BASE));
    NFCWriteData[0]=MEMA;
    TXCOUNT=17;
    NAKFlag=true;
    EUSCI_B_I2C_setMode(EUSCI_B0_BASE,EUSCI_B_I2C_TRANSMIT_MODE);
    EUSCI_B_I2C_masterSendStart(EUSCI_B0_BASE);
    __bis_SR_register(CPUOFF + GIE);
}

/*
 * @description	: Read the data from the NFC chip
 * @param-MEMA	: Read data address, you need to check the chip manual to determine the address distribution
 * @return		: None
 */
void NFCRead(uint8_t MEMA){
    while (EUSCI_B_I2C_SENDING_STOP == EUSCI_B_I2C_masterIsStopSent(EUSCI_B0_BASE));
    NFCWriteData[0]=MEMA;
    TXCOUNT=1;
    RXCOUNT=16;
    NAKFlag=true;
    EUSCI_B_I2C_setMode(EUSCI_B0_BASE,EUSCI_B_I2C_TRANSMIT_MODE);
    EUSCI_B_I2C_masterSendStart(EUSCI_B0_BASE);
    __bis_SR_register(CPUOFF + GIE);        // Enter LPM0 w/ interrupts
    NAKFlag=false;

    EUSCI_B_I2C_setMode(EUSCI_B0_BASE,EUSCI_B_I2C_RECEIVE_MODE);
    EUSCI_B_I2C_masterReceiveStart(EUSCI_B0_BASE);
    __bis_SR_register(CPUOFF + GIE);

    initI2C();
}

/*
 * @description	: Read the value of the NFC register
 * @param-MEMA	: Module address
 * @param-REGA	: The register address
 * @return		: None
 */
void NFCReadREG(uint8_t MEMA, uint8_t REGA){
    while (EUSCI_B_I2C_SENDING_STOP == EUSCI_B_I2C_masterIsStopSent(EUSCI_B0_BASE));
    NFCWriteData[0]=MEMA;
    NFCWriteData[1]=REGA;
    TXCOUNT=2;
    RXCOUNT=1;
    NAKFlag=true;
    EUSCI_B_I2C_setMode(EUSCI_B0_BASE,EUSCI_B_I2C_TRANSMIT_MODE);
    EUSCI_B_I2C_masterSendStart(EUSCI_B0_BASE);
    __bis_SR_register(CPUOFF + GIE);        // Enter LPM0 w/ interrupts
    NAKFlag=false;

    EUSCI_B_I2C_setMode(EUSCI_B0_BASE,EUSCI_B_I2C_RECEIVE_MODE);
    EUSCI_B_I2C_masterReceiveStart(EUSCI_B0_BASE);
    __bis_SR_register(CPUOFF + GIE);

    initI2C();
}

/*
 * @description	: Write values to the NFC register
 * @param-MEMA	: Module address
 * @param-REGA	: The register address
 * @param-MASK	: The mask of the value to modify
 * @param-REGDAT: The value to write
 * @return		: None
 */
void NFCWriteREG(uint8_t MEMA, uint8_t REGA, uint8_t MASK,uint8_t REGDAT){
    while (EUSCI_B_I2C_SENDING_STOP == EUSCI_B_I2C_masterIsStopSent(EUSCI_B0_BASE));
    NFCWriteData[0]=MEMA;
    NFCWriteData[1]=REGA;
    NFCWriteData[2]=MASK;
    NFCWriteData[3]=REGDAT;
    TXCOUNT=4;
    NAKFlag=true;

    EUSCI_B_I2C_setMode(EUSCI_B0_BASE,EUSCI_B_I2C_TRANSMIT_MODE);
    EUSCI_B_I2C_masterSendStart(EUSCI_B0_BASE);
    __bis_SR_register(CPUOFF + GIE);
}

/*
 * @description	: Initialize the SPI
 * @param		: None
 * @return		: None
 */
void initSPI()
{
    EUSCI_A_SPI_initMasterParam param = {0};
    param.selectClockSource = EUSCI_A_SPI_CLOCKSOURCE_SMCLK;
    param.clockSourceFrequency = CS_getSMCLK();  //Hz
    param.desiredSpiClock = 400000; //Hz
    param.msbFirst = EUSCI_A_SPI_MSB_FIRST;
    param.clockPhase = EUSCI_A_SPI_PHASE_DATA_CHANGED_ONFIRST_CAPTURED_ON_NEXT;
    param.clockPolarity = EUSCI_A_SPI_CLOCKPOLARITY_INACTIVITY_HIGH;
    param.spiMode = EUSCI_A_SPI_3PIN;
    //Initialize SPI
    EUSCI_A_SPI_initMaster(EUSCI_A1_BASE, &param);
    //enable SPI
    EUSCI_A_SPI_enable(EUSCI_A1_BASE);
    //Wait for slave to initialize
    __delay_cycles(100);
}

/*
 * @description		: SPI sends multiple bytes
 * @param-*txData	: Sending data Pointers
 * @param-len		: Length of data sent
 * @return		    : None
 */
void SPI_masterSendMultipleByte(uint8_t *txData, int len)
{
    unsigned int TempOutput = 0x00;
    int j;
    GPIO_setOutputLowOnPin(GPIO_PORT_P2,GPIO_PIN3);
    __delay_cycles(100); //Delay 30ns
    while(len--)
    {
        TempOutput = *txData;
        for(j=0;j<8;j++)
        {
            GPIO_setOutputHighOnPin(GPIO_PORT_P2,GPIO_PIN4);
            __delay_cycles(100);
            if(0x80==(TempOutput & 0x80))
            {
                GPIO_setOutputHighOnPin(GPIO_PORT_P2,GPIO_PIN6);
            }
            else
            {
                GPIO_setOutputLowOnPin(GPIO_PORT_P2,GPIO_PIN6);
            }
            TempOutput<<=1;
            __delay_cycles(100);
            //READ
            GPIO_setOutputLowOnPin(GPIO_PORT_P2,GPIO_PIN4);
            __delay_cycles(100);
        }
        txData++;
    }
    GPIO_setOutputHighOnPin(GPIO_PORT_P2,GPIO_PIN3);
    __delay_cycles(1000); //Delay 15ns
}

/*
 * @description		: Write values to the DAC register
 * @param-b1		: Byte 1
 * @param-b2		: Byte 2
 * @param-b3		: Byte 3
 * @return		    : None
 */
void WriteRegisterToDAC(uint8_t b1,uint8_t b2, uint8_t b3)
{
    uint8_t data[3] = {b1, b2, b3};
    SPI_masterSendMultipleByte(data,3);
}

/*
 * @description	: Initialize DAC
 * @param		: None
 * @return		: None
 */
void initDAC()
{
    WriteRegisterToDAC(0x60, 0x00, 0x00);
    setDAC(DAC_A, 0);
    setDAC(DAC_B, 0);
}

/*
 * @description		: Setting the DAC value
 * @param-channel	: DAC channel selection:DAC_A, DAC_B
 * @param-value		: DAC value
 * @return		    : None
 */
void setDAC(uint8_t channel,uint16_t value)
{
    uint8_t lowB = value & 0xFF;
    uint8_t highB = (value >> 8) & 0xFF;
    uint8_t chB = 0x30 + channel;
    WriteRegisterToDAC(chB, highB, lowB);
}

/*
 * @description	: Initialize the timer
 * @param		: None
 * @return		: None
 */
void initTimer()
{
    Timer_A_initUpModeParam initUpParam = {0};
    initUpParam.clockSource = TIMER_A_CLOCKSOURCE_SMCLK;
    initUpParam.clockSourceDivider = TIMER_A_CLOCKSOURCE_DIVIDER_10;  // 1MHz/10=100KHZ 1/100KHZ=10US
    initUpParam.timerPeriod = timerBaseStep*100; // t = 100*10us = 1ms  limit : 16 bits[uint16_t]
    initUpParam.timerInterruptEnable_TAIE = TIMER_A_TAIE_INTERRUPT_DISABLE;
    initUpParam.captureCompareInterruptEnable_CCR0_CCIE = TIMER_A_CCIE_CCR0_INTERRUPT_ENABLE;
    initUpParam.timerClear = TIMER_A_SKIP_CLEAR;
    initUpParam.startTimer = false;
    //Initialize the timer
    Timer_A_initUpMode(TIMER_A1_BASE, &initUpParam);
}

/*
 * @description	: Sets the timer period
 * @param		: None
 * @return		: None
 */
void setTimer()
{
    Timer_A_setCompareValue(TIMER_A1_BASE,TIMER_A_CAPTURECOMPARE_REGISTER_0,timerBaseStep*100);
}

/*
 * @description	: Initialize ADC
 * @param		: None
 * @return		: None
 */
void initADC()
{
    //Initialize the ADC Module
    /*
    * Base Address for the ADC Module
    * Use internal ADC bit as sample/hold signal to start conversion
    * USE SMCLK 1MHZ as clock source
    * Use default clock divider of 1
    */
    ADC_init(
            ADC_BASE,
            ADC_SAMPLEHOLDSOURCE_SC,
            ADC_CLOCKSOURCE_SMCLK,
            ADC_CLOCKDIVIDER_1
             );
    ADC_enable(ADC_BASE);
    /*
    * Base Address for the ADC Module
    * Sample/hold for 16 clock cycles
    * Do not enable Multiple Sampling
    */
    ADC_setupSamplingTimer(
            ADC_BASE,
            ADC_CYCLEHOLD_16_CYCLES,
            ADC_MULTIPLESAMPLESDISABLE
            );
    //Configure Memory Buffer
    /*
    * Base Address for the ADC Module
    * Use input A0
    * Use positive reference of Vref
    * Use negative reference of AVss
    */
    ADC_configureMemory(
            ADC_BASE,
            ADC_INPUT_A0,
            ADC_VREFPOS_AVCC,
            ADC_VREFNEG_AVSS
            );
    ADC_clearInterrupt(
            ADC_BASE,
            ADC_COMPLETED_INTERRUPT
            );
    //Enable Memory Buffer interrupt
    ADC_enableInterrupt(
            ADC_BASE,
            ADC_COMPLETED_INTERRUPT
            );
    //Internal Reference ON
    PMM_enableInternalReference();
    //Configure internal reference
    //If ref voltage no ready, WAIT
    while (PMM_REFGEN_NOTREADY == PMM_getVariableReferenceVoltageStatus());
    // settling reference 75ns
    __delay_cycles(1);
}

/*
 * @description	: Get the ADC sample value
 * @param		: None
 * @return		: Sampling results
 */
uint16_t  getADCValue()
{
    //Enable and Start the conversion
    //in Single-Channel, Single Conversion Mode
    ADC_startConversion(ADC_BASE,ADC_SINGLECHANNEL);
    while(!ADC_getInterruptStatus(ADC_BASE,ADC_COMPLETED_INTERRUPT_FLAG));
    //Automatically clears ADCIFG0 by reading memory buffer
    uint16_t result =(uint16_t) ADC_getResults(ADC_BASE);
    ADC_disableConversions(ADC_BASE,ADC_COMPLETECONVERSION);
    return result;
}

/*
 * @description	: Save the test results in character array format
 * @param		: None
 * @return		: None
 */
void saveData() {
    int i;
    char tmpchar[5]={'\0'},len;

    AllData[16*(outN/2-1)+0]=0x2F;
    AllData[16*(outN/2-1)+1]='0';
    AllData[16*(outN/2-1)+2]='0';
    AllData[16*(outN/2-1)+3]='0';
    AllData[16*(outN/2-1)+4]='0';
    AllData[16*(outN/2-1)+5]='0';
    AllData[16*(outN/2-1)+6]=0x2C;
    AllData[16*(outN/2-1)+7]='0';
    AllData[16*(outN/2-1)+8]='0';
    AllData[16*(outN/2-1)+9]='0';
    AllData[16*(outN/2-1)+10]='0';
    AllData[16*(outN/2-1)+11]=0x2C;
    AllData[16*(outN/2-1)+12]='0';
    AllData[16*(outN/2-1)+13]='0';
    AllData[16*(outN/2-1)+14]='0';
    AllData[16*(outN/2-1)+15]='0';

    //Convert the data to ascii characters
    len=binaryToAscii(outRefPot_odd,tmpchar);//x 1-5:5
    for(i=0;i<len;i++){
        AllData[16*(outN/2-1)+5-len+1+i]=tmpchar[i];
    }
    len=binaryToAscii(outInp_even1-outInp_odd1,tmpchar);//y1 7-10:4
    for(i=0;i<len;i++){
        AllData[16*(outN/2-1)+10-len+1+i]=tmpchar[i];
    }
    len=binaryToAscii(outInp_even2-outInp_odd2,tmpchar);//y2 12-15:4
    for(i=0;i<len;i++){
        AllData[16*(outN/2-1)+15-len+1+i]=tmpchar[i];
    }
}
/*
 * @description	: Encapsulate the character array into NEDF data format
 * @param		: None
 * @return		: None
 */
void NFCNDEF(){
    int i,j=0,movenum=0;

    //ndef Total length = header (1) + type length (1) +payload length (1, 4, 4 here) + type (10 here) +payload(1600 here, numberOfSteps/2*16)
    NFCNDEFData[0]=0x03;//Denote NDEF
    NFCNDEFData[1]=0xFF;
    NFCNDEFData[2]=0x03;
    NFCNDEFData[3]=0x31;//0650h=1616
    NFCNDEFData[4]=0xC2;//11000010,SR=0,payload=4,TNF=0X20
    NFCNDEFData[5]=0x0A;//10
    NFCNDEFData[6]=0x00;
    NFCNDEFData[7]=0x00;
    NFCNDEFData[8]=0x03;
    NFCNDEFData[9]=0x21;//00000640h=1600
    NFCNDEFData[10]='t';
    NFCNDEFData[11]='e';
    NFCNDEFData[12]='x';
    NFCNDEFData[13]='t';
    NFCNDEFData[14]='/';
    NFCNDEFData[15]='p';
    NFCNDEFData[16]='l';
    NFCNDEFData[17]='a';
    NFCNDEFData[18]='i';
    NFCNDEFData[19]='n';

    NFCNDEFData[20]='b';
    for(i=0;i<numberOfSteps/2*16;i++){
        NFCNDEFData[20+j+1]=AllData[i];
        j++;
        if(movenum<numberOfSteps/2-50){
            if((i+1)%16==0){
                i=i+16;
                movenum++;
            }
        }
    }
    NFCNDEFData[20+j+1]=0xFE;
}

/*
 * @description	: Write the data to the NFC storage area
 * @param		: None
 * @return		: None
 */
void WriteAllData(){
    int i,j=1,m=1,n,k;
    numberOfSteps=100;
    //20: Before payload, 1+800:b and 50 points, 1: end 0xFE
    for(i=0;i<(20+1+numberOfSteps/2*16+1);i++){
        NFCWriteData[j]=NFCNDEFData[i];
        if(j%16==0||i==(20+1+numberOfSteps/2*16+1)-1){
            j=1;
            if(m>0x38){
                NFCWrite(m+0x07);
                m++;
            }else{
                if(m==0x38){
                    for(k=0;k<7;k++){
                        NFCWriteData[9+k]=0x00;
                    }
                    NFCWriteData[9+k]=0xFF;
                    if(i!=(20+1+numberOfSteps/2*16+1)-1){
                        i=i-8;
                    }
                }
                GPIO_setOutputHighOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);
                NFCWrite(m);
                m++;
            }
            for(n=0;n<16;n++){
                NFCWriteData[n+1]=0x00;
            }
            for(k=0;k<500;k++){
                __delay_cycles(100);
            }
        }else{
            j++;
        }
    }
    GPIO_setOutputLowOnPin(GPIO_PORT_LED_01,GPIO_PIN_LED_01);

}

/*
 * @description	: This is the TIMER1_A0 interrupt vector service routine.
 * @param		: None
 * @return		: None
 */
#if defined(__TI_COMPILER_VERSION__) || defined(__IAR_SYSTEMS_ICC__)
#pragma vector=TIMER1_A0_VECTOR
__interrupt
#elif defined(__GNUC__)
__attribute__((interrupt(TIMER1_A0_VECTOR)))
#endif
void TIMER1_A0_ISR (void)
{
    int i;
    if(stanum>0)
    {
        stanum=stanum-1;
    }else{
        samplenum=samplenum+1;
        ADC_configureMemory(
                ADC_BASE,
                ADC_INPUT_A0,
                ADC_VREFPOS_AVCC,
                ADC_VREFNEG_AVSS
                );
        for(i=0;i<64;i++){
            ADCsum1_mid = ADCsum1_mid + getADCValue();
        }
        ADCsum1 = ADCsum1 + ADCsum1_mid/64;
        ADCsum1_mid=0;
        ADC_configureMemory(
                ADC_BASE,
                ADC_INPUT_A1,
                ADC_VREFPOS_AVCC,
                ADC_VREFNEG_AVSS
                );
        for(i=0;i<64;i++){
            ADCsum2_mid = ADCsum2_mid + getADCValue();
        }
        ADCsum2 = ADCsum2 + ADCsum2_mid/64;
        ADCsum2_mid=0;
        if (sRunning)
        {
            Nstep = Nstep + 1;  // Increase step number
            sRunning = false;
            if (Nstep > numberOfSteps){
                cycleDone = true;
            }  // Check if desigerd number of steps are done
            outN = Nstep;
            ADCsum1=ADCsum1/(samplenum-1);
            ADCsum2=ADCsum2/(samplenum-1);
            samplenum=1;
            // If even step->W_down
            if (Nstep % 2 == 0){
                oddflag=true;
                outInp_even1 = ADCsum1;
                outInp_even2 = ADCsum2;
                ADCsum1=0;
                ADCsum2=0;
                outRefPot_even = refPot;

                tmp = refPot;
                tmp = tmp + refIncEven;  // Make step
                if (tmp > 65535){
                    tmp = 65535;
                } else if (tmp < 0){
                    tmp = 0;
                }
                refPot = (unsigned int)tmp;
                setDAC(DAC_RefCH, refPot);
                outSend = true;  // Small cycle done. Now this triggers sending
            } else{  // If odd step->W_up
                oddflag=false;
                outInp_odd1 = ADCsum1;
                outInp_odd2 = ADCsum2;
                ADCsum1=0;
                ADCsum2=0;
                outRefPot_odd = refPot;

                tmp = refPot;
                tmp = tmp + refIncOdd;
                if (tmp > 65535){
                    tmp = 65535;
                } else if (tmp < 0){
                    tmp = 0;
                }
                refPot = (unsigned int)tmp;
                setDAC(DAC_RefCH, refPot);
            }
        }
    }

}

/*
 * @description	: This is the IIC(USCI_B0) interrupt vector service routine.
 * @param		: None
 * @return		: None
 */
#if defined(__TI_COMPILER_VERSION__) || defined(__IAR_SYSTEMS_ICC__)
#pragma vector=USCI_B0_VECTOR
__interrupt
#elif defined(__GNUC__)
__attribute__((interrupt(USCI_B0_VECTOR)))
#endif
void USCIB0_ISR(void)
{
    static uint8_t count_T = 0;
    static uint8_t count_R = 0;
    switch(__even_in_range(UCB0IV, USCI_I2C_UCBIT9IFG))
    {
        case USCI_I2C_UCNACKIFG:    // NAK received (master only)
            // Resend START if NAK'd
            if(NAKFlag){
                EUSCI_B_I2C_masterSendStart(EUSCI_B0_BASE);
            }else{
                EUSCI_B_I2C_masterReceiveStart(EUSCI_B0_BASE);
            }
//            __bic_SR_register_on_exit(CPUOFF);
            break;
        case USCI_I2C_UCRXIFG0:     // RXIFG0
            if(RXCOUNT){
                NFCReadData[count_R] = EUSCI_B_I2C_masterReceiveMultiByteNext(EUSCI_B0_BASE);
                RXCOUNT--;
                count_R++;
            }
            else{
                EUSCI_B_I2C_masterReceiveMultiByteStop(EUSCI_B0_BASE);
                count_R = 0;
                __bic_SR_register_on_exit(CPUOFF); // Exit LPM0
            }
            break;
        case USCI_I2C_UCTXIFG0:     // TXIFG0
            // Check TX byte counter
            if (TXCOUNT)
            {
                EUSCI_B_I2C_masterSendMultiByteNext(EUSCI_B0_BASE,NFCWriteData[count_T]);
                // Decrement TX byte counter
                TXCOUNT--;
                count_T++;
            }
            else
            {
                EUSCI_B_I2C_masterSendMultiByteStop(EUSCI_B0_BASE);
                count_T = 0;
                // Exit LPM0
                __bic_SR_register_on_exit(CPUOFF);
            }
            break;
        default:
            break;
  }
}

