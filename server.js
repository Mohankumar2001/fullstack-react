const express = require('express');
const path = require('path');
const serve_index = require('serve-index');
const app = express();
const PORT = process.env.PORT || 4000;

app.use("/idx", express.static(path.join(__dirname, '/')));
app.use("/idx", serve_index(path.join(__dirname, '/'), {'icons': true}));
// app.use("/idx/frontend", express.static(path.join(__dirname, 'frontend')));
// app.use("/idx/frontend", serve_index(path.join(__dirname, 'frontend'), {'icons': true}));

app.get('/', (req, res) => {
    res.redirect('/idx');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});