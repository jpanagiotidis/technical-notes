# Dictionary

## Define the dictionary
```
private Dictionary<string, int> dict;
```

## Initilize the dictionary
```
dict = new Dictionary<string, int>();
```

## Initilize with values
```
dict = new Dictionary<string, int>(){
	{"A", 12},
	{"C", 34}
};
```

## Add key value pair
```
dict.Add("something", 34);
```

## Remove pair by key
```
dict.Remove("something");
```

## Contains pair with key
```
dict.ContainsKey("something");
```

## Get element
```
Debug.Log(dict["something"]);
```

## Iterate
```
foreach(KeyValuePair<string, Vector3> entry in dict){
	Debug.Log(entry.Key);
	Debug.Log(entry.Value);
}
```

## Iterate and alter dictionary
```
string[] keys = new string[dict.Count];
dict.Keys.CopyTo(keys, 0);
foreach(string key in keys){
	Debug.Log(dict[key]);
	//alter dict
}
```

## Possible solution for iteration and alteration
```
http://software.tavlikos.com/2010/12/20/flexibledictionary/
```
