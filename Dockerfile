FROM node:18.2-alpine
WORKDIR /Next--Website
ENV PATH="/.node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]


