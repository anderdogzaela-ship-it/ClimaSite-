require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const servicesRouter = require('./routes/services');
const projectsRouter = require('./routes/projects');
const contactsRouter = require('./routes/contacts');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());

app.use('/api/services', servicesRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/contacts', contactsRouter);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
