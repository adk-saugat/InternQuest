import express from "express"

import { Application } from "../model/applicationModel.js"
import { auth } from "../middleware/auth.js"

const appRouter = new express.Router()

// Creating an application
appRouter.post("/create", auth, async (req, res) => {
  try {
    const application = new Application({ ...req.body, owner: req.user._id })

    await application.save()
    res.status(201).send(application)
  } catch (error) {
    res.status(400).send(error)
  }
})

appRouter.get("/all", auth, async (req, res) => {
  try {
    const applications = await Application.find({
      token: req.header["auth-token"],
    })
    res.status(200).send(applications)
  } catch (error) {
    res.status(400).send(error)
  }
})

export { appRouter }
