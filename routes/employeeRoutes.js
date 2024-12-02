const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee'); // Çalışan modeli

// GET /employees - Tüm çalışanları getir
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find(); // MongoDB'den tüm çalışanları al
    res.json(employees); // JSON olarak yanıtla
  } catch (err) {
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// POST /employees - Yeni bir çalışan ekle
router.post('/employees', async (req, res) => {
  const { name, department, position, salary } = req.body;

  try {
    const newEmployee = new Employee({ name, department, position, salary });
    await newEmployee.save();
    res.status(201).json({ message: 'Çalışan başarıyla eklendi!', employee: newEmployee });
  } catch (err) {
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// PUT /employees/:id - Bir çalışanın bilgilerini güncelle
router.put('/employees/:id', async (req, res) => {
  const { name, department, position, salary } = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, department, position, salary },
      { new: true } // Güncellenmiş veriyi döndür
    );
    res.json({ message: 'Çalışan bilgileri güncellendi', employee: updatedEmployee });
  } catch (err) {
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// DELETE /employees/:id - Bir çalışanı sil
router.delete('/employees/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Çalışan başarıyla silindi' });
  } catch (err) {
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

module.exports = router;
