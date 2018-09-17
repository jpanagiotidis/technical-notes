# IO Control functions

* **when:** Takes as input a boolean and an IO action and executes the action if the boolean is True.
  ```
  when :: Applicative f => Bool -> f () -> f ()
  ```
  Example:
  ```
  import Control.Monad

  main = do
    input <- getLine
    when (input == "SWORDFISH") $ do
      putStrLn input
  ```
  Example:
  ```
  main = do
    rs <- sequence [getLine, getLine, getLine]
    print rs
  ```
* **sequence:** Takes a list of IO actions and returns an IO action that will perform the actions in sequence. The result of the sequence action is a list with the results of each IO action.
  ```
  sequence :: (Monad m, Traversable t) => t (m a) -> m (t a)
  ```
  Example:
  ```
  sequence $ map print [1,2,3,4,5]
  ```
* **mapM:** Takes as input a function and a list, then maps the function to the list and finally returns an IO action using the sequence function.
  ```
  mapM :: (Monad m, Traversable t) => (a -> m b) -> t a -> m (t b)
  ```
* **mapM_** Similar with mapM but discards the result.
  ```
  mapM_ :: (Monad m, Foldable t) => (a -> m b) -> t a -> m ()
  ```
* **forever:** Takes an IO action and returns an IO action that repeats the input IO action forever.
  ```
  forever :: Applicative f => f a -> f b
  ```
  Example:
  ```
  import Control.Monad
  import Data.Char

  main = forever $ do
    putStr "Give me some input: "
    l <- getLine
    putStrLn $ map toUpper l
  ```
* **forM:** Similar with mapM but the parameters are flipped.
  ```
  forM :: (Monad m, Traversable t) => t a -> (a -> m b) -> m (t b)
  ```
  Example:
  ```
  import Control.Monad

  main = do
    colors <- forM [1,2,3,4] (\a -> do
      putStrLn $ "Which color do you associate with the number " ++ show a ++ "?"
      color <- getLine
      return color)
    putStrLn "The colors that you associate with 1, 2, 3 and 4 are: "
    mapM putStrLn colors
  ```
* **bracket:**
  The first parameter is an IO action that yields a handle, the second is the function that will be called when the resource will be released (even in case of exception) and the third parameter is the function that is doing the actual computation on the resource.
  ```
  bracket :: IO a -> (a -> IO b) -> (a -> IO c) -> IO c
  ```
  For example the following function re-implements the ```withFile``` function from ```System.IO```
  ```
  withFile :: FilePath -> IOMode -> (Handle -> IO a) -> IO a
  withFile name mode f = bracket (openFile name mode)
    (\handle -> hClose handle)
    (\handle -> f handle)
  ```
  The bracket function is part of the Control.Exception module.

* **bracketOnError:** The first parameter is an IO action that yields a handle, the second is the function that will be called in case of error and the second is the function that will be called under normal circumstances. It returns an IO action that executes the first IO action and and the third function and yields the result of the third function.
  ```
  bracketOnError :: IO a -> (a -> IO b) -> (a -> IO c) -> IO c
  ```
