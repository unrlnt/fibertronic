FROM node:20
WORKDIR /app
COPY package*.json /app/
RUN npm install --production
COPY . /app/
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
