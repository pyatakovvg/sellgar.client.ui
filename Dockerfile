FROM gitlab.payquity.io:4567/devops/images/node:16.3.0-alpine3.13 as builder

WORKDIR /opt/app

RUN which yarn || npm i yarn -g

COPY package.json yarn.lock lerna.json builder.sh ./
COPY apps/qand  ./apps/qand
COPY modules    ./modules
COPY layouts    ./layouts
COPY libraries  ./libraries
COPY helpers    ./helpers
COPY packages   ./packages

#Enabled yarn audit
RUN yarn install --frozen-lockfile && \
    yarn add improved-yarn-audit@2.2.1 -W && \
    yarn run improved-yarn-audit --min-severity moderate --ignore-dev-deps

RUN chmod +x ./builder.sh && ./builder.sh

WORKDIR /opt/app/apps/qand

RUN yarn build


FROM gitlab.payquity.io:4567/devops/images/node:16.3.0-alpine3.13

COPY --from=builder /opt/app /opt/app

WORKDIR /opt/app/apps/qand

EXPOSE 3000
