# NodeJS installation

## Recommended method NVM
https://github.com/creationix/nvm

## Install (Ubuntu 14.04)
```
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

## To use npm install -g without sudo

### Ubuntu 14.04
(yet-another-option.sh from https://gist.github.com/isaacs/579814#file-yet-another-option-sh)
1. echo prefix = ~/.node >> ~/.npmrc
2. edit ~/.bashrc and add:
```
export PATH="$PATH:$HOME/.node/bin"
```

### Ubuntu 12.04 & MacOS
1. npm config set prefix '~/.npm-packages'
2. edit ~/.bashrc and add:
```
export PATH="$PATH:$HOME/.npm-packages/bin"
```

** if something is completely broken and you want to start from scratch, all you need to do is remove your ~/.node directory

## Upgrade node version
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```
