# Testing CommonJS modules

## Mockery
CommonJS modules are instantiated once. Each subsequent require call fetches the same instance. In order to override this behaviour for testing, the mockery module can be used.

### Installation
```
npm i mockery --save-dev
```

### Usage (with mocha)
```
beforeEach(function(){
  mockery.enable({
    useCleanCache: true,
  });
  mockery.registerAllowable('../../some/module');
});

afterEach(function(){
  mockery.disable();
});
```
