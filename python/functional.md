```
from functools import reduce

items = range(10)
print(items)

cubed = list(map(lambda x: x**3, items))
print(cubed)

filtered = list(filter(lambda x: x%2 == 1, cubed))
print(filtered)

reduced = reduce(lambda x, y: x + y, filtered)
print(reduced)
```
