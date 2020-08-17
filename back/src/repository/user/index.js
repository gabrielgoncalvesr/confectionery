const Sequelize = require('sequelize');

const { User } = require('../../../database/models');

const getUser = async ({ email }) => {
    return await User.findOne({
        where: { email },
        raw: true,
    }).then(result => {
        return result;
    });
}

const updateUser = async (user) => {
    return await User.update(
        { ...user },
        { where: { email: user.email } }
    ).then(result => {
        return true;
    }).error(err => {
        return false;
    });
}

const createUser = async ({ name, email, password }) => {
    return await User.create({
        name,
        email,
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
}

module.exports = {
    getUser,
    updateUser,
    createUser,
}