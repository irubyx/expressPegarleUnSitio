const express = require('express');
const bodyParser = require('body-parser');

const { default: axios } = require('axios')

const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

app.get("/", async (req, res) => {
    try {
        const domain = req.query.domain
        console.log(domain)
        const response = await axios.get(`${domain}`).catch(err => {
            throw err
        })

        console.log(response.data)
        res.status(200).send("Ok!")
    } catch(err) {
        console.log(err)
        res.status(500).send(err)
    }
})

app.get("/hola", (req, res) => {
    console.log("Hola!")
    res.status(200).send("Hola!")
})