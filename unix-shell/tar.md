## Compress a file
```
tar zcf compressedname.tar.gz originalfilename.sql
```

## Decompress a file
```
tar zxf compressedname.tar.gz
```

## make tar of whole directory
```
shopt -s dotglob ##to include hidden files
tar -cvf archive_name.tar *
```

## decompress directory
```
tar -xf file_name.tar
tar -xf file_name.tar -C output/folder/path
```
