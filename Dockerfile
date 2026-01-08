FROM baseImage AS buildImage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build