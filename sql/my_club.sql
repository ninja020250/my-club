-- Create Table
CREATE TABLE IF NOT EXISTS club (
	id serial PRIMARY KEY,
	name VARCHAR (200),
	description TEXT,
	logo TEXT,
	banner TEXT,
	location TEXT
);

-- Create Table
CREATE TABLE IF NOT EXISTS club_user (
	club_id INT,
	user_id INT,
	PRIMARY KEY (club_id, user_id)
);

-- Search all
SELECT
	club.name,
	club.description,
	club.logo,
	club.banner,
	club.location,
	pi.name as payment_name,
	COALESCE(SUM(fund_history.amount), 0.00) AS balance
FROM
	club
	INNER JOIN fund_history on club.id = fund_history.club_id
	INNER JOIN club_payment_info cpi ON cpi.club_id = club.id
	INNER JOIN payment_info pi ON cpi.payment_info_id = pi.id
GROUP BY
	club.name,
	club.description,
	club.logo,
	club.banner,
	club.location,
	pi.name;

-- Search all
SELECT
	club.name,
	club.description,
	club.logo,
	club.banner,
	club.location,
	pi.name as payment_name,
	(
		SELECT
			COALESCE(SUM(amount), 0.00) AS balance
		FROM
			fund_history
		WHERE
			club_id = club.id
	) AS balance
FROM
	club
	INNER JOIN club_payment_info cpi ON cpi.club_id = club.id
	INNER JOIN payment_info pi ON cpi.payment_info_id = pi.id;

-- Get list member by club_id
SELECT
	c.name,
	c.description,
	c.logo,
	c.banner,
	c.location,
	u.name,
	u.lastName,
	u.username,
	u.status,
	u.avatar,
	u.age
FROM
	club c
	INNER JOIN club_user cu ON cu.club_id = c.id
	INNER JOIN my_user u ON cu.user_id = u.id 
SELECT
	SUM (amount) AS balance
FROM
	fund_history
GROUP BY
	club_id;

-- Add new record
INSERT INTO
	club(name, description, logo, banner, location)
VALUES
	(
		'Câu Lạc Bộ Cầu Lông 2',
		'clb',
		'https://picsum.photos/seed/picsum/200/300',
		'https://picsum.photos/200/300/?blur',
		'Nhà Văn Hóa thiếu nhi'
	) RETURNING *;

-- Update record
UPDATE
	club
SET
	name = 'Updated',
	description = 'Updated Description',
	logo = 'https://picsum.photos/seed/picsum/200/300',
	banner = 'https://picsum.photos/200/300/?blur',
	location = 'Updated location'
Where
	id = 1 RETURNING *;

-- Delete transaction
DELETE FROM
	club
WHERE
	id = 1 RETURNING *;

-- Delete table
DROP TABLE IF EXISTS club;