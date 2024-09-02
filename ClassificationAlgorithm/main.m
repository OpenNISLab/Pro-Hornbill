clear
clc
% close all

tic
%% Initialize
all_data = [];
diff_concent_data = [];
identical_enzyme_data = [];
newdata=[];
classification_matrix=[];
result=[];

%% Path setup and processing
% Specifies the parent directory path of the folder containing the.txt file
parent_folder ="Rawdata_8";
newdata_folder="new";
% newdata_folder="Rawdata_7";
% Gets all the child folders in the parent directory
subfolders = dir(parent_folder);
newdata_subfolders = dir(newdata_folder);

% Keep only the folder and remove the files
subfolders = subfolders([subfolders.isdir]);  
newdata_subfolders = newdata_subfolders([newdata_subfolders.isdir]);

%% Feature construction
for folder_idx = 3:length(subfolders)

    current_folder = subfolders(folder_idx).name;
    % Get the full path of the current folder and extract the results for acetylcholinases and butylcholinases
    current_folder_path = fullfile(parent_folder, current_folder);
    % Get information about all files in the folder
    files = dir(fullfile(current_folder_path, '*.txt'));

    for file_idx = 1:length(files)
        file_path = fullfile(current_folder_path, files(file_idx).name);
        file_content = readtable(file_path,'ReadVariableNames',false);

        % Extracting peak information
        [pks,locs] = findpeaks(file_content.Var2);

        % The empty label information is marked as number 17
        % and other concentrations are in accordance with the concentration information
        if(files(file_idx).name(1:4)=='null')
            diff_concent_data = [diff_concent_data;[17,pks(end)]];
        else
            if(isempty(str2num(files(file_idx).name(4:end-7))))
                diff_concent_data = [diff_concent_data;[str2num(files(file_idx).name(4:end-9)),pks(end)]];
            else
                diff_concent_data = [diff_concent_data;[str2num(files(file_idx).name(4:end-7)),pks(end)]];
            end
        end


    end

    % Sort the data by concentration
    diff_concent_data_sort=sort(diff_concent_data(:,1),1);
    for i=1:length(diff_concent_data_sort)
        diff_concent_data_sort(i,2)=diff_concent_data(diff_concent_data(:,1)==diff_concent_data_sort(i,1),2);
    end

    % Data deviation
    diff_concent_data_sort_cha=diff_concent_data_sort(1:end-1,:);
    diff_concent_data_sort_cha(:,2)=diff_concent_data_sort(end,2)-diff_concent_data_sort(1:end-1,2);
    diff_concent_data_sort_cha(diff_concent_data_sort_cha<0)=0;


    % Data merge
    identical_enzyme_data = [identical_enzyme_data, diff_concent_data_sort_cha(:,2)];

    % Build the data name matrix
    current_folder_matrix=[];
    for i=1:length(diff_concent_data_sort_cha(:,1))
        current_folder_matrix=[current_folder_matrix;current_folder];
    end
    classification_matrix=[classification_matrix,strcat(current_folder_matrix,string(diff_concent_data_sort_cha(:,1)))];
    diff_concent_data = [];
    diff_concent_data_sort = [];
    diff_concent_data_sort_cha=[];

end

%% New data processing

for folder_idx = 3:length(newdata_subfolders)
    current_folder = newdata_subfolders(folder_idx).name;
    current_folder_path = fullfile(newdata_folder, current_folder);
    files = dir(fullfile(current_folder_path, '*.txt'));

    for file_idx = 1:length(files)
        file_path = fullfile(current_folder_path, files(file_idx).name);
        file_content = readtable(file_path,'ReadVariableNames',false);

        [pks,locs] = findpeaks(file_content.Var2);
        if(files(file_idx).name(1:4)=='null')
            diff_concent_data = [diff_concent_data,[17,pks(end)]];
        else
            if(isempty(str2num(files(file_idx).name(4:end-7))))
                diff_concent_data = [diff_concent_data,[str2num(files(file_idx).name(4:end-9)),pks(end)]];
            else
                diff_concent_data = [diff_concent_data,[str2num(files(file_idx).name(4:end-7)),pks(end)]];
            end
        end
    end
    diff_concent_data_cha=diff_concent_data(1:end-2);
    diff_concent_data_cha(2:2:end)=diff_concent_data(end)-diff_concent_data(2:2:end-2);
    diff_concent_data_cha(diff_concent_data_cha<0)=0;

    %Store the data from diff_concent_data_cha in newdata
    %Because diff_concent_data_cha contains multiple concentrations of a pesticide and an enzyme, each concentration needs to be treated as a separate set of data in newdata (the AChE is arranged next to the BChE).
    %Therefore, if more than one concentration of a pesticide is input, the odd position of AChE is first arranged, and the even position of BChE is then placed. Divided into three groups of data
    if mod(folder_idx,2)==1
        befor_write_locB=length(newdata)+1;
        befor_write_locE=length(diff_concent_data_cha)+length(newdata);
        newdata(:,befor_write_locB:2:befor_write_locE)=diff_concent_data_cha(:,2:2:end);
        newdata_matrix(:,befor_write_locB:2:befor_write_locE)=strcat(current_folder,string(diff_concent_data_cha(:,1:2:end)));      
    else
        newdata(:,befor_write_locB+1:2:befor_write_locE+1)=diff_concent_data_cha(:,2:2:end);
        newdata_matrix(:,befor_write_locB+1:2:befor_write_locE+1)=strcat(current_folder,string(diff_concent_data_cha(:,1:2:end)));
    end

    diff_concent_data = [];
    diff_concent_data_cha=[];
end
%% Data processing

for i=1:length(newdata)/2
    % The distance between the two enzymes and the feature set is calculated
    AChE_d=abs(identical_enzyme_data(:,1:2:end)-newdata(:,1+(i-1)*2));
    BChE_d=abs(identical_enzyme_data(:,2:2:end)-newdata(:,2+(i-1)*2));
    distance=abs(AChE_d+BChE_d);

    % The resulting column is replicated, because the label matrix for a pesticide for a concentration is divided into two enzymes
    Comparison_matrix(:,1:2:width((distance==min(min(distance))))*2)=(distance==min(min(distance)));
    Comparison_matrix(:,2:2:width((distance==min(min(distance))))*2)=(distance==min(min(distance)));

    result=[result,classification_matrix(Comparison_matrix)'];
end

%% Results are calculated and displayed
result=string(result);
result_both=[newdata_matrix;result;result==newdata_matrix];

result_false=[result_both(1,result_both(3,:)=='false');result_both(2,result_both(3,:)=='false')];
disp('-----Misclassified input and output-----')
disp('Input:')
if(result_both(1,result_both(3,:)=='false')~='')
    disp(result_both(1,result_both(3,:)=='false'))
else
    disp('None')
end
disp('Output:')
if(result_both(2,result_both(3,:)=='false')~='')
    disp(result_both(2,result_both(3,:)=='false'))
else
    disp('None')
end
disp(['result:',num2str(length(newdata_matrix(result==newdata_matrix))/length(result)*100),'%'])

toc

