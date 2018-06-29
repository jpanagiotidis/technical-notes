yum update -y
yum install curl git -y
touch /root/.bash_profilecurl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source /root/.bash_profile
nvm i 6.9.1
yum install gcc -y
