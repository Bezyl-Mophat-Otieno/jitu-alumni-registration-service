const {Router } = require('express');
const {registerMember} = require('../../controllers/memberController/memberRegisterController');
const registerMemberRouter = Router();



registerMemberRouter.post('/',registerMember)

module.exports = registerMemberRouter;