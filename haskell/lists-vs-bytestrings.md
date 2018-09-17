# Lists vs Bytestrings

## List lazyness
Lists in Haskell are lazy, this means that the evaluation will happen only when it is required. Haskell uses thunks (promises) for the implementation of the lazy computation.

For example the list:
```
[1,2,3,4]
```
is equivalent with
```
1:2:3:4:[]
```
which is essentially a promise of a list.

This technique is not very efficient when used to represent big chunks of data. In such cases Bytestrings can be used.

## Bytestrings
Bytestrings have 2 flavours:

## Strict Bytestrings
Strict Bytestrings are just bytes in an array. There are no thunks involved, so infinite strict Bytestrings are not possible.
Strict Bytestrings are defined in ```Data.Bytestring```.

```
import qualified Data.ByteString as S

data S.ByteString
  = Data.ByteString.Internal.PS {-# UNPACK #-}(GHC.ForeignPtr.ForeignPtr GHC.Word.Word8)
                                {-# UNPACK #-}Int
                                {-# UNPACK #-}Int
  instance Eq S.ByteString
  instance Monoid S.ByteString
  instance Ord S.ByteString
  instance Show S.ByteString
  instance Read S.ByteString
```

## Lazy Bytestrings
Lazy Bytestrings instead of having thunks for each element they have thunks on chunks of 64 KB.

```
data L.ByteString
  = Data.ByteString.Lazy.Internal.Empty
  | Data.ByteString.Lazy.Internal.Chunk {-# UNPACK #-}B.ByteString L.ByteString
  instance Eq L.ByteString
  instance Monoid L.ByteString
  instance Ord L.ByteString
  instance Show L.ByteString
  instance Read L.ByteString
```

## Operations (Strict and Lazy)
1. Pack a list of Word8 (0 - 255) into a Bytestring:
    ```
    ghci> L.pack [99,97,110]
    "can"
    ```
1. Unpack a Bytestring:
    ```
    ghci> L.unpack $ L.pack [99,97,110]
    ```
1. Add a byte to the start of ByteString (like ```(:)``` function)
    ```
    ghci> L.cons 97 $ L.pack [97..122]
    ```
1. Some other functions (strict and lazy):
    * head
    * tail
    * init
    * null
    * length
    * map
    * reverse
    * foldl
    * foldr
    * concat
    * takeWhile
    * filter
    * readFile

## Conversions
* From lazy Bytestring to strict Bytestring
    ```
    L.toStrict :: L.ByteString -> B.ByteString
    ```
    Example:
    ```
    ghci> L.toStrict $ L.pack [97..122]
    ```
* From lazy Bytestring to a list of strict Bytestrings
    ```
    L.toChunks :: L.ByteString -> [B.ByteString]
    ```
    Example:
    ```
    ghci> L.toChunks $ L.pack $ concat $ replicate 100 [48..57]
    ```
* From list of strict Bytestrings to lazy Bytestring
    ```
    L.fromChunks :: [B.ByteString] -> L.ByteString
    ```
    Example:
    ```
    L.fromChunks $ S.pack <$> [[48..57], [97..122], [65..90]]
    ```
* From strict ByteString to lazy Bytestring
    ```
    L.fromStrict :: B.ByteString -> L.ByteString
    ```
    Example:
    ```
    L.fromStrict $ S.pack [65..90]
    ```
