FROM node:14-alpine

WORKDIR /app 

ADD . /app

RUN npm i && npx prisma generate

CMD node -r esm src/index.js

# low level shit no se que
# RUN apt update -y && apt install curl -y
# RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
# RUN chmod +x nodesource_setup.sh && ./nodesource_setup.sh
# RUN apt install -y git nodejs  
# RUN git clone https://github.com/aabedraba/jesinode
# RUN cd jesinode && npm i 

# CMD cd jesinode && node -r esm index.js