# Maven Basics

## Create project
```
mvn \
archetype:generate \
-DgroupId=com.maven.examples \
-DartifactId=maven-test
```

## Executable jar
On maven-jar-plugin plugin define the main class:
```
<plugin>
  <artifactId>maven-jar-plugin</artifactId>
  <version>3.1.0</version>
  <configuration>
    <archive>
      <manifest>
        <addClasspath>true</addClasspath>
        <classpathPrefix>lib/</classpathPrefix>
        <mainClass>com.maven.examples.App</mainClass>
      </manifest>
    </archive>
  </configuration>
</plugin>
```

## Build project
```
mvn package
```
