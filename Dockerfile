FROM node:15.4.0
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD [ "npm", "start" ]