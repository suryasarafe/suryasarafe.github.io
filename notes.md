## Install Docker

to install just type
`apt-get install docker.io`

then you need to login with
`docker login`


## Build docker file in the root folder

filename: Dockerfile
```
FROM node:20

WORKDIR /app

COPY package*.json ./

run npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

## Some command that will be required later

- docker build -t name .
- docker run -dp 3000:3000 name
- docker ps 


## setting nginx for using in the domain

edit  `/etc/nginx/sites-available/default`

update

```
server {
  listen 80;
  listen [::]:80;

  server_name sarafe.servehttp.com;

  root /var/www/example.com;
  index index.html;

  location / {
    # try_files $uri $uri/ =404;
    proxy_http_version 1.1;
    proxy_pass http://localhost:3000;
  }
}
```


## Add more swap to make ram easier

- check swap `sudo swapon --show`
- verify `free -h`
- check available disk `df -h`
- craete swap `sudo fallocate -l 1G /swapfile`
- set root `sudo chmod 600 /swapfile`
- mark swap `sudo mkswap /swapfile`
- swap on   `sudo swapon /swapfile`
- check swap is on `sudo swapon --show`

above setting will reset every restart
- make permanent `sudo cp /etc/fstab /etc/fstab.bak`
- make file info `echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`
- set swappines 0-100 closer to 100 will try to put more data into swap `sudo sysctl vm.swappiness=10`
- set cache pressure 0-100 100 more quick to purge `sudo sysctl vm.vfs_cache_pressure=50`

or set this `sudo nano /etc/sysctl.conf`
```
  vm.swappiness=10
  vm.vfs_cache_pressure=50
```
