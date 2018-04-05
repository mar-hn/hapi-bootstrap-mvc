/**
 * Created by barrett on 8/28/14.
 */

var mysql = require('mysql');
// var db = require('../config/connection.js');

var db = {
    'connection': {
        'host': 'localhost',
        'user': 'root',
        'password': 'root'
    },
	'database': 'c_test',
    'users_table': 'users'
}

var connection = mysql.createConnection(db.connection);

connection.query('USE DATABASE ' + db.database);

connection.query('\
CREATE TABLE `' + db.database + '`.`' + db.users_table + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `username` VARCHAR(20) NOT NULL, \
    `password` CHAR(60) NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
    UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
)');

console.log('Success: Database Created!')

connection.end();
