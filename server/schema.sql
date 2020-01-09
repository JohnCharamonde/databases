CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id int not null,
  user_name varchar(255),
  PRIMARY KEY (user_id)
);

CREATE TABLE rooms (
  room_id int not null,
  PRIMARY KEY (room_id)
);

CREATE TABLE messages (
  message_id int not null,
  user_id int not null,
  room_id int not null,
  message_content varchar(255),
  PRIMARY KEY (message_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

