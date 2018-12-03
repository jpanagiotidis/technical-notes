# YARN CLI

## List applications
```
yarn application -list
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
