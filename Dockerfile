FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html app.js style.css icon.svg manifest.webmanifest sw.js /usr/share/nginx/html/

EXPOSE 80
