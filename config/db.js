const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // MongoDB bağlantısı
        await mongoose.connect(process.env.MONGO_URI); // Gereksiz seçenekler kaldırıldı
        console.log('MongoDB Bağlantısı Başarılı');
    } catch (err) {
        console.error('MongoDB Bağlantı Hatası:', err.message); // Hata mesajını detaylı göster
        process.exit(1); // Uygulamayı durdur
    }
};

module.exports = connectDB;
