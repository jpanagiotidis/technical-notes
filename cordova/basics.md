# Cordova Basics

## Create Project
```
cordova create [project_directory] [reverse_domain-style_identifier] [project_title]
```
### example:
```
cordova create hello com.example.hello HelloWorld
```

## Add platforms
```
cordova platform add [platform_name] --save
```
### example:
```
cordova platform add android --save
```

## Add specific platform version
```
cordova platform add [platform_name]@[version] --save
```
### example:
```
cordova platform add android@4.1.0 --save
```

## List added platforms
```
cordova platforms ls
```

## Remove platforms
```
cordova platform rm [platform_name]
```

## Add plugin
```
cordova plugin add [plugin] --save
```
### example:
```
cordova plugin add cordova-plugin-crosswalk-webview --save
```

## Prepare cordova
Adds plugins and platforms
```
cordova prepare
```

## Build project
```
cordova build android
```

## Run project on device
```
cordova run android
```

## Create debug release
```
cordova build android --release
```
go to android folder

```
ant debug
```
