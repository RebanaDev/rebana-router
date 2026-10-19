docker stop Rebana Router
docker rm Rebana Router
docker build -t Rebana Router .
docker run -d --name Rebana Router -p 91827:91827 --env-file .env -v Rebana Router-data:/app/data Rebana Router