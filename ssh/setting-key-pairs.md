# SSH Keys

## View keys
	ls -a ~/.ssh

## Generate key pair
```
cd ~/.ssh
ssh-keygen -t rsa
```

## Add identity
```
ssh-agent /bin/bash
ssh-add ~/.ssh/keyname_rsa
```

## Add identity on bashrc
```
eval "$(ssh-agent -s)" > /dev/null
ssh-add -K ~/.ssh/mykey &> /dev/null
```

## Copy public key to server
```
ssh b@B mkdir -p .ssh
cat .ssh/id_rsa.pub | ssh b@B 'cat >> ~/.ssh/authorized_keys'
```

## View the added identities
```
ssh-add -l
```

## Forward the ssh-agent via ssh
	ssh -A user@remotehost
		(for more security use ssh-add -c (from: http://yakking.branchable.com/posts/ssh-A/))
