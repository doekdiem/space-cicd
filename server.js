import express from "express"

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

app.listen("3000", () => {
    console.log("Server is running...")
})