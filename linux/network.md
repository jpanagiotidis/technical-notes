# Linux networking

## View IP
```
ifconfig
```
or
```
ip addr show eth0
```

## View the ARP cache
```
arp -a
```

## Current routing table
```
netstat -r
```

## Hosts file
```
/etc/hosts
```

## Network speed test
```
nload
```

## Open ports
### TCP, UDP
run as root in order to view PID/Program name
```
netstat -tulpn
```
