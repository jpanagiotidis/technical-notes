# Cordova Installation

## Steps
1. Install nodejs and npm
2. Install a git client
3. Install cordova using:
```
npm install -g cordova
```
* If npm ERR! fetch failed https://...
  then:
```
npm config set registry http://registry.npmjs.org/
```
and repeat step (3)

## See available cordova versions
```
npm view cordova versions
```

## Install specific cordova version
```
sudo npm install -g cordova@3.6.3-0.2.13
```

## Add android
1. install android sdk
2. install ant
```
sudo ~/.bashrc
export PATH=${PATH}:/path/to/adt-bundle/sdk/platform-tools:/path/to/adt-bundle/sdk/tools
```
3. restart terminal

### error
while loading shared libraries: libz.so.1: cannot open shared object (Ubuntu 14.04 64bit)

solution (http://askubuntu.com/questions/147400/problems-with-eclipse-and-android-sdk)
```
sudo apt-get install  lib32z1 lib32ncurses5 lib32bz2-1.0
```
