-- Create Table
CREATE TABLE IF NOT EXISTS fund_history (
	id serial PRIMARY KEY,
	name VARCHAR (200),
	amount DECIMAL(12, 2),
	note TEXT,
	transaction_date date,
	club_id INT
);

-- Search All
SELECT
	*
FROM
	fund_history;

-- Search by club id
SELECT
	*
FROM
	fund_history
WHERE
	club_id = 1;

-- Add new record
INSERT INTO
	fund_history(name, amount, note, transaction_date)
VALUES
	(
		'Thu Quỹ',
		100000,
		'Thu Quỹ hàng tháng',
		'2023-10-20'
	) RETURNING *;

-- Update
UPDATE
	fund_history
SET
	name = 'Updated',
	amount = 200000,
	note = 'Updated note',
	transaction_date = '1997-12-09'
Where
	id = 1 RETURNING *;

-- Update club_id
UPDATE
	fund_history
SET
	club_id = 1
Where
	id = 2 RETURNING *;

-- Delete transaction
DELETE FROM
	fund_history
WHERE
	id = '3' RETURNING *;

-- Show all
SELECT
	*
FROM
	fund_history;

-- Delete table
DROP TABLE IF EXISTS fund_history;