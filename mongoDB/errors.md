## On "couldn't connect to server"
```
sudo rm -rf /var/lib/mongodb/mongod.lock
sudo service mongod restart
```

## Failed global initialization: BadValue Invalid or no user locale set. Please ensure LANG and/or LC_* environment variables are set correctly.
```
export LC_ALL=C 
```
