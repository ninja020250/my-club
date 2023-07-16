-- Truncated all tables
DROP TABLE IF EXISTS club;

DROP TABLE IF EXISTS my_user;

DROP TABLE IF EXISTS payment_info;

DROP TABLE IF EXISTS club_payment_info;

DROP TABLE IF EXISTS role;

DROP TABLE IF EXISTS user_role;

DROP TABLE IF EXISTS club_user;

DROP TABLE IF EXISTS fund_history;

DROP TABLE IF EXISTS event_user;

DROP TABLE IF EXISTS event;

-------------------- Create tables --------------------
CREATE TABLE IF NOT EXISTS club (
	id SERIAL PRIMARY KEY,
	name VARCHAR (200),
	description TEXT,
	logo TEXT,
	banner TEXT,
	location TEXT
);

CREATE TABLE IF NOT EXISTS my_user (
	id serial PRIMARY KEY,
	name VARCHAR (200),
	lastName VARCHAR (200),
	username VARCHAR (200),
	password TEXT,
	status TEXT,
	avatar VARCHAR (250),
	age INT
);

CREATE TABLE IF NOT EXISTS role (
	id serial PRIMARY KEY,
	name VARCHAR (200),
	description TEXT
);

CREATE TABLE IF NOT EXISTS club_user (
	club_id INT,
	user_id INT,
	PRIMARY KEY (club_id, user_id)
);

CREATE TABLE IF NOT EXISTS fund_history (
	id SERIAL PRIMARY KEY,
	name VARCHAR (200),
	amount DECIMAL(12, 2),
	note TEXT,
	transaction_date date,
	club_id INT
);

CREATE TABLE IF NOT EXISTS payment_info (
	id SERIAL PRIMARY KEY,
	name VARCHAR (200),
	desciption TEXT,
	qr_img TEXT,
	account_number VARCHAR (50)
);

CREATE TABLE IF NOT EXISTS club_payment_info (
	club_id INT,
	payment_info_id INT,
	PRIMARY KEY (club_id, payment_info_id)
);

-------------------- Init masterdata --------------------
-- Init roles
INSERT INTO
	role(name, description)
VALUES
	('treasurer', 'Thủ quỹ'),
	('host', 'host'),
	('member', 'member') RETURNING *;