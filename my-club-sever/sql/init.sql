-- CREATE mapping table
CREATE TABLE IF NOT EXISTS club_user (
	club_id TEXT,
	user_id TEXT,
	PRIMARY KEY (club_id, user_id)
);

CREATE TABLE IF NOT EXISTS event_user (event_id TEXT, user_id TEXT);

CREATE TABLE IF NOT EXISTS user_role (
	user_id TEXT,
	role_name TEXT,
	PRIMARY KEY (user_id, role_name)
);

-- Init roles
INSERT INTO
	role(name, description)
VALUES
	('treasurer', 'Thủ quỹ'),
	('host', 'host'),
	('member', 'member') RETURNING *;

-- Add new record
INSERT INTO
	club(name, description, logo, banner, location)
VALUES
	(
		'Câu Lạc Bộ Cầu Lông',
		'Mô tả câu lạc bộ',
		'https://picsum.photos/seed/picsum/200/300',
		'https://picsum.photos/200/300/?blur',
		'Nhà Văn Hóa thiếu nhi'
	) RETURNING *;

-- Create host
INSERT INTO
	my_user(
		name,
		last_name,
		username,
		email,
		password,
		status,
		avatar,
		age
	)
VALUES
	(
		'Nhật Cường',
		'Huỳnh',
		'player',
		'nhatcuonghuynh@gmail.com',
		'912af0dff974604f1321254ca8ff38b6',
		'A',
		'https://picsum.photos/200/300',
		18
	) RETURNING *;

-- SELECT * FROM my_user;
-- Add role for user
INSERT INTO
	user_role(user_id, role_name)
VALUES
('216fb4b4-8fce-47ba-aee4-e772b64e6708', 'host') -- SELECT * FROM club;
	-- Add member into club 
INSERT INTO
	club_user(club_id, user_id)
VALUES
	(
		'effb2313-0f7a-45fa-9653-7a11eb795303',
		'0d5a4121-0cfd-4f1f-af86-1114604c5f68'
	)
SELECT
	*
FROM
	event_user eu
WHERE
	eu.event_id = ''
	AND user_id = '';