FROM node:latest
WORKDIR app/
COPY . .
RUN npm install yarn
RUN yarn install
RUN yarn run start:dev