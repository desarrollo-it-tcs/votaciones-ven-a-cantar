const router = require("express").Router();
const Admin = require('../../database/models/AdminModel');

router.get('/', async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

module.exports = router;