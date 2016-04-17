# AWS EC2

## Get SSH access
1. add IP
  1. go to "Network & Security"/"security groups"
  2. tick and edit security group
  3. add rule with SSH ip/32
2. create key
  1. go to "Network & Security"/"Key Pairs"
  2. click "Create Key Pair"
3. set key permissions
  1. chmod 400 /path/to/key.pem
4. start ssh
  1. ssh -i /path/to/key.pem ec2-user@host
