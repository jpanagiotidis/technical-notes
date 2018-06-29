# Users

## View users
```
cat /etc/passwd
```

### /etc/passwd explanation
{username}:{x}:{UID}:{GID}:{Comment}:{Home directory}:{Default shell}

* **username** User's name
* **x** the account is protected by a shadowed password (in /etc/shadow)
* **UID** integer that represents the User IDentification
* **GID** integer that represents the primary Group IDentification
* **Comment** a comment
* **Home directory** The user's home directory
* **Default shell** The available shell on user's login

## View groups
```
/etc/group
```

### /etc/group explanation
{Group name}:{Group password}:{GID}:{Group members}

* **Group name** The group name
* **Group password** x indicates group passwords are not being used
* **GID** Integer that represents the group id
* **Group members** Comma separated list of the users belonging to the group

## Add a new user (as root user)
1. Create user
```
useradd -m -d /home/test -s /bin/bash -g sudo test
```
### explanation:
+ **useradd** create a new user
+ **-m** create the home directory
+ **-d /home/test** set the user's home directory to /home/test
+ **-s /bin/bash** make the user's default shell bash (Ubuntu uses dash by default)
+ **-g sudo** add user to the sudo group (for running commands with sudo)
+ **test** the name of the new user
1. Set password
```
passwd test
```
1. Switch to new user
```
su test
```
1. Go back to root user
```
exit
```

## Resources
* [Managing Users & Groups, File Permissions & Attributes](https://www.tecmint.com/manage-users-and-groups-in-linux/)
