const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');

router.get('/', async (req, res) => {
  try {
    const { category, city } = req.query;
    const where = {};
    if (category) where.category = category;
    if (city) where.city = { contains: city, mode: 'insensitive' };

    const projects = await prisma.project.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
});

module.exports = router;
