CREATE TABLE IF NOT EXISTS users (
	user_id serial PRIMARY KEY,
	username VARCHAR (50) NOT NULL,
    age INT
);

CREATE TABLE IF NOT EXISTS posts (
	post_id serial PRIMARY KEY,
	title VARCHAR (50) NOT NULL,
    content TEXT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);
