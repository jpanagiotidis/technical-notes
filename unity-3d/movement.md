# Movement

## Rigid body velocity
```
this.GetComponent<Rigidbody>().velocity = new Vector3(3f, 5f, 0f);
```

### Trick
Dont affect y axis in order to maintain gravity effect
```
this.GetComponent<Rigidbody>().velocity = normalSpeed*this.GetComponent<Transform>().forward + new Vector3(0f, this.rigidbody.velocity.y, 0f);
```

## Rigid body rotation (using Euler angles)
```
this.GetComponent<Rigidbody>().rotation = Quaternion.Euler(0f, 10f, 0f);
```

## Get current rotation in Euler angles
```
this.GetComponent<Rigidbody>().rotation.eulerAngles
```
