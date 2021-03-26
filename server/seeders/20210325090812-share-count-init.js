'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const socialMedia = [
    {
      name: 'Facebook',
      shareCount: 0,
    },
    {
      name: 'Twitter',
      shareCount: 0,
    },
    {
      name: 'WhatsApp',
      shareCount: 0,
    }
  ]

  socialMedia.forEach(socialMedia => {
    socialMedia.createdAt = new Date(),
    socialMedia.updatedAt = new Date()
  })

   await queryInterface.bulkInsert('SocialMedia', socialMedia, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ShareCounts', null, {})
  }
};
