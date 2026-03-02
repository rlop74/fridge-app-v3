-- docker exec -it <container_id_or_name> psql -U <username> -d <database_name> -f /container/path/script.sql

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    preferred_expiry_within_seconds INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS item_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

INSERT INTO item_types (name)
VALUES
  ('Dairy'), ('Meat'), ('Vegetables'), ('Fruits'),
  ('Grains'), ('Beverages'), ('Snacks'), ('Other');

CREATE TABLE IF NOT EXISTS receipts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    receipt_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    quantity_current INT NOT NULL,
    expiry_date DATE NOT NULL, -- computed by app logic using preferred_expiry_within_seconds
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (receipt_id) REFERENCES receipts(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS receipt_items (
    id SERIAL PRIMARY KEY,
    receipt_id INT NOT NULL,
    item_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    quantity_purchased INT NOT NULL,
    item_type_id INT NOT NULL,
    FOREIGN KEY (receipt_id) REFERENCES receipts(id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE,
    FOREIGN KEY (item_type_id) REFERENCES item_types(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS receipt_imgs (
    id SERIAL PRIMARY KEY,
    receipt_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (receipt_id) REFERENCES receipts(id) ON DELETE CASCADE
);




