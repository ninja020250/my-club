-- Create Table User
CREATE TABLE IF NOT EXISTS my_user (
	id serial PRIMARY KEY,
	name VARCHAR (200),
	lastName VARCHAR (200),
	username VARCHAR (200),
	password TEXT,
	status TEXT,
	avatar VARCHAR (250),
	type VARCHAR (250),
	age INT
);

-- SEARCH ALL
SELECT
	u.name,
	u.lastName,
	u.username,
	u.status,
	u.avatar,
	u.age,
	r.name as role_name
FROM
	my_user u
	LEFT JOIN user_role ur ON ur.user_id = u.id
	LEFT JOIN role r ON ur.role_id = r.id;

-- Create Table role
CREATE TABLE IF NOT EXISTS role (
	id serial PRIMARY KEY,
	name VARCHAR (200),
	description TEXT
);

-- Create Table mapping role & user
CREATE TABLE IF NOT EXISTS user_role (
	user_id INT,
	role_id INT,
	PRIMARY KEY (user_id, role_id)
);

-- Init roles
INSERT INTO
	role(name, description)
VALUES
	('treasurer', 'Thủ quỹ'),
	('host', 'host'),
	('member', 'member') RETURNING *;

-- Add new user
INSERT INTO
	my_user(
		name,
		lastName,
		username,
		password,
		status,
		avatar,
		age
	)
VALUES
	(
		'Người dùng 1',
		'lastName',
		'username',
		'password',
		'membership',
		'https://picsum.photos/200/300',
		18
	) RETURNING *;

-- Add user role
INSERT INTO
	user_role(user_id, role_id)
VALUES
	(1, 3) RETURNING *;