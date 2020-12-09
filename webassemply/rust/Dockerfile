FROM rust:1.46.0-buster

RUN mkdir -p /opt/nvm 
ENV NVM_DIR /opt/nvm 
ENV NODE_VERSION 14.15.1

RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh \
    && cargo install cargo-generate \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | sh \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

WORKDIR /usr/src
COPY . .