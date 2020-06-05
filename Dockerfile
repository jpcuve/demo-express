FROM node:14-alpine
WORKDIR /var/www
COPY ./*.json ./
COPY ./src ./src/
RUN npm install -g typescript
RUN npm install
COPY ./src/views ./dist/views/
RUN tsc
