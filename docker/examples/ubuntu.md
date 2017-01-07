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
apt-get install curl -y
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source /root/.bashrc
nvm i 4.4.6
```
