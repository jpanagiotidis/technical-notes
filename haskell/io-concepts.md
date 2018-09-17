# Haskell IO

IO (Input - Output) type is an action that produces a side effect and yields a result. An IO action is executed if it is named ```main``` and then the program is executed.

Example:
```
main = putStrLn "hello world"
```

## Combining IO actions (```do```)
The ```main``` can contain only 1 IO action. However multiple IO actions can be combined using the ```do``` keyword. For example:
```
main = do
  putStrLn "This is a line"
  putStrLn "Another one"
```
The type of combined IO actions with ```do``` is that of the last IO action. On the example above the type is that of putStrLn: ```main :: IO ()```.

Multiple ```do``` actions can be combined be nesting them inside another ```do``` action.

## Get IO value (```<-```)
The only way to get the value of an IO action is with the ```<-``` construct inside another IO action. For example the following code reads the user input from console:
```
main = do
  putStrLn "What is your name?"
  name <- getLine
  putStrLn $ "Hello " ++ name ++ " !!!"
```
The ```<-``` can be used in any IO action except the last one.

## Using let inside IO actions
Pure values can be defined inside IO actions using ```let``` expressions. For example:
```
import Data.Char

main = do
  putStrLn "What is your name?"
  name <- getLine
  let capName = map toUpper name
      outString = "Hello " ++ capName ++ " !!!"
  putStrLn outString
```

## Create IO actions from pure values (```return```)
An IO action can be created from a pure value by using the ```return``` keyword. It is used if an IO action that doesn't do anything is required or because the ```do``` block result must be changed.
```
main = do
  code <- getLine
  if code == "pass"
    then putStrLn "Success"
    else return ()
```
Note that the return doesn't terminate the function. In the following example all IO actions will be executed:
```
main = do
  a <- return "A"
  b <- return "B"
  c <- return "C"
  _ <- putStrLn (a ++ b ++ c)
  return ()
```
The ```return``` can be thought of as the opposite of ```<-```. The ```<-``` returns a pure value from an IO action and ```return``` creates an IO action from a pure value.
