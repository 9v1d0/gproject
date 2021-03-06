/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    userName: {
      type: 'string',
      unique: true,
      required: true
    }
    emaiAdress: {
      type: 'string',
      unique: true,
      required: true,
      email: true
    }
    favoriteNumber: {
      type: 'number',
    }
  }
};
