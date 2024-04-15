const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send('Devam ediyor...');
});


app.use((req, res) => {
  res.status(404).send('404 Not Found');
});


app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} üzerinde çalışıyor.`);
});