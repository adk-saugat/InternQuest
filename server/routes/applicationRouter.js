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

// Get all Applications
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

// Delete application
appRouter.delete("/:id", auth, async (req, res) => {
  try {
    const application = await Application.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    })
    if (!application) {
      return res.status(404).send({ error: "Application to delete not Found!" })
    }

    res.status(200).send(application)
  } catch (error) {
    res.status(400).send(error)
  }
})

export { appRouter }
