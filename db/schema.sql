DROP DATABASE IF EXISTS fiscal_db;
CREATE DATABASE fiscal_db;

-- Table for Users --
CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT, 
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Table for user transactions referencing to the User --
CREATE TABLE Transactions (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    transact_date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE Budgets (
    id INT NOT NULL AUTO_INCREMENT,
    category_id INT NOT NULL,
    -- Start of budget period --
    period_start TIMESTAMP NOT NULL,
    -- End of budget period -- 
    period_end TIMESTAMP NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    notes TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);