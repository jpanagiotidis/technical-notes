# Python OOP

## Define a simple class
```
class SomeClass:

  # the class constructor
  def __init__(self, someValue):
    self.val = someValue

  def someFunc(self):
    return self.val
```

## Class instantiation
```
sc = SomeClass("34-cv-asd")
```

## Inheritance
```  
class A:
  def __init__(self, valA):
    self.valA = valA

class B(A):
  def __init__(self, valA, valB):
    super(A, self).__init__(valA)
    self.valB = valB
```
## Multiple inheritance
```
class A:
  def __init__(self, valA):
    self.valA = valA

class B:
  def __init__(self, valB):
    self.valB = valB

class C(A, B):
  def __init__(self, valA, valB, valC):
    A.__init__(self, valA)
    B.__init__(self, valB)
    self.valC = valC
```
## Static methods
```
class A:
  @staticmethod
  def myStatic(argA, argB):
    return
```
