# Maven archetypes

## Custom archetype
1. Generate archetype bootstrap files
```
mvn archetype:generate \
 -DgroupId=com.some.package \
 -DartifactId=my-archetype \
 -DarchetypeArtifactId=maven-archetype-archetype
```
1. Go to archetype directory
```
cd my-archetype
```
1. Configure directory contents
1. Install archetype
```
mvn install
```

## Create project from custom archetype
```
mvn archetype:generate \
-DgroupId=com.mycompany.myapp \
-DartifactId=myapp \
-DarchetypeGroupId=com.some.package \
-DarchetypeArtifactId=my-archetype \
-DarchetypeVersion=1.0 \
-DinteractiveMode=false
```
