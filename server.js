import express from "express"

const PORT = 3124

const app = express()

app.get("/hello", (req, res) => {
    res.status(200).json({
        message: "Hello from server",
    })
})

app.get("/hi", (req, res) => {
    res.status(200).json({
        message: "Hi, i am doekdiem",
    })
})

app.get("/dev", (req, res) => {
    res.status(200).json({
        message: "developing...",
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`)
})