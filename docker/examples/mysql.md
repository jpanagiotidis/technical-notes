# Docker MySQL

## Download image
```
docker pull mysql
```

## Run MySQL
```
docker run -d --name test-mysql --env MYSQL_ROOT_PASSWORD=pass -p 5006:3306 mysql
```

### Other useful options
* -e MYSQL_USER=jon
* -e MYSQL_PASSWORD=pass
* -e MYSQL_DATABASE=books

### Enter MySQL client inside the container
```
docker exec -it test-mysql bash
mysql -u root -p
```

### Set custom configuration file
1. Create conf.d folder with custom configuration
  ```
  mkdir -p /some/path/conf.d
  vim /some/path/conf.d/my-custom.cnf
  ```
  and add some configuration. For example:
  ```
  [mysqld]
  max_connections=200
  ```
1. Run container using:
  ```
  docker run -d --name test-mysql --env MYSQL_ROOT_PASSWORD=pass --volume /some/path/conf.d:/etc/mysql/conf.d -p 5006:3306 mysql
  ```

### Set data storage outside the container
Run the container using
```
docker run -d --name test-mysql --env MYSQL_ROOT_PASSWORD=pass --volume /some/path/conf.d:/etc/mysql/conf.d --volume /some/path/data-store:/var/lib/mysql -p 5006:3306 mysql
```
