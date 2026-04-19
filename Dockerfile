FROM alpine

RUN apk add --update nodejs npm

RUN mkdir bib-frontend
WORKDIR /bib-frontend

COPY ./ ./
RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]