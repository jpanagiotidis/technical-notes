# MySQL db creation

## Create table
```
CREATE TABLE authors (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  country VARCHAR(2) NULL,
  `date-of-birth` DATE NULL,
  PRIMARY KEY (id));
```

## Insert some rows
### Single row
```
INSERT INTO authors (name, country) VALUES ('Nikos Pappas', 'GR');
```
### Multiple rows
```
INSERT INTO authors (name, country) VALUES ('Michael Lewis', 'US'),('Douglas Adams', 'UK');
```

## Create table with foreign key
```
CREATE TABLE books (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(256) NOT NULL,
  `description` VARCHAR(512) NULL,
  `publication-date` DATE NULL,
  `author` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`author`) REFERENCES `authors`(`id`) ON DELETE CASCADE
);
```

## A simple join query
```
SELECT books.id, books.title, authors.name, books.description
FROM books
INNER JOIN authors
ON books.author=authors.id
WHERE authors.id=3;
```
