module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            { email: 'gabriel@gmail.com', name: 'Gabriel Reis', password: '$2b$10$nIlZ62WxfqtU.NHtnVVHlex/YkeTyRsc//DnP.zq64fO/ji4P345K', createdAt: new Date(), updatedAt: new Date() },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};