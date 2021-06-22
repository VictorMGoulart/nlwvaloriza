import express from 'express';

const app = express();

app.get("/test", (req, res) => {
    return res.send('Hello!')
})

app.post("/test-post", (req, res) => {
    return res.send('Hello! POST Method.')
})

// http://localhost:3000
app.listen(3000, () => console.log('Server is Running'))