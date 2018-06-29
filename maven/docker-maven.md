# Docker Maven

## Initialisation
```
docker pull maven
docker volume create --name maven-repo
```

## Run maven command
```
docker run -it \
--rm \
--name my-maven-project \
-v maven-repo:/root/.m2 \
-v "$(PWD)":/usr/src/mymaven \
-w /usr/src/mymaven \
maven:3.5.3-jdk-11 \
[MAVEN_COMMAND]
```

## Fix Execution default-test of goal error
Full error:
```
Execution default-test of goal org.apache.maven.plugins:maven-surefire-plugin:2.20.1:test failed.: NullPointerException -> [Help 1]
```


Change maven-surefire-plugin version into:
```
<plugin>
  <artifactId>maven-surefire-plugin</artifactId>
  <version>2.21.0</version>
</plugin>
```
