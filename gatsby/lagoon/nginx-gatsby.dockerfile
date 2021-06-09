ARG CLIGATSBY_IMAGE
FROM ${CLIGATSBY_IMAGE} as cli
FROM amazeeio/nginx

COPY --from=cli /app/public /app
