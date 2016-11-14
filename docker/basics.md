# Docker Basics

## Docker version
```
docker --version
docker-compose --version
docker-machine --version
```

## Containers Status
```
docker ps
```

### View also exited containers
```
docker ps -a
```

### View ids of exited containers
```
docker ps -a -q -f status=exited
```

## List available images
```
docker images
```

## Remove images
```
docker rmi <imageID>|<imageName>
```

## Start container
```
docker start <containerName>
```

## Stop container
```
docker stop <containerName>
```

## Remove container
```
docker rm -f <containerID>|<containerName>
```

## Remove all exited containers
```
docker rm $(docker ps -a -q -f status=exited)
```

## View container logs
```
docker logs -f <containerName>
```

## Inspect container
```
docker inspect <containerName>
```

## Get container ip
```
docker inspect <containerName> | grep IPAddress
```

## Open container shell
```
docker exec -it <containerName> bash
```

## Inspect container's running processes
```
docker top <containerName>
```
