import express from "express"

const app = express()

app.get("/hello", (req, res) => {
    res.status(200).json({
        message: "Hello from server",
    })
})

app.listen("3000", () => {
    console.log("Server is running...")
})