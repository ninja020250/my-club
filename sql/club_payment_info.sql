-- Create Table
CREATE TABLE IF NOT EXISTS payment_info (
	id serial PRIMARY KEY,
	name VARCHAR (200),
	desciption TEXT,
	qr_img TEXT,
	account_number VARCHAR (50)
);

-- Create Table
CREATE TABLE IF NOT EXISTS club_payment_info (
	club_id INT,
	payment_info_id INT,
	PRIMARY KEY (club_id, payment_info_id)
);

-- Search All
SELECT
	*
FROM
	payment_info;

-- Search by club id
SELECT
	*
FROM
	payment_info
WHERE
	id = 1;

-- Add new record
INSERT INTO
	payment_info(name, desciption, qr_img, account_number)
VALUES
	(
		'Thong tin thanh toan',
		'desciption',
		'https://picsum.photos/200/300',
		'01016536001'
	) RETURNING *;

-- Connect club id to payment
INSERT INTO
	club_payment_info(club_id, payment_info_id)
VALUES
	(1, 2) RETURNING *;

-- Update
UPDATE
	payment_info
SET
	name = 'Updated',
	desciption = 'Updated desciption',
	qr_img = 'https://picsum.photos/200/300',
	account_number = '01016536002'
Where
	id = 1 RETURNING *;

-- Delete transaction
DELETE FROM
	payment_info
WHERE
	id = 1 RETURNING *;

-- Delete table
DROP TABLE IF EXISTS payment_info;