# Testing Environment Variables

## Using Sinon Sandbox
```
beforeEach(function(){
  sandbox = sinon.sandbox.create();
});

afterEach(function(){
  sandbox = sinon.sandbox.restore();
});
```

```
it('some description', function(){
  sandbox.stub(process, 'env', Object.assign(
    {},
    process.env,
    {
      'someKey': someValue,
    }
  ));
})
```
