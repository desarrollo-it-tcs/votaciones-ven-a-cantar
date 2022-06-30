const Singer = require('../../database/models/SingerModel');
const router = require("express").Router();

//index
router.get("/", (req, res) => {
    Singer.findAll({
        attributes: ['id', 'name', 'image', 'slug', 'info']
    })
    .then((singers) => {
        res.json(singers);
    }).catch(err => {
        res.status(404).json(err);
    });
});

//show
router.get("/:id", (req, res) => {
    Singer.findByPk(req.params.id)
    .then((singer) => {
        res.json(singer);
    }).catch(err => {
        res.status(404).json(err);
    });
});

//create
router.post("/", (req, res) => {
    const { name, info, image, status } = req.body;
    Singer.create({
        'name': name,
        'info': info,
        'image': image,
        'status': status,
    }).then((singer) => {
        res.json(singer);
    }).catch(err => {
        res.status(404).json(err);
    });
});

//update
router.patch("/:id", (req, res) => {
    Singer.update(req.body, {
        where: {
            id: req.params.id,
        }
    }).then((result) => {
        res.json({ message: `${result} row updated successfully` });
    }).catch(err => {
        res.status(404).json(err);
    });
});

//delete
router.delete("/:id", (req, res) => {
    Singer.destroy({
        where: {
            id: req.params.id,
        }
    }).then((result) => {
        res.json({ message: `${result} row deleted successfully` });
    }).catch(err => {
        res.status(404).json(err);
    });
});

module.exports = router;