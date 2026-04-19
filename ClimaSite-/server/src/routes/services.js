const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');

router.get('/', async (req, res) => {
  try {
    const services = await prisma.service.findMany({ orderBy: { createdAt: 'asc' } });
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar serviços' });
  }
});

module.exports = router;
