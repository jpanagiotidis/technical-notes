# Spring Boot

## Application bootstrap maven project
Go to this [page](https://start.spring.io/),
add the following dependencies:
* Web
* Devtools

and download the zip file with the mavem

## Change log level
On ```resources/application.properties``` add the logging level per dependency. For example:
```
logging.level.org.springframework.web=DEBUG
logging.level.org.springframework=DEBUG
```

## Views with Mustache
* Add dependency:
```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-mustache</artifactId>
</dependency>
```
* Add mustache templates under ```main/resources/templates``` with suffix ```.mustache```

## Dependency injection
### Component
Indicates that an annotated class is a "component". Such classes are considered as candidates for auto-detection when using annotation-based configuration and classpath scanning.
### Service
Indicates that an annotated class is a "Service", originally defined by Domain-Driven Design (Evans, 2003) as "an operation offered as an interface that stands alone in the model, with no encapsulated state."

May also indicate that a class is a "Business Service Facade" (in the Core J2EE patterns sense), or something similar. This annotation is a general-purpose stereotype and individual teams may narrow their semantics and use as appropriate.

This annotation serves as a specialization of ```@Component```, allowing for implementation classes to be autodetected through classpath scanning.
### Repository
Indicates that an annotated class is a "Repository", originally defined by Domain-Driven Design (Evans, 2003) as "a mechanism for encapsulating storage, retrieval, and search behavior which emulates a collection of objects".
Teams implementing traditional Java EE patterns such as "Data Access Object" may also apply this stereotype to DAO classes, though care should be taken to understand the distinction between Data Access Object and DDD-style repositories before doing so. This annotation is a general-purpose stereotype and individual teams may narrow their semantics and use as appropriate.

A class thus annotated is eligible for Spring DataAccessException translation when used in conjunction with a PersistenceExceptionTranslationPostProcessor. The annotated class is also clarified as to its role in the overall application architecture for the purpose of tooling, aspects, etc.

As of Spring 2.5, this annotation also serves as a specialization of ```@Component```, allowing for implementation classes to be autodetected through classpath scanning.

### Controller
Indicates that an annotated class is a "Controller" (e.g. a web controller).

This annotation serves as a specialization of ```@Component```, allowing for implementation classes to be autodetected through classpath scanning. It is typically used in combination with annotated handler methods based on the RequestMapping annotation.

### Autowired
In order for a constructor, field, setter method or config method to be discovered and handled by the dependency injection mechanism the ```@Autowired``` annotation is required.

### ComponentScan
Spring boot autodetects components by scaning the application package (as part of ```@SpringBootApplication``` annotation). If a component is defined outside of the main package, then ```@ComponentScan``` annotation can be used in order to search in the other package.
