# Vagrant

## Get version
```
vagrant -v
```

## Get current provider
```
vagrant provider
```

## Plugins

### List plugins
```
vagrant plugin list
```

### Install plugin
```
vagrant plugin install ${PLUGIN_NAME}
```

## Vagrant file

### Find OS
```
if (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
  # do windows os actions
else
  # do unix based os actions
end
```

### Create multiple machines
```
config.vm.define :dev do |dev|
  # add configuration here
end
```

## Start machine
```
vagrant up ${MACHINE_NAME}
```

## Stop machine
```
vagrant halt ${MACHINE_NAME}
```

## Delete machine
```
vagrant destroy ${MACHINE_NAME}
```

## List machines
```
vagrant global-status
```

## SSH into the machine

### Start SSH
```
vagrant ssh ${MACHINE_NAME}
```

### Exit
```
exit
```
