# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Clean out old HTML assets completely
RUN rm -rf /usr/share/nginx/html/*
# Copy new build assets
COPY --from=build /app/dist /usr/share/nginx/html

# Delete stock configuration file
RUN rm /etc/nginx/conf.d/default.conf
# Copy custom configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
