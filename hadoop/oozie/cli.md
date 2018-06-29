# Oozie CLI
[Reference](https://oozie.apache.org/docs/3.1.3-incubating/DG_CommandLineTool.html)

## List jobs
```
oozie jobs -oozie [URL]/oozie
```

### Limit results
```
oozie jobs -oozie [URL]/oozie -len 10
```

### Set local timezone
```
oozie jobs -oozie [URL]/oozie -localtime
```

### Filter by status
```
oozie jobs -oozie [URL]/oozie -filter status=[RUNNING|SUCCEEDED|KILLED etc]
```

### Show coordinators only
```
oozie jobs -oozie [URL]/oozie -jobtype coordinator
```

### Show bundles only
```
oozie jobs -oozie [URL]/oozie -jobtype bundle
```

## Kill Job
```
oozie job -oozie [URL]/oozie -kill [JOB_ID]
```

## Job info
```
oozie job -oozie [URL]/oozie -info [JOB_ID]
```
