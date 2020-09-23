import {v4 as uuidv4} from 'uuid'

exports.seed = function(knex) {
	return knex('users').insert([
		{'UUID': uuidv4(), 'username': "Sunda", 'password': 'pass1' },
		{'UUID': uuidv4(), 'username': "Plat", 'password': 'pass2' }, 
		{'UUID': uuidv4(), 'username': "Cham", 'password': 'pass3' }, 
  ]);
};