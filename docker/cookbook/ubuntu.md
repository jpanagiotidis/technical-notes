# Ububntu
```
docker run -it --detach --name=ubu ubuntu:16.04
docker exec -it ubu bash
```


```
docker run -it \
--detach \
--volume /some/path/to/local/fs:/var/playground \
--name=ubu \
ubuntu:16.04

docker exec -it ubu bash
apt-get update
apt-get install curl -y
apt-get install git -y
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source /root/.bashrc
nvm i 4.4.6
```

## gyp dependencies
```
apt-get install build-essential checkinstall -y
apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev -y
cd /tmp
curl -O https://www.python.org/ftp/python/2.7.13/Python-2.7.13.tgz
tar xzf Python-2.7.13.tgz
cd Python-2.7.13
./configure
make altinstall
ln -s /usr/local/bin/python2.7 /bin/python
```
