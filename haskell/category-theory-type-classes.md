# Category Theory Type Classes

## Functor
```
class Functor (f :: * -> *) where
  fmap :: (a -> b) -> f a -> f b
  (<$) :: a -> f b -> f a
  {-# MINIMAL fmap #-}
  instance Functor (Either a) -- Defined in ‘Data.Either’
  instance Functor [] -- Defined in ‘GHC.Base’
  instance Functor Maybe -- Defined in ‘GHC.Base’
  instance Functor IO -- Defined in ‘GHC.Base’
  instance Functor ((->) r) -- Defined in ‘GHC.Base’
  instance Functor ((,) a) -- Defined in ‘GHC.Base’
```
In order for a `type constructor` to become an instance of `functor` it must a `kind` of `* -> *` (take exactly 1 concrete type as type parameter). This is why `Either` can become `functor` instance only if the type constructor is partially applied in order to take only 1 type parameter:

```
instance Functor (Either a) where
...
```

### Instances
#### List
```
map :: (a -> b) -> [a] -> [b]
```
```
instance Functor [] where
  fmap = map
```
#### Maybe
```
instance Functor Maybe where
  fmap f (Just x) = Just (f x)
  fmap f Nothing = Nothing
```
#### Either
```
instance Functor (Either a) where
  fmap f (Right x) = Right (f x)
  fmap f (Left x) = Left x
```

#### IO
```
instance Functor IO where
  fmap f action = do
    result <- action
    return (f result)
```
