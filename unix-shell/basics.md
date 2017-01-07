# Unix Basics

## Add hidden files to * and ? wildcards
```
shopt -s dotglob
```

## Remove hidden files to * and ? wildcards
```
shopt -u dotglob
```

## move all directory files + hidden files
```
shopt -s dotglob
mv [from_directory_path]* [to_directory_path]
```

## secure copy scp
### from local to remote
```
scp path/to.file user@address:/remote/path
```
### from remote to local
```
scp user@address:/remote/path/to.file local/path
```

## Empty trash (ubuntu 12.04)
```
rm -rf ~/.local/share/Trash/*
```

## History of commands
```
history
```

## Get date
```
date
```

## Get path of command
```
which somecommand
```

## Print path variable
```
echo "$PATH"
```

## Reload profile
```
source ~/.bashrc
```

## Chain commands
```
A; B    # Run A and then B, regardless of success of A
A && B  # Run B if A succeeded
A || B  # Run B if A failed
A &     # Run A in background.
```
