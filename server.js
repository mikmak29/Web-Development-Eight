const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));


app.listen(port, (error) => {
    if (error) {
        console.error(`Server is not serving at ${port}`, error);
    } else {
        console.log(`Server is listening at ${port}`);
    }
})