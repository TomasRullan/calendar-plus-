const router = require('express').Router();
const projectRoutes = require('./projectroutes');
const userRoutes  = require('./userroutes');


router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
