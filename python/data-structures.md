## Lists

## Define a list

```
myList = [12, 34, 2, 4]
```

## Get list element at index

```
myList[index]
  (negative indexes can be used)
```

## Get slice
```
myList[startIndex:endIndex]
```
  * startIndex is included, endIndex isnt included
  * if startIndex is ommited then the slice starts from the start of the original list
  * if endIndex is ommited then the slice ends to the end of the original list

## List concatenation
```
myList + myOtherList
```

## Add element at the end of the list
```
myList.append(3);
```

## Change list value
```
myList[3] = 45;
```

## Change list slice
```
myList[startIndex:endIndex] = myOtherList
```

## Get list length
```
len(myList)
```

## Merge a list into another
```
myList.extend(myOtherList)
```

## Loop list values
```
for n in myList:
  print n
```

## Dictionary (aka HashMap)

## Define a dictionary
```
myDict = {
  "key_a" : 34,
  "some_other" : "fasdf",
  "boat" : 1,
}
```

## Get dictionary element
```
myDict["some_key"]
```

## Has key
```
"some_key" in myDict
```

## Add (or change) element
```
myDict["some_other_key"] = "value"
```

## Delete element and key
```
del myDict["some_key"]
```

## Loop with key, value
```
for k,v in myDict.items():
  print k,v
```