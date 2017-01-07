# Users

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
