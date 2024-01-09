import { Module, User } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'

const TAG = 'Module'

// @desc All Modules
// @route GET /api/v0.1/module
// @access Private
const getModules = asyncHandler(async (req, res, next) => {
  try {
    const modules = await Module.find({}).populate([
      { path: 'exercises', select: 'title' },
    ])
    if (modules) {
      res.status(200).json({
        message: RESPONSE.success[200],
        total: modules.length,
        modules,
      })
    } else {
      res.status(404)
      throw new Error(RESPONSE.error[404])
    }
  } catch (error: any) {}
})

// @desc All Module
// @route GET /api/v0.1/module/:id
// @access Private
const getModule = asyncHandler(async (req, res, next) => {
  try {
    const module = await Module.findById(req.params.id)
    if (module) {
      res.status(200).json({
        message: RESPONSE.success[200],
        module,
      })
    } else {
      logger.error(RESPONSE.error[404])
      res.status(404)
      throw new Error(RESPONSE.error[404])
    }
  } catch (error: any) {
    logger.error(error.message)
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc Add a Module
// @route POST /api/v0.1/module
// @access Private
const addModule = asyncHandler(async (req, res, next) => {
  const { title } = req.body
  //   check if the module already exists
  const moduleExists = await Module.findOne({ title })
  if (moduleExists) {
    res.status(400)
    throw new Error(RESPONSE.error[400](req.body.title))
  }

  try {
    const newModule = await Module.create(req.body)

    res.status(201).json({
      message: RESPONSE.success[201],
      module: newModule,
    })
  } catch (error: any) {
    logger.error(error.message)
    res.status(400)
    throw new Error(RESPONSE.error[400](req.body.title))
  }
})

// @desc Update a Module
// @route PUT /api/v0.1/module/:id
// @access Private
const updateModule = asyncHandler(async (req, res, next) => {
  let module = await Module.findById(req.params.id)

  if (module) {
    module.moduleNo = req.body.moduleNo || module.moduleNo
    module.title = req.body.title || module.title
    module.content = req.body.content || module.content
    module.agenda = req.body.agenda || module.agenda
    module.pages = req.body.pages || module.pages
    module.file = req.body.file || module.file
    module.exercises = req.body.exercises || module.exercises
    module.snippets = req.body.snippets || module.snippets

    const updatedModule = await module.save()
    // module = await Module.findByIdAndUpdate(req.params.id, req.body || module, {
    //   new: true,
    //   runValidators: true,
    // })

    res.status(200).json({
      message: RESPONSE.success[200],
      module: updatedModule,
    })
  } else {
    logger.error(RESPONSE.error[404])
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc Delete a Module
// @route DELETE /api/v0.1/module/:id
// @access Private
const deleteModule = asyncHandler(async (req, res, next) => {
  const module = await Module.findById(req.params.id)

  if (!module) {
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }

  try {
    await module.deleteOne({ _id: module._id })

    res.status(200).json({
      message: RESPONSE.success[200],
      module: {},
    })
  } catch (error: any) {
    logger.error(error.message)
    res.status(400)
    throw new Error(RESPONSE.error[400](module.title))
  }
})

const moduleController = {
  getModules,
  getModule,
  addModule,
  updateModule,
  deleteModule,
}
export default moduleController
