# Passing Functions

## Delegates
```
public class GameManager : MonoBehaviour {
	public delegate string TestDelegate(string a, string b);

	void Start () {
		TestDelegate td = (a, b) => {
			return a + ", " + b;
		};

		Debug.Log(td("1", "2"));
	}
}
```

### Action
takes arguments but doesn’t return a value

```
using System;
using System.Collections;
using UnityEngine;

public class GameManager : MonoBehaviour {
	void Start () {
		Action a = () => {Debug.Log("a called");};
		Action b = () => {Debug.Log("b called");};
		Action <Action, Action> ab = (a1, b1) => {
			a1();
			b1();
		};
		ab(a, b);
	}
}
```

### Func
takes arguments and always returns a value

```
Func<int, string> f1 = (x) => {
	return "gg " + x + " gg";
};

Debug.Log (f1 (4));
```
