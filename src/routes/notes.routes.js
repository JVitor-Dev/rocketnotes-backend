const { Router } = require('express')

const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.createNotes)
notesRoutes.get('/', notesController.show)
notesRoutes.delete('/', notesController.delete)

module.exports = notesRoutes
