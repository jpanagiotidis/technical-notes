# Useful commands

# ```less```
Prints large files using paging.
If the command is not available try the ```more``` command.
## Usage:
* ```spacebar```: next page
* ```b```: previous page
* ```q```: quit
* ```/${SEARCH_WORD}```: Search forward for the SEARCH_WORD
* ```:${SEARCH_WORD}```: Search backward for the SEARCH_WORD
* ```n```: Go to the next search finding

## ```diff```
Finds differences between files.
```
diff ${FILE_A} ${FILE_B}
```
Machine readable output:
```
diff -u ${FILE_A} ${FILE_B}
```

## ```file```
Guesses the file format
```
file ${FILE}
```

## ```split```
Split files

### Split
```
split -b 1000000k some.tar "some.tar.part"
```

### Glue
```
cat some.tar.part* > some2.tar
```

## ```head```
Show first lines of stream or file
```
head ${FILE}
head -${NUM_OF_LINES} ${FILE}
```

## ```tail```
Show last lines of stream or file
```
tail ${FILE}
tail -${NUM_OF_LINES} ${FILE}
tail -${START_LINE} ${FILE}
```

## ```sort```
Sort a file in alphabetical order
```
sort ${FILE}
```
Reverse order
```
sort -r ${FILE}
```
Numerical order
```
sort -n ${FILE}
```
