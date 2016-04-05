# Event functions

## Awake()
is called when the game start

## Start()
is called just before any of the update methods are called for the first time

## OnEnable()
is called when the object is enabled

## Update()
is called on every frame

## LateUpdate()
is called on every frame after Update()
## FixedUpdate()
is called before each physics update. It might be called multiple times per frame (if there is low fps). It doesn't need Time.deltaTime

## OnCollisionEnter(collision:Collision), OnCollisionStay(collision:Collision), OnCollisionExit(collision:Collision)
is called when the object enters, stays, exits a collision

## OnTriggerEnter(collision:Collision), OnTriggerStay(collision:Collision), OnTriggerExit(collision:Collision)
is called when the object enters, stays, exits a trigger

## OnGUI()
is called for rendering and handling of GUI events
