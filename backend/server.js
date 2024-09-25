import express from "express"
import fs from "fs"
import cors from "cors"



const app = express()
app.use(express.json());
app.use(cors())
const PORT = 3001


/*
https://freetestapi.com/api/v1/cars?limit=15
*/

app.get("/api/v1/cars", (req, res) => {
    const data = fs.readFileSync("data.json")
    res.header("Content-Type", "application/json");
    /*
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    */
    res.send(data)
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))