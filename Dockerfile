FROM node:latest as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx as runtime
#RUN chmod +777 /etc/nginx/conf.d/default.conf 
COPY --from=build /app/dist/openia-web /usr/share/nginx/html/openia-web
COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY nginx.conf /usr/share/nginx/conf/nginx.conf
EXPOSE 80