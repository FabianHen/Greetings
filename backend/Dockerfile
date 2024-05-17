# Verwende das offizielle Node.js 14 als Basisimage
FROM node

# Setze das Arbeitsverzeichnis innerhalb des Containers
WORKDIR /usr/src/app

# Kopiere package.json und package-lock.json und führe npm install aus
COPY package*.json ./
RUN npm install

# Kopiere den Rest des Backend-Codes
COPY . .

# Exponiere den Port, auf dem der Server läuft (Standardport 3000)
EXPOSE 3000

# Starte den Node.js-Server
CMD [ "node", "app.js" ]