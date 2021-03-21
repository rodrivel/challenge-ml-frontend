FROM node:12.18.1

# set default port 
ENV PORT=4000

# set app dir
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# copy complete project
COPY . ./

# generate optimized build for production
RUN npm run build
    
# run server
CMD [ "node", "server.js" ]