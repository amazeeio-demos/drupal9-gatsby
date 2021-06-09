ARG CLIGATSBY_IMAGE
FROM ${CLIGATSBY_IMAGE} as cli
FROM uselagoon/node-14

COPY --from=cli /app /app
RUN yarn global add gatsby-cli

EXPOSE 3000
CMD ["gatsby","develop","--port","3000","--host","0.0.0.0"]
