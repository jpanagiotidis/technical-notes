#Split files

##Split
```
split -b 1000000k some.tar "some.tar.part"
```

##Glue
```
cat some.tar.part* > some2.tar
```
