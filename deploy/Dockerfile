FROM node:14.18.2
# < -- Here is the app i am about to deploy! -->
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
COPY ./yarn.lock /usr/src/app
COPY ./node_modules /usr/src/app/node_modules
COPY ./dist /usr/src/app/dist

RUN yarn install

ENV HOST=0.0.0.0

ENV PORT=3000

WORKDIR /usr/src/app/dist/

ENTRYPOINT ["node", "index.js"]

EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -v http://localhost:${PORT}/ping || exit 1