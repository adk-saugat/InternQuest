import express from "express"
import cors from "cors"
import "dotenv/config"
import "./database/mongoose.js"
import { userRouter } from "./routes/userRouter.js"
import { appRouter } from "./routes/applicationRouter.js"

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
app.use("/applications", appRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))
