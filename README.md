# 🍕 Recipe Sharing API

# Group Members

- **👤 Chester Luke A. Maligaso**
- **👤 Marc Angelo Macaysa**
- **👤 Christine Rose Riego**
- **👤 Michael Jeff Sajul**

## 💡 About the API

This application is a Recipe Sharing System built using Node.js and Express. It provides a RESTful API for creating, reading, updating, and deleting (CRUD) recipe.

## 🧩 Features

In the culinary world, sharing and discovering new recipes is an integral part of the experience. The Recipe Sharing API aims to facilitate this exchange by providing developers with a platform to build applications that enable users to share, discover, and explore recipes effortlessly.

1. **Recipe Management**:
- **Create:** Users can create their own recipes, including ingredients, preparation steps, and more.
- **Retrieve:** Users can access recipes  created by other users with detailed information such as title, description, ingredients, instructions, ratings.
- **Update:** Recipes can be edited and modified to reflect changes or improvements.
- **Delete:** Users have the ability to remove recipes from their collection.

2. **Search and Discovery**:
- **Name-Based Search:** Users may search for recipes by name. This feature enables users to easily locate a certain recipe if they know its name.
- **Name-Based Search:** Users may search for recipes by tag. This tool allows users to search for all recipes that fit into a given category, such as 'Lunch', 'Breakfast', etc.
- **ID-Based Search:** Users may search for recipes using their id.

4. **User Management**:
- **Login**: Allows users to log in with an existing account. If no such user exists, a new one will be created.
- **SignUp**: User is able to sign up with a unique username and password combination.

5. **Error Handling**: The application has comprehensive error handling. If an error occurs, the program will display a useful error message and, in development mode, a stack trace.


## 🎯Purpose
The Recipe Sharing API facilitates the sharing and discovery of culinary recipes among users, fostering community engagement and knowledge sharing within the cooking community. It provides a centralized platform for users to explore diverse recipes, interact socially, and organize their cooking experiences conveniently.


# ⚙ Local Setup
Follow these steps to set up the application locally:

1. **Clone the Repository**: First, clone the repository to your local machine using Git. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/Kukaas/recipe-sharing-api.git
```

2. **Install Dependencies**: Navigate into the cloned repository directory and install the necessary dependencies. Run the following command in your terminal:

```bash
npm install
```

3. **Start the Server**: Now, you can start the server by running the following command in your terminal:

```bash
node . 
```

The server will start, and you should see a message like <span style="color:green"><strong>Server running on http://localhost:3000...</strong></span> in your terminal.

4. **Test the Application**: You can now test the application by sending requests to <span style="color:green"><strong>Listening on http://localhost:3000/recipe</strong></span>. You can use a tool like Postman to send HTTP requests.

# 🌐 Recipe Sharing API Endpoint Guide

This application provides several API endpoints for managing recipes:

This API allows you to manage recipes. Here's how you can use the endpoints:

## Get All Recipes

**Endpoint:** `/recipes`

**Method:** `GET`

**Description:** Returns all recipes.

## Get a Specific Recipe by ID

**Endpoint:** `/recipe/:id`

**Method:** `GET`

**Description:** Returns a recipe with the provided ID..

**Parameters:**

- `id`: The ID of the recipe.

## Get Recipes by Name

**Endpoint:** `/recipe/name/:name`

**Method:** `GET`

**Description:** Returns recipes with the provided name.

**Parameters:**

- `name`: The name of the recipe.

## Get Recipes by Tag

**Endpoint:** `/recipe/tag/:tag`

**Method:** `GET`

**Description:** Returns recipes with the provided tag.

**Parameters:**

- `tag`: The tag of the recipe.

## Create a New Recipe

**Endpoint:** `/recipe/add`

**Method:** `POST`

**Description:** Creates a new recipe.

**Body:**

- `name`: The name of the recipe (required).
- `ingredients`: The ingredients of the recipe (required).
- `steps`: The steps of the recipe (required).
- `tag`: The tags of the recipe (optional).

## Update a Recipe

**Endpoint:** `/recipe/update/:id`

**Method:** `PUT`

**Description:** Updates the recipe with the provided ID.

**Parameters:**

- `id`: The ID of the recipe.

**Body:**

- `name`: The name of the recipe (optional).
- `ingredients`: The ingredients of the recipe (optional).
- `steps`: The steps of the recipe (optional).
- `tag`: The tags of the recipe (optional).

## Delete a Recipe

**Endpoint:** `/recipe/delete/:id`

**Method:** `DELETE`

**Description:** Deletes the recipe with the provided ID.

**Parameters:**

- `id`: The ID of the recipe.

## Signup User

**Endpoint:** `/user/signup`

**Method:** `POST`

**Description:** Add a new user.

## Login User

**Endpoint:** `/user/login`

**Method:** `POST`

**Description:** Login a user.



# 📚 Dependencies Guide

This project requires on various dependencies to perform properly. Here's a quick summary for each:

## Dependencies

### 🚀 express

**Version:** ^4.18.2

**Description:** This package provides a quick, unbiased, and lightweight web framework for Node.js..

**Usage:** In this project, Express is utilized to build the server and handle the API routes.

### 🚀 joi

**Version:** ^17.12.1

**Description:** Joi is a popular library used for data validation in JavaScript applications, particularly in Node.js applications. It provides a simple and powerful way to define schemas for validating JavaScript objects.

**Usage:** In this project, joi  is used as the main schema validation library. It helps in validating data against defined schemas which

## 🔧 DevDependencies

### 🔄 nodemon

**Version:** ^3.0.3

**Description:** This package is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

**Usage:** In this project, Nodemon is used to automatically restart the server whenever a file is changed. It's used in the `dev` script in the `package.json` file.