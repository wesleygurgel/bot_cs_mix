CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    discord_id VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) NOT NULL
);

CREATE TABLE queue (
    queue_id SERIAL PRIMARY KEY,
    player_id INT UNIQUE REFERENCES players(player_id),
);

SET TIME ZONE 'UTC+3';
