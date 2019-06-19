# Kubernetes Dashboard

[Repository](https://github.com/kubernetes/dashboard)

## Install
Run the following command:
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
kubectl proxy
```
Go to the following link:
```
http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/
```

## Docker for Mac
For authentication in ```Docker for Mac``` delopment environment use the following steps:
1. Copy the token from the following command:
```
kubectl describe secret kubernetes-dashboard --namespace=kube-system
```
1. Paste the token on the form
