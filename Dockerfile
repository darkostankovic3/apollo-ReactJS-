FROM buildkite/puppeteer:latest

RUN mkdir /app
WORKDIR /app
# a place to dump failed test logs so that they can be seen in Gitlab
RUN mkdir test_results

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .