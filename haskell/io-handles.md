# IO Handle
Haskell defines operations to read and write characters from and to files, represented by values of type Handle. Each value of this type is a handle: a record used by the Haskell run-time system to manage I/O with file system objects.

## IO Handle functions
Functions like putStrLn, putStr, putChar, print, getLine, getContents are working on the standard input/output. Standard input/output also works with handles that are created by default when the program executes and this is why it is hidden from these functions. However the same functions suffixed with ```h``` will have the same result but on the resource that the input handle defines.
* **hGetContents:** Has an input a handle and yields lazily the file contents as String.
  ```
  hGetContents :: Handle -> IO String
  ```
* **hGetLine:**
  ```
  hGetLine :: Handle -> IO String
  ```
* **hGetChar:**
  ```
  hGetChar :: Handle -> IO Char
  ```
* **hPutStr:**
  ```
  hPutStr :: Handle -> String -> IO ()
  ```
* **hPutStrLn:**
  ```
  hPutStrLn :: Handle -> String -> IO ()
  ```
* **hPutChar:**
  ```
  hPutChar :: Handle -> Char -> IO ()
  ```

## File operations

### Open file
The following sections present some functions that can be used in order to operate on files.

* **openFile:** takes as input the file path and the IOMode and returns a handle.
  ```
  openFile :: FilePath -> IOMode -> IO Handle
  ```
  where:
  ```
  type FilePath = String
  data IOMode = ReadMode | WriteMode | AppendMode | ReadWriteMode
  ```
  It is very important to close the handle after the end of the processing with ```hclose```
  ```
  hClose :: Handle -> IO ()
  ```
  Example:
  ```
  import System.IO

  main = do
    handle <- openFile "someFile.txt" ReadMode
    contents <- hGetContents handle
    putStr contents
    hClose handle
  ```
  Belongs to ```System.IO```

* **withFile:** takes as input the file path, the IOMode and a function that has as input the handle and returns an IO action. doesn't return the handle and close
  ```
  withFile :: FilePath -> IOMode -> (Handle -> IO r) -> IO r
  ```
  The advantage of this option is that the handle is closed automatically after the processing has been completed.

  Example:
  ```
  import System.IO

  main = do
    withFile "someFile.txt" ReadMode (\handle -> do
      contents <- hGetContents handle
      putStr contents)
  ```
  Belongs to ```System.IO```

* **readFile:** takes as input a file path and returns an IO action that yields the file contents as string:
  ```
  readFile :: FilePath -> IO String
  ```
  Example:
  ```
  import System.IO

  main = do
      contents <- readFile "someFile.txt"
      putStr contents
  ```
  Belongs to ```System.IO```

* **writeFile:** takes as input a file path and a string and returns an IO action that writes the string to file. If the file exists it clears first its contents.
  ```
  writeFile :: FilePath -> String -> IO ()
  ```
  Example:
  ```
  import System.IO
  import Data.Char

  main = do
    contents <- readFile "someFile.txt"
    writeFile "someFileCaps.txt" (map toUpper contents)
  ```
  Belongs to ```System.IO```

* **appendFile:** takes as input a file path and a string and returns an IO action that appends the string to existing file or to a new file if the file doesn't exist.
  ```
  appendFile :: FilePath -> String -> IO ()
  ```
  Example:
  ```
  import System.IO

  main = do
    todoItem <- getLine
    appendFile "todo.txt" (todoItem ++ "\n")
  ```
  Belongs to ```System.IO```

* **openTempFile:** takes as input a file path and a filename pattern and returns an IO action that creates a temp file and yields the temp file path and the handle. If the second argument is temp then a random string is used.
  ```
  openTempFile :: FilePath -> String -> IO (FilePath, Handle)
  ```
  Belongs to ```System.IO```
* **removeFile:** takes as input the file path of the file to be removed and returns an IO action that deletes the file and yields ()
  ```
  removeFile :: FilePath -> IO ()
  ```

* **renameFile:** takes as input the file path of the file to be renamed and the file path of the new name and returns an IO action that renames the file and yields ()
  ```
  renameFile :: FilePath -> FilePath -> IO ()
  ```
