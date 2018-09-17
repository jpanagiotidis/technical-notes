# Higher Order Functions
A function that accepts as input a function and/or has as output a function is called a higher order function.

## Curried functions
In Haskell all functions take only 1 parameter. If more than one parameters are required then currying is used. The function takes the first parameter and returns a function that takes the rest parameters.

For example ```max``` has definition:
```
Ord a => a -> a -> a
```
which is equivalent with:
```
Ord a => a -> (a -> a)
```
If a parameter is applied to ```max``` then a partially applied function is returned:
```
ghci> :t max 4
Ord a => a -> a
```
If a function required that has 1 Int parameter and returns 100 if the parameter is less then 100 otherwise it returns the parameter this can be defined as follows:
```
f :: Int -> Int
f x = max 100 x
```
But this exactly the same as:
```
f' :: Int -> Int
f' = max 100
```
### Sections
Infix functions can be partially applied by using parentheses. For example:
```
ghci> filter (<10) [1,45,2,123,3]
[1,2,3]
```
## Lambda Functions
Lambda functions are anonymous functions used most commonly as parameters to higher order functions when the input function is used only once.
```
\{PARAMETERS} -> {EXPRESSION}
```
Example:
```
ghci> zipWith (\a b -> 3 * a + b) [1,2,3,4,5] [5,6,7,8,9]
[8,12,16,20,24]
```

## Common higher order functions on lists
* **map:** Applies the input function to every element of a list and returns a new list.
  ```
  ghci> :t map
  map :: (a -> b) -> [a] -> [b]
  ```
* **filter:** Filters out a list using an input function.
  ```
  ghci> :t filter
  filter :: (a -> Bool) -> [a] -> [a]
  ```
* **foldl:**
  Applies the input function to every element of a list from the left with the provided initial value. Returns a single value.
  ```
  ghci> :t foldl
  foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
  ```
* **foldl1:**
  Applies the input function to every element of a list from the left using the first left list element as initial value. Returns a single value.
  ```
  ghci> :t foldl1
  foldl1 :: Foldable t => (a -> a -> a) -> t a -> a
  ```
* **foldr:**
  Applies the input function to every element of a list from the right with the provided initial value. Returns a single value. foldr can be used on infinite lists.
  ```
  ghci> :t foldr
  foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
  ```
* **foldr1:**
  Applies the input function to every element of a list from the right using the first right list element as initial value. Returns a single value.
  ```
  ghci> :t foldr1
  foldr1 :: Foldable t => (a -> a -> a) -> t a -> a
  ```
* **scanl:**
  Applies the input function to every element of a list from the left with the provided initial value. Returns a list with all accumulator intermediate values. The last element of the result list is the final result.
  ```
  ghci> :t scanl
  scanl :: (b -> a -> b) -> b -> [a] -> [b]
  ```
* **scanl1:**
  Applies the input function to every element of a list from the left using the first left list element as initial value. Returns a list with all accumulator intermediate values. The last element of the result list is the final result.
  ```
  ghci> :t scanl1
  scanl1 :: (a -> a -> a) -> [a] -> [a]
  ```
* **scanr:**
  Applies the input function to every element of a list from the right with the provided initial value. Returns a list with all accumulator intermediate values. The first element of the result list is the final result.
  ```
  ghci> :t scanr
  scanr :: (a -> b -> b) -> b -> [a] -> [b]
  ```
* **scanr1:**
  Applies the input function to every element of a list from the right using the first right list element as initial value. Returns a list with all accumulator intermediate values. The first element of the result list is the final result.
  ```
  ghci> :t scanr1
  scanr1 :: (a -> a -> a) -> [a] -> [a]
  ```
## Function application with $
Function application with space is left associative and has very high precedence. So the following:
```
f a b c
```
is equivalent with:
```
(((f a) b) c)
```
The $ function has the following definition:
```
($) :: (a -> b) -> a -> b
f $ x = f x
```
It is right associative and has very low precedence.
The following:
```
f $ g $ x
```
is equivalent with:
```
f $ (g $ x)
```
It is used:
1. to remove parentheses
    ```
    sum (filter (> 10) (map (*2) [2..10]))
    ```
    is equivalent with:
    ```
    sum $ filter (> 10) $ map (*2) [2..10]
    ```
1. to treat function application like just another function
    ```
    ghci> map ($ 3) [(4+), (10*), (^2), sqrt]
    [7.0,30.0,9.0,1.7320508075688772]
    ```

## Function composition
In mathematics function composition is defined as:

$(f \circ g)(x) = f(g(x))$

In Haskell function composition is done using the . function:
```
(.) :: (b -> c) -> (a -> b) -> a -> c
f . g = \x -> f (g x)
```
Function composition is right associative.
```
f (g (z x))
```
is equivalent with:
```
(f . g . z) x
```
To rewrite an expression with a lot of parentheses using function composition, start by first writing out the innermost function and its parameters. Then put a $ before it and compose all the functions that came before by writing them without their last parameter and putting dots between them. For example:
```
replicate 2 (product (map (*3) (zipWith max [1,2] [4,5])))
```
can be written as:
```
replicate 2 . product . map (*3) $ zipWith max [1,2] [4,5]
```
