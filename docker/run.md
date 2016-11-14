# Docker Run

```
docker run <options> <imageName> <command> <arguments>
```

## Container options
* --rm (deletes container when exits)
* -it (runs container in interactive mode)
* --detach or -d (detaches the container from the terminal)
* --publish or -p (publish specific ports using <hostPort>:<containerPort>)
* -P (publish random ports)
* --name (the container name)
* --env or -e (pass environment variable)
* --volume (mount host path into the container file system using <hostPath>:<containerPath>)
* --net (the container network)
