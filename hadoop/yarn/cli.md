# YARN CLI

## List applications
```
yarn application -list

yarn application -list -appStates FINISHED
yarn application -list -appStates FAILED
```

## Application status
```
yarn application -status [APPLICATION_ID]
```

## Kill application
```
yarn application -kill [APPLICATION_ID]
```

## Get queues
```
curl '[HOST]:8088/ws/v1/cluster/scheduler' | jq '.scheduler.schedulerInfo.queues.queue[] | .queueName'
```

## Get cluster scheduler information
```
curl '[HOST]:8088/ws/v1/cluster/scheduler' | jq .
```

## Show application logs
https://docs.cloudera.com/HDPDocuments/HDP3/HDP-3.0.1/data-operating-system/content/use_the_yarn_cli_to_view_logs_for_running_applications.html

```
yarn logs -applicationId [APPLICATION_ID]
yarn logs -applicationId [APPLICATION_ID] -containerId [Container_ID]
```

```
yarn logs -applicationId [APPLICATION_ID] -show_application_log_info
yarn logs -applicationId [APPLICATION_ID] -show_container_log_info
```
```
yarn logs -applicationId [APPLICATION_ID] -log_files [log_file_type]
yarn logs -applicationId [APPLICATION_ID] -log_files stdout
yarn logs -applicationId [APPLICATION_ID] -log_files stderr
```