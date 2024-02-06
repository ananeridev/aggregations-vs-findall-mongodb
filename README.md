# Aggregations vs FindAll MongoDB

If this repo it was helpul, please give me an start :star:
 
This project is a simple and direct comparison between the aggregation and find operations in MongoDB. It was created to demonstrate the performance differences between these two common MongoDB operations.

The project includes as well scripts to seed the database with sample data, perform an aggregation operation, and perform a find operation.

The execution time of each operation is measured and displayed in the console for easy comparison.

## How to use
* Clone the repository and install the dependencies with npm install.

* Configure the MongoDB connection string in the MONGO_CONNECTION_STRING environment variable.

* Run docker-compose up --build to up the mongodb

* Run node index.js to see the operations in action

## Requirements
* Node.js

* MongoDB

* Docker

**This project is useful for developers who are learning about MongoDB and want to understand the differences between aggregation and find operations, or for developers who are trying to optimize the performance of their MongoDB queries.**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
