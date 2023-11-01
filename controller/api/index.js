const router = require('express').Router();
const profileRoutes = require('./profileroutes');
const projectRoutes = require('./projectroutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
