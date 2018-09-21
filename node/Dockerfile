FROM node
COPY . /data/www
EXPOSE 3000
RUN cd /data/www && npm i
CMD node -v && node /data/www/index.js
