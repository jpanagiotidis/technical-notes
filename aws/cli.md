# AWS CLI

## Installation
```
pip install awscli
```

## Configuration using named profiles
1. create the credentials file at: ~/.aws/credentials with the following contents
  ```
  [default]
  aws_access_key_id=ID_FOR_DEFAULT_PROFILE
  aws_secret_access_key=SECRET_FOR_DEFAULT_PROFILE

  [[PROFILE_NAME]]
  aws_access_key_id=ID_FOR_PROFILE_OTHER
  aws_secret_access_key=SECRET_FOR_PROFILE_OTHER
  ```
2. create the configuration file at: ~/.aws/config with the following contents
  ```
  [default]
  region=eu-west-1

  [profile [PROFILE_NAME]]
  region=us-west-2
  ```

3. use a specific profile using the following command:
  ```
  aws [some_command] --profile [PROFILE_NAME]
  ```
