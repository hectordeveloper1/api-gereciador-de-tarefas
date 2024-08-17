const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const taskRoutes = require('./src/routes/taskRoutes');

app.use(express.json());
app.use('/api', taskRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
