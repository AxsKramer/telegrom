const express = require('express');
const multer = require('multer');

const config = require('../../config');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({dest: 'public/' + config.publicRoute + config.filesRoute + '/'});

router.get('/', (req, res) => {
  const filterMessages = req.query.chat || null;
  controller.getMessages(filterMessages)
    .then(messageList => response.success(req, res, messageList, 200))
    .catch(e => response.error(reaq, res, 'Error inesperado', 500, e.message));
});

router.post('/', upload.single('file'), (req, res) => {
  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then(fullMessage => response.success(req, res, fullMessage, 201))
    .catch(e => response.error(req, res, 'Información invalida', 400, 'Error en el controlador'));
});

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then(data => response.success(req, res, data, 200))
    .catch(e => response.error(req, res, 'Error interno', 500, e.message));
});

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200))
    .catch(e => response.error(req, res, 'Error interno', 500, e.message));
});

module.exports = router;