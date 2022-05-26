FROM node:18.2-alpine

WORKDIR /Next--Website

# ENV PATH="/.node_modules/.bin:$PATH"

# COPY . .

COPY package.json .

# RUN npm run build

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


