const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nome, email e mensagem são obrigatórios' });
    }

    const contact = await prisma.contact.create({
      data: { name, email, phone: phone || null, message },
    });
    res.status(201).json({ success: true, id: contact.id });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar contato' });
  }
});

module.exports = router;
