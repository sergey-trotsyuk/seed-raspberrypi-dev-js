# RaspberryPi NodeJS dev seed with Docker

There is a simple seed for NodeJS development on Raspberry PI with Docker. It's just a experiment. For now it's just a x86_64 dev env.

## Docker and Docker Compose installation

Please, check this articles for install Docker and Docker Compose for your OS:
 - https://docs.docker.com/engine/installation/
 - https://docs.docker.com/compose/install/

For macOS you can use brew:
```
brew install docker-machine docker docker-compose
```

## Run env

In order to up env please install Docker and Docker Compose and run this command:
```
docker-compose -f docker/docker-compose.yml up
```
