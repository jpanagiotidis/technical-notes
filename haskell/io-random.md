# IO Random

## Function ```random```
Takes as argument a RandomGen and returns a tuple with a random value and a new RandomGen. The new RandomGen is used in order to produce the next random values.
```
random :: (RandomGen g, Random a) => g -> (a, g)
```
The most common instance of RandomGen is the StdGen. The ```mkStdGen``` takes as input an Int and returns a StdGen instance.
```
mkStdGen :: Int -> StdGen
```

Example:
```
ghci> random (mkStdGen 0) :: (Int, StdGen)
```

## Function ```getStdGen```
Takes no arguments and returns an IO action that yields a StdGen.
```
getStdGen :: IO StdGen
```

## Function ```newStdGen```
Takes no arguments and returns an IO action that yields a StdGen. The StdGen is a new StdGen. In contrast if getStdGen is called twice it will return the same StdGen.
```
newStdGen :: IO StdGen
```

## Example
```
import System.Random

main = do
  gen <- getStdGen
  putStrLn $ show $ threeCoins gen

threeCoins :: StdGen -> (Bool, Bool, Bool)
threeCoins gen =
  let (firstcoin, gen2) = random gen
      (secondcoin, gen3) = random gen2
      (thirdcoin, _) = random gen3
  in (firstcoin, secondcoin, thirdcoin)
```

## Function ```randoms```
Takes as argument a RandomGen and returns an infinite list with random values.
```
randoms :: (RandomGen g, Random a) => g -> [a]
```
Example:
```
ghci> take 10 $ randoms $ mkStdGen 10
```

## Function ```randomR```
Takes as input a range and a RandomGen and returns a tuple with a random inside the range and a RandomGen.
```
randomR :: (RandomGen g, Random a) => (a, a) -> g -> (a, g)
```
Example:
```
ghci> randomR (1,6) (mkStdGen 10)
```
## Function ```randomRs```
Takes as input a range and a RandomGen and returns an infinite list of random values inside the range.
```
randomRs :: (RandomGen g, Random a) => (a, a) -> g -> [a]
```
Example:
```
take 10 $ randomRs (1,6) (mkStdGen 10)
```
