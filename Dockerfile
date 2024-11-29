# Node.js tabanlı bir Docker imajı kullan
FROM node:18

# Uygulama dizinini oluştur
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Node.js bağımlılıklarını yükle
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Uygulamanın çalıştırılacağı portu belirt
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
