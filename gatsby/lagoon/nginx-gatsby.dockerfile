ARG CLI_IMAGE
FROM ${CLI_IMAGE} as cli
FROM amazeeio/nginx

COPY --from=cli /app/public /app
