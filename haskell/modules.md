# Haskell modules

## Load modules
* Load all functions
  ```
  import {moduleName}
  ```
  Example:
  ```
  import Data.List
  ```
* Load selective functions
  ```
  import {moduleName} ({functionName1}, {functionName2}, ...)
  ```
  Example:
  ```
  import Data.List (nub, sort)
  ```
* Load all except selective functions
  ```
  import {moduleName} hiding ({functionName1}, {functionName2}, ...)
  ```
  Example:
  ```
  import Data.List hiding (nub)
  ```
* Load functions under namespace
  ```
  import qualified {moduleName}
  ```
  or
  ```
  import qualified {moduleName} as {alias}
  ```
  Example:
  ```
  import qualified Data.Map as M
  ```

## Load module (ghci)
```
:m + {moduleName}
```

## Create module
1. Create a file with name {ModuleName}.hs
1. Edit the {ModuleName}.hs file and add on the top:
```
module {Modulename}
( {DataTypeA}(..) -- by using .. all value constructors are exported
, {function1}
, {function2}
) where
```
1. Import the module from a different file by using:
```
import {Modulename}
```

## Create hierarchical module
1. Create a directory with name {ModuleName}
1. Create a file with name {SubmoduleA}.hs inside {ModuleName} directory
1. Edit the {SubmoduleA}.hs file and add on the top:
```
module {ModuleName}.{SubmoduleA}
( {DataTypeA}(..) -- by using .. all value constructors are exported
, {function1}
, {function2}
) where
```
1. Import the module from a different file by using:
```
import {Modulename}.{SubmoduleA}
```
