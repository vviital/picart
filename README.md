# PicArt
PicsArt is a project to analyze pictures based on spectral lines

# Motivation

This project is solely my master's degree work. Nowadays in world there are many unrecognized pictures which can belongs to worldwide and localy famous authors. This problem could be solved for rather old pictures (before 1900-x) by automatic analyses based on paints spectrum. 

# Roadmap

This projects intended to combine different microservices. Right now I'm developing first microservices:
- `auth`. Microservice to issue and check autentification tokens
- `dashboard`. Main web app for researchers. Dashboard provide base functionality and contains links to another web apps.
- `forms`. Web app for adding database by uploading information about known pictures.
- `api`. Microservice to provide api for web apps.
- `router`. Containerized `nginx`

# Instalation

## Prereqistions

Before start be sure, that your local machine has installed `docker`.

## Start app
All microservices could be run under `docker-compose` by typing single command:
```
  docker-compose up
```
