FROM node:16-slim AS build
# ENV NODE_ENV production
WORKDIR /usr/src/foomedical/
COPY ./ ./
RUN npm install

FROM python:3.9-slim-buster
WORKDIR /usr/src/foomedical/dist/
COPY --from=build /usr/src/foomedical/dist/ ./
ENTRYPOINT [ "python3", "-m", "http.server" ]
EXPOSE 8000
