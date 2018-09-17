# Infix functions
An infix function can be defined by using special characters. For example:
```
(^-^) :: Int -> Int -> Int
a ^-^ b = a ^ 2 + b ^ 3
```
## Infix constructors
Infix constructors first character must be ```:```. For example:
```
data List a = Empty | a :-: (List a)
```
## Fixity
Fixity defines if the operator is left-associative (```infixl```) or right-associative (```infixr```) and the precedence. For example ```*``` has ```infixl 7``` while ```*``` has ```infix 6```. This means that ```3 + 4 * 5``` is equivalent with ```3 + (4 + 5)```. Fixity is optional.

Example:
```
infixr 5 :-:
data List a = Empty | a :-: (List a)
```
