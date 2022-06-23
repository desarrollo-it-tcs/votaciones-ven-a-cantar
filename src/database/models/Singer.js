module.exports = (sequelize, type) => {
    const Singer = sequelize.define(
        "Singer",
        {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: type.STRING
            },
            imgUrl: {
                type: type.STRING
            },
            slug: {
                type: type.STRING
            },
            info: {
                type: type.STRING
            }
        },
        {
            timestamps: true,
        });
    return Singer;
};