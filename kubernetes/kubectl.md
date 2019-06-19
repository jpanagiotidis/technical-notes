# kubectl

## Get version
```
kubectl version
```

## Get cluster info
```
kubectl cluster-info
```

## List contexts
```
kubectl config get-contexts
```

## Get current context
```
kubectl config current-context
```

## Set current context
```
kubectl config use-context ${MY_CONTEXT}
```

## List nodes
```
kubectl get nodes
```

## Apply configuration
(pod, service, replica set, deployment)
### From file
```
kubectl apply -f ${FILE_PATH}
```

## Delete configuration
(pod, service, replica set, deployment)

### From file
```
kubectl delete -f ${FILE_PATH}
```

## Pods

### List pods
```
kubectl get pods
```

### Get pod configuration
```
kubectl get pods ${POD_NAME} -o json
```

### List system pods
```
kubectl get pods --namespace=kube-system
```

### Describe pod
```
kubectl describe pods ${POD_NAME}
```

### Execute command inside pod
```
kubectl exec ${POD_NAME} ${COMMAND}
```
Example
```
kubectl exec my-pod ps aux
```

### Get pod shell
```
kubectl exec -it ${POD_NAME} sh
```

### Get pod logs
```
kubectl logs ${POD_NAME}
```

## Deployments
### List deployments
```
kubectl get deploy
```

### Get deployment info
```
kubectl get deploy ${DEPLOYMENT_NAME}
```

### Get deployment description
```
kubectl describe deploy ${DEPLOYMENT_NAME}
```

## ReplicaSets
### List ReplicaSets
```
kubectl get rs
```
