# Because raspbian based on debian:jessie
FROM debian:jessie

RUN true \
  # Update package lists
  && apt-get update \
  # curl
  && apt-get install -y curl \
  # nodejs
  && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
  && apt-get install -y nodejs build-essential

RUN true \
  # App user
  && adduser --quiet --disabled-password --gecos "" raspberrypi-dev-js

# Run server
CMD /bin/su - raspberrypi-dev-js -c "cd ~/src/server && npm start"
