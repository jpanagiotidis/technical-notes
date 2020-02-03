# Git configuration

## Edit the configuration file
```
git config --global -e
git config --local -e
```

## Edit a single value
```
git config --local http.sslCert "/mycert.crt"
```

## View config with path
```
git config --list --show-origin
```