# Kubernetes Pi
Based on this [Gist](https://gist.github.com/alexellis/fdbc90de7691a1b9edb545c17da2d975)

## Recipe
1. For each node do:
  1. Follow headless pi recipe
  1. Execute hostname-and-ip script
  1. Execute base-setup script

1. On master node do:
  1. Login with SSH
  1. Initialise master node (replace INTERNAL_IP with the master node IP)
```
sudo kubeadm init --token-ttl=0 --apiserver-advertise-address={INTERNAL_IP} --pod-network-cidr=10.244.0.0/16
```
  1. Save the token from output
  1. Execute:
```
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```
  1. Install Weave network driver
```
kubectl apply -f \
 "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')"
```

1. For each worker node do:
  1. Execute command (replace TOKEN and HASH from kubeadm init output on master node)
```
sudo kubeadm join --token {TOKEN} 192.168.1.100:6443 --discovery-token-ca-cert-hash sha256:{HASH}
```
