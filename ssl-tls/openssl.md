# OpenSSL

## View PEM contents
```
openssl x509 -in /path/to/my.pem -text
```

## RSA keys

### Generate RSA key
```
openssl genrsa -aes128 -out /path/to/my.key 2048
```

### Read RSA private key
```
openssl rsa  -in /path/to/my.key -text
```

### Generate public key
```
openssl rsa -in /path/to/my.key -pubout -out /path/to/my-public.key
```

### Generate public key (PEM)
```
openssl rsa -in /path/to/my.key -outform PEM -pubout -out /path/to/my-public.pem

```

### Encrypt file using Public Key
```
openssl rsautl -encrypt -inkey /path/to/my-public.key -pubin -in /path/to/file.txt -out /path/to/file.ssl
```

### Decrypt file using private key
```
openssl rsautl -decrypt -inkey /path/to/my.key -in /path/to/file.ssl -out /path/to/decrypted.txt
```
