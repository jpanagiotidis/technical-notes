# MacOS R

## Run disk utility
1. restart while pressing command + r
1. go to "Disk Utility"
1. try "Verify Disk"
  1. if errors found click "Repair Disk"
1. try "Verify Permissions"
  1. if errors found click "Repair Permissions"
1. restart

## Open in Safe Boot
1. restart while pressing shift (or shift + command + v for logging while safe booting)
2. if safe boot succeeds try normal restart

## Run fsck
1. restart while pressing command + s
2. run in console:
  ```
  fsck -fy
  ```
3. if above command outputs: "The volume [mac's name] appears to be ok" restart by typing:
  ```
  reboot
  ```
4. if the command from step 2 outputs "FILE SYSTEM WAS MODIFIED" the go to step 2

## Reset NVRAM
1. open computer while pressing command + option + p + r (hold them until restarts again)
