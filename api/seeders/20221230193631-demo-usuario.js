"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      return queryInterface.bulkInsert("Usuarios", [
         {
            nome: "Bruno",
            email: "Bruno@bruno.com",
            senha: "aaaa",
            avatar: "foto.png",
            dataNascimento: new Date(),
            ativo: true,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
      ]);
   },

   async down(queryInterface, Sequelize) {},
};
