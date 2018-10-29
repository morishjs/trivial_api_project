'use strict';
let date = new Date();

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'John Doe',
            email: 'jsp@thevaulters.com',
            createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
