# Submodules

## Add a submodule
```
git submodule add https://submodule/repository/url path/of/submodule
```

## Cloning repository with submodules

### Method A
```
git clone https://main/repository/url
git submodule init
git submodule update
```

### Method B
```
git clone --recursive https://main/repository/url
```

## Update submodules
```
git submodule update --remote
```
