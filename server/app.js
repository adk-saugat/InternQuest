import express from "express"
import cors from "cors"
import "dotenv/config"
import "./database/mongoose.js"
import { userRouter } from "./routes/userRouter.js"

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use("/users", userRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))
