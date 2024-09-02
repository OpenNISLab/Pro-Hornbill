################################################################################
# Automatically-generated file. Do not edit!
################################################################################

SHELL = cmd.exe

# Each subdirectory must supply rules for building sources it contributes
%.obj: ../%.c $(GEN_OPTS) | $(GEN_FILES) $(GEN_MISC_FILES)
	@echo 'Building file: "$<"'
	@echo 'Invoking: MSP430 Compiler'
	"D:/Program Files/ti/ccs1240/ccs/tools/compiler/ti-cgt-msp430_21.6.1.LTS/bin/cl430" -vmsp --code_model=small --data_model=small --use_hw_mpy=F5 --include_path="D:/Program Files/ti/ccs1240/ccs/ccs_base/msp430/include" --include_path="E:/master/1/组内相关资料/农药检测/PCB/代码/DHX_V6" --include_path="E:/master/1/组内相关资料/农药检测/PCB/代码/DHX_V6/driverlib/MSP430FR2xx_4xx" --include_path="D:/Program Files/ti/ccs1240/ccs/tools/compiler/ti-cgt-msp430_21.6.1.LTS/include" --advice:hw_config="all" --define=DEPRECATED --define=__MSP430FR2433__ -g --printf_support=minimal --diag_warning=225 --diag_wrap=off --display_error_number --silicon_errata=CPU21 --silicon_errata=CPU22 --silicon_errata=CPU40 --preproc_with_compile --preproc_dependency="$(basename $(<F)).d_raw" $(GEN_OPTS__FLAG) "$<"
	@echo 'Finished building: "$<"'
	@echo ' '


