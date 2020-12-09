# Web Assembly with Rust

## Setup Environment
Use Dockerfile

## Create Project
```
cargo install cargo-generate
cargo generate --git https://github.com/rustwasm/wasm-pack-template
```

## Build Rust
From project root
```
wasm-pack build
```

## Create Web Project
1. From project root
    ```
    npm init wasm-app www
    ```
1. On ```www/package.json``` add (replace ${PROJECT_NAME} with the project name)
    ```
    "dependencies": {
        "${PROJECT_NAME}": "file:../pkg"
    },
    ```
1. Install dependencies
    ```
    cd www
    npm i
    ```

## Start dev server
1. Go to www
    ```
    cd www
    ```
1. Start server
    ```
    npm start
    ```