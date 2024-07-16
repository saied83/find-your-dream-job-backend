# Find Your Dream Job (Client)

This is a Full Stack Project build with `Express.js`, `Node.js`, `MySQL`, `React.js`, `TailwindCSS`.

## Features

- Create, update and delete jobs.
- Find Jobs according to job seekers preferences

## Run Locally

Create a folder

```bash
mkdir find-your-dream-job
```

Go to the folder

```bash
cd find-your-dream-job
```

Clone the client in this directory

```bash
git clone https://github.com/saied83/find-your-dream-job-frontend.git
```

Again clone the backend in the same directory

```bash
git clone https://github.com/saied83/find-your-dream-job-backend.git
```

Go to the client directory

```bash
cd find-your-dream-job-frontend
```

Install dependencies

```bash
npm install
```

Start the client server

```bash
npm run dev
```

Go to the backend directory

```bash
cd ../find-your-dream-job-backend
```

## Create and setup MySQL database

Login to MySQL

```bash
  sudo mysql -u root -p
```

Create database named **JobDB** and follow these query

```bash
  CREATE DATABASES JobDB;
```

```bash
  USE JobDB;
```

```bash
  CREATE TABLE companies (
     c_id INT PRIMARY KEY AUTO_INCREMENT,
     c_name VARCHAR(255),
     c_description TEXT,
     c_email VARCHAR(255),
     c_phone VARCHAR(255)
);
```

```bash
  CREATE TABLE jobs (
     job_id INT PRIMARY KEY AUTO_INCREMENT,
     job_title VARCHAR(255),
     job_type VARCHAR(255),
     job_description TEXT,
     job_location VARCHAR(255),
     job_salary VARCHAR(255),
     c_id INT,
     FOREIGN KEY (c_id) REFERENCES companies(c_id)
);
```

Insert some dummy data

```bash
INSERT INTO companies (c_name, c_description, c_email, c_phone)
    VALUES
    ('TechCorp', 'A leading technology company focused on software development and cloud solutions.', 'techcorp@example.com', '+1 (123) 456-7890'),
    ('Green Solutions', 'A sustainability-focused company offering renewable energy and eco-friendly products.', 'greensolutions@example.com', '+1 (987) 654-3210'),
    ('FinTech Global', 'A global financial technology company providing innovative banking solutions.', 'fintechglobal@example.com', '+1 (555) 123-4567'),
    ('HealthCare Plus', 'A healthcare provider offering a range of medical services and wellness programs.', 'healthcareplus@example.com', '+1 (555) 456-7890'),
    ('RetailMart', 'A major retail chain with stores across the country.', 'retailmart@example.com', '+1 (555) 789-0123'),
    ('EduTech', 'An educational technology company developing innovative learning platforms.', 'edutech@example.com', '+1 (555) 987-6543'),
    ('FoodDelivery', 'A food delivery service connecting restaurants with customers.', 'fooddelivery@example.com', '+1 (555) 321-9876'),
    ('TravelX', 'A travel agency offering booking services for flights, hotels, and tours.', 'travelx@example.com', '+1 (555) 654-3210');

INSERT INTO jobs (job_title, job_type, job_description, job_location, job_salary, c_id)
    VALUES
    ('Senior Software Engineer', 'Full-Time', 'Develop and maintain complex software systems.', 'San Francisco, CA', '$120K - $150K', 1),
    ('Solar Panel Installer', 'Full-Time', 'Install solar panels on residential and commercial properties.', 'Denver, CO', '$45K - $60K', 2),
    ('Financial Analyst', 'Full-Time', 'Analyze financial data and provide insights.', 'New York, NY', '$80K - $100K', 3),
    ('Registered Nurse', 'Full-Time', 'Provide patient care in a hospital setting.', 'Chicago, IL', '$65K - $85K', 4),
    ('Store Manager', 'Full-Time', 'Oversee daily operations of a retail store.', 'Los Angeles, CA', '$50K - $70K', 5),
    ('Curriculum Developer', 'Full-Time', 'Create and develop educational content.', 'Boston, MA', '$70K - $90K', 6),
    ('Delivery Driver', 'Part-Time', 'Deliver food to customers.', 'Miami, FL', '$20K - $30K', 7),
    ('Travel Agent', 'Full-Time', 'Assist customers with booking travel arrangements.', 'Honolulu, HI', '$40K - $55K', 8);
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`=8000

`USER_DB`="root"

`USER_PASSWORD_DB`= **Your MySQL Root Password**

`DB_NAME`="JobDB"

`HOST_DB`="localhost"

## Install Dependencies

```bash
npm Install
```

Run Locally

```bash
npm run server
```

** Now It will show up at **

```bash
http://localhost:3000
```

## Support

For support, email saiedtechit@gmail.com .
