# Command Line Arguments

* **getArgs:** takes no arguments and returns an IO action that yields the command line arguments as a list of strings
  ```
  getArgs :: IO [String]
  ```

* **getProgName:** takes no arguments and returns an IO action that yields the program name as string
  ```
  getProgName :: IO String
  ```

* **getEnv:** takes as argument the environment variable string key and returns an IO action that yields the environment variable value as string.
  ```
  getEnv :: String -> IO String
  ```

* **getEnvironment:** takes no arguments and returns an IO action that yields a list of tuples [(String, String)] with all evnironment variables.
  ```
  getEnvironment :: IO [(String, String)]
  ```

## Example
```
import System.Environment

main = do
  args <- getArgs
  name <- getProgName
  userEnv <- getEnv "USER"
  envHash <- getEnvironment
  let outStr = "args: " ++ (show args)
                ++ " name: " ++ name
                ++ " envHash: " ++ (show envHash)
                ++ " userEnv: " ++ userEnv
  putStrLn outStr
```
