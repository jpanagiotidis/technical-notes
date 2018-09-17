# Haskell type system

## Expressions type
Every expressions type is known at compile time. In order to view the type of an expression type:
```
:t {EXPRESSION}
```

### Examples
```
ghci> :t 'a'
'a' :: Char
```
Which means that 'a' has type Char
```
ghci> :t "Cat"
"Cat" :: [Char]
```

Functions are also expressions:
```
ghci> :t fst
fst :: (a, b) -> a
```

### Common data types
* **Int:** Bounded integer
* **Integer:** Unbounded integer
* **Float:** Floating point number with single precision
* **Double:** Floating point number with double precision
* **Bool:** Boolean type
* **Char:** Unicode character

## Type variables
Type definitions can allow any type by using type variables. For example head function doesn't care what type the list contains:
```
ghci> :t head
head :: [a] -> a
```

## Type classes
Type class is an interface that defines some behavior. If a type is an instance of a type class, then it supports and implements the behavior the type class describes. When a type is an instance of a type class then the functions that the type class defines can be used with the type.

### Class constraints (or type constraints)
A definition can have 1 or more class constraints. Class constraints define the required type classes that needs to be implemented. Example:
```
ghci> :t (==)
(==) :: Eq a => a -> a -> Bool
```
This means that (==) takes as input 2 values of the same type which shall be instance of the Eq class.

One type can be instance of many type classes, and one type class can have many types as instances. A type class can have as prerequisite some other type class (for example Ord requires Eq type class).

### Common type classes
* **Eq:** For types that support equality testing. Implements the == and /= functions.
* **Ord:** For types that its values can be ordered. Implements the < <= > and >= functions.
* **Show:** Types that can be represented as strings. The most common function is show.
* **Read:** Converts strings to a type. The most common function is read.
* **Enum:** Types that have ranges, successor and predecessor.
* **Bounded:** Types that have upper and lower bound. The functions to get the bounds are minBound and maxBound.
* **Num:** Numeric types. Int, Integer, Float and Double are instances of the Num type class.
* **Floating:** It is used to represent floating numbers. Includes Float and Double types.
* **Integral:** It is used to represent whole numbers. Includes Int and Integer types.

## Custom data types
In order to define a new data type the ```data``` keyword is used.
```
data {TYPE_NAME} = {VALUE_CONSTRUCTOR_A} | {VALUE_CONSTRUCTOR_B} | ...
```
One or more value constructors are required.
### Value constructors
Value constructors are functions that return a value of a data type.
#### Nullary value constructors
If a value constructor has no parameters it is called nullary.

### Examples:
```
data Bool = True | False
data Point = Point Float Float
data Shape = Circle Point Float | Rectangle Point Point
```

### Record syntax
```
data {TYPE_NAME} = {VALUE_CONSTRUCTOR_NAME} {
  {FIELD_NAME} :: {DATA_TYPE}
  , {FIELD_NAME} :: {DATA_TYPE} }
```
Example:
```
data Person = Person {
  firstName :: String
  , lastName :: String
  , age :: Int
  } deriving (Show)

p1 = Person {
  firstName = "Mike"
  , lastName = "Pappas"
  , age = 42
  }
```

## Type constructors
When a type takes parameters to produce new types, then it is a type constructor. For example ```[a]``` and ```Maybe a``` are type constructors that can result to ```[Int]```, ```[String]```, ```Maybe Int```, ```Maybe String``` etc.

### Concrete types
A type is called concrete if:
  * it takes no type parameters (example: ```Int```, ```String```, etc)
  * or if all type constructor parameters are filled up (example ```Maybe Int```, ```[String]``` etc)

In contrast ```Maybe a``` and ```Either Int a``` are not concrete types.

### Best practices
* Use type constructors if the type would work regardless of the specific type
* Don't use class constraints into data declarations. Put them on the functions that are required

## Deriving type classes
### Deriving automatically
Haskell can automatically make a type instance of the following type classes:
* Eq
* Ord
  * if all type included types are instances of Ord type class
  * if two values of the same type but different value constructor are compared then the value constructor that was defined first is the first
* Enum
  * If all value constructors are nullary
* Bounded
* Show
* Read
by adding adding: ```deriving ({ClassTypeA}, {ClassTypeC}, ...)``` on the type declaration.
For example:
```
data Person = Person { firstName :: String
  , lastName :: String
  , age :: Int
  } deriving (Eq, Show, Read)
```

### Type class definition
Type classes are defined by using the ```class``` keyword, a type variable representing the type that will become instance of the type class and the declarations of the required functions and optionally the implementation of the required functions.
```
class {TYPE_CLASS} a where
  {FUNCTION_A} :: {FUNCTION_A_DEFINITION}
  {FUNCTION_B} :: {FUNCTION_B_DEFINITION}
  ...
```
#### Minimal Complete Definition
The type class definition should have the appropriate information (function implementation) in order for the instance to provide the minimal required information in order to implement it.

### Create type class instance
Type class instances are created by using the ```instance``` keyword.
```
instance {TYPE_CLASS} {TYPE} where
  {FUNCTION_A} = {FUNCTION_A_IMPLEMENTATION}
  {FUNCTION_B} = {FUNCTION_B_IMPLEMENTATION}
  ...
```

#### Eq type class example
The Eq type class definition from the standard library:
```
class Eq a where
  (==) :: a -> a -> Bool
  (/=) :: a -> a -> Bool
  x == y = not (x /= y)
  x /= y = not (x == y)
```
A custom type could implement the Eq type class as follows:
```
data TrafficLight = Red | Yellow | Green

instance Eq TrafficLight where
  Red == Red = Tue
  Green == Green = True
  Yellow == Yellow = True
  _ == _ = False
```
The fact that the Eq type class has defined the implementation of ```(==)``` and ```(/=)``` using mutual recursion, allow the instance to provide the implementation of only the ```(==)``` function (Minimal Complete Definition)

### Subclassing
A type class can be a subclass of another type class. Subclassing is defined by adding type class constraints in the type class definition.

For example the the Ord type class requires the type to be an instance of the Eq type class:
```
class (Eq a) => Ord a where
...
```

### Parametrised types as instances of type classes
When making parametrised types (like ```Maybe```, ```Either``` etc) instances of type classes, sometimes class constraints on the type parameter are required in order to ensure that the class type functions will work as expected.

#### Example
For example in order to make ```Maybe``` an instance of ```Eq``` type class, a class constraint needs to be added on the type parameter, because the ```(==)``` function is used on the ```Maybe``` content.
```
instance (Eq m) => Eq (Maybe m) where
  Just x == Just y = x == y
  Nothing == Nothing = True
  _ == _ = False
```

## Type Synonyms
Type synonyms are aliases for data types. A type synonym is defined by using the ```type``` keyword.
```
type {TYPE_A} = {TYPE_B}
```
Example:
```
type Name = String
type PhoneNumber = String
type PhoneBook = [(Name, PhoneNumber)]
```

### Parametrised type synonyms
Type synonyms can be parametrised. For example:
```
type AssociativeList k v = [(k, v)]
```
They can also return a partially applied type constructor. For example:
```
import qualified Data.Map as Map
type IntMap = Map.Map Int
```

# Kinds
Types are value labels. For example ```"Hello"``` has type ```String```. Types has also labels called ***kinds***. Concrete types have the ```*``` kind. For example:
```
ghci> :k Int
Int :: *
```
Types that need 1 concrete type in order to be concrete have kind ```* -> *```. For example:
```
ghci> :k Maybe
Maybe :: * -> *
```
If a concrete type is applied to ```Maybe``` then the kind becomes ```*```:
```
ghci> :k Maybe Int
Maybe Int :: *
```
Similarly types that need 2 concrete type in order to become concrete have kind ```* -> * -> *```. For example:
```
ghci> :k Either
Either :: * -> * -> *
```
```
ghci> :k Either String
Either String :: * -> *
```
```
ghci> :k Either String Int
Either String Int :: *
```
