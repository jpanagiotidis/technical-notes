# Gizmos

1. Add a gizmo on an empty gameobject
2. add the following script:

```
using UnityEngine;
using System.Collections;

public class Gizmo:MonoBehaviour{
	public float gizmoSize = .75f;
	public Color gizmoColor = Color.yellow;

	void OnDrawGizmos(){
		Gizmos.color = gizmoColor;
		Gizmos.DrawWireSphere(transform.position, gizmoSize);
	}
}
```
