# rsync
Transfer/synchronise files and directories

## From local to remote through SSH
```
rsync -avzhe ssh path/to/local/dir ${USER}@${HOST}:/path/to/remote/dir
```

## Test command
```
rsync --dry-run -avzhe ssh path/to/local/dir ${USER}@${HOST}:/path/to/remote/dir
```
