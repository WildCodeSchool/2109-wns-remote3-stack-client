FROM node:14-alpine as builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ARG VITE_API_URL=${VITE_API_URL}
COPY . /usr/src/app
RUN yarn
CMD ["yarn", "build"]

FROM nginx:1.21-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]