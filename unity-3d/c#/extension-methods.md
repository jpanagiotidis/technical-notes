# Extension Methods
Binds extra functionality onto existing types/classes (similar to prototypal inheritance in JS.)

## Example
```
using UnityEngine;
using System.Collections;

public static class Extensions {
	public static void StupidJump(this Rigidbody rb, int factor){
		Debug.Log ("Jump");
		rb.AddForce (0f, factor*100f, 0f);
	}
}
```

then:
```
Rigidbody rb;
rb.StupidJump(3);
```
