module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define(
        "projects",
        {
            title: {
                type: Sequelize.STRING
            },
            subtitle: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            icon: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            }
        }
    );
    return Project;
};