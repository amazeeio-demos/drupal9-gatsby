FROM uselagoon/node-14-builder:latest as builder

COPY package.json yarn.lock /app/

RUN apk add --no-cache \
    autoconf \
    automake \
    libtool \
    make \
    tiff \
    jpeg \
    zlib \
    zlib-dev \
    pkgconf \
    nasm \
    file \
    gcc \
    musl-dev

RUN yarn global add gatsby-cli
RUN yarn install
COPY ./ /app/

# make sure we skip the layer caching every single time, see https://stackoverflow.com/questions/35134713/disable-cache-for-specific-run-commands
# 
# `gatsby build` runs the gatsby build which reaches out to an external service to load content, as this content might has changed
# we need to make sure `gatsby build` runs every single time. As the code of the git repo did not change and this is the only thing that is used
# for docker builds to decide if it should use the cache or not. Therefore we force the layer cache to be invalid (with downloading a random string)
# a bit hacky, but works. can be refactored when https://github.com/amazeeio/lagoon/issues/2246 lands.
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
RUN export && gatsby clean
