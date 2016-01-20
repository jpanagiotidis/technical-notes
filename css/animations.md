#CSS3 Animations

##Spinner animation
```
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner-class{
  animation: rotate 2000ms linear 0ms infinite;
  transform-origin: center;
}
```