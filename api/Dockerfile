FROM node:14 AS DEV
WORKDIR /app
EXPOSE 3000
CMD ["yarn", "dev"]

FROM node:14 as PRD
WORKDIR /app
COPY package*.json ./app
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "build"]