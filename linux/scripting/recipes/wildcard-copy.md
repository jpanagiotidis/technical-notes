# Copy multiple files with wildcard
```
for file in $projectDir'/target/'$projectName*'.jar'; do cp "$file" "$(pwd)";done
```
