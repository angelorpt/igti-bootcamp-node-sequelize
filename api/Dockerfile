FROM node:14 AS DEV
WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM node:14 as PRD
WORKDIR /app
COPY package*.json ./app
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
