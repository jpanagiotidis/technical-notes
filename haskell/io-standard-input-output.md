# Common IO functions for standard input/output

* **putStrLn:** Prints a string to the console and changes line.
  ```
  putStrLn :: String -> IO ()
  ```
* **putStr:** Prints a string to the console without changing line.
  ```
  putStr :: String -> IO ()
  ```
* **putChar:** Prints a character to the console without changing line.
  ```
  putChar :: Char -> IO ()
  ```
  putStr can be defined using putChar recursively:
  ```
  putStr :: String -> IO ()
  putStr [] = return ()
  putStr (x:xs) = do
    putChar x
    putStr xs
  ```
* **print:** Converts the value to String using show and then prints the value to the console.
  ```
  print :: Show a => a -> IO ()
  ```
  It is equivalent with ```putStrLn . show```
* **getLine:** Reads input from the console and returns it.
  ```
  getLine :: IO String
  ```
* **getContents:** Reads lazily from the standard input until it encounters an end of file character.
  ```
  getContents :: IO String
  ```
  Example:
  ```
  import Data.Char

  main = do
    contents <- getContents
    putStr $ map toUpper contents
  ```
* **interact:** Reads from standard input, transforms the string with the input function and outputs the result to the standard output.
  ```
  interact :: (String -> String) -> IO ()
  ```
  Example:
  ```
  main = interact shortLinesOnly

  shortLinesOnly :: String -> String
  shortLinesOnly = unlines . filter (\line -> length line < 10) . lines
  ```
