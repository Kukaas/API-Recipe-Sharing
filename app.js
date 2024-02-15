// Import necessary modules
const express = require("express");
const app = express();
const Joi = require("joi");
const bcrypt = require('bcrypt');

// Import recipe data
const { recipesData } = require("./data/recipeData.js");
const { userData } = require("./data/userData.js");

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the root route of the api.;')
})

//Register user
app.post("/user/signup", (req, res) => {
    // Validate recipe data
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    });

    //Check if the recipe name already exists
    const existingUserByName = userData.find(user => user.name === req.body.name);
    if (existingUserByName) {
         return res.status(400).send("Name already exists");
    }

    const existingUserByEmail = userData.find(user=> user.email === req.body.email);
    if (existingUserByEmail) {
         return res.status(400).send("Email already exists");
    }
  
    // Create new recipe
    const newUser = {
      id: userData.length + 1,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
  
    userData.push(newUser);
    res.send(newUser);
});

//Login User
app.post('/user/login', (req, res) => {
    try {
        const user = userData.find(user => user.email === req.body.email);
        if (!user) {
            return res.status(400).json('No user found');
        }

        if (req.body.password === user.password) {
            const data = user.name;
                // You might not want to send the password back in the response for security reasons
                // password: user.password 
        
            return res.status(200).json(`Sucessfully logged in: ${JSON.stringify(data)}`);
        } else {
            return res.status(400).json('Password does not match.');
        }
    } catch (error) {
        console.error('Error while logging in:', error);
        return res.status(500).json('Internal server error');
    }
});


//GET all recipes
app.get('/recipes', (req, res) => {
    res.status(200).send(recipesData);
});

//GET recipes by ID
app.get('/recipe/:id', (req, res) => {
    try {
        const schema = Joi.object({
            id: Joi.number().integer().required(),
          });
        
          const { error } = schema.validate(req.params);
          if (error) return res.status(400).send(error.details[0].message);
        
          // Find recipe by ID
          const ID = req.params.id;
          const recipe = recipesData.find((c) => c.id === parseInt(ID));
          if (!recipe) return res.status(404).send({ message: "Recipe not found." });
          res.send(recipe);
    } catch (error) {
        res.status(500).json({"message": 'An error occured'});
    }
});

//GET Recipe by name
app.get("/recipe/name/:name", (req, res) => {
    // Create regex from name
    const name = req.params.name.replace(/\s/g, "");
    const regex = new RegExp(name.split("").join("\\s*"), "i");
  
    // Find recipes by name
    const recipes = recipesData.filter((c) => regex.test(c.name));
  
    if (recipes.length === 0)
      return res
        .status(404)
        .send('No recipe found with the given naame');
    res.send(recipes);
});

//GET Recipe by tag
app.get("/recipe/tag/:tag", (req, res) => {
    // Create regex from tag
    const tag = req.params.tag.replace(/\s/g, "");
    const regex = new RegExp("^" + tag.split("").join("\\s*") + "$", "i");
  
    // Find recipes by tag
    const recipes = recipesData.filter((c) => c.tag.some((t) => regex.test(t)));
  
    if (recipes.length === 0)
      return res
        .status(404)
        .send("No recipes found with the given tag.");
    res.send(recipes);
});

//POST a recipe
app.post("/recipe/add", (req, res) => {
    // Validate recipe data
    const schema = Joi.object({
      name: Joi.string().required(),
      ingredients: Joi.array().items(Joi.string()).required(),
      steps: Joi.array().items(Joi.string()).required(),
      tag: Joi.array().items(Joi.string()).required(),
    });
  
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if the recipe name already exists
    const existRecipe = recipesData.find(recipe => recipe.name === req.body.name);
    if (existRecipe) {
         return res.status(400).send("Recipe name already exists");
    }
  
    // Create new recipe
    const newRecipe = {
      id: recipesData.length + 1,
      name: req.body.name,
      ingredients: req.body.ingredients,
      steps: req.body.steps,
      tag: req.body.tag || [], // if tag is not provided, default to an empty array
    };
  
    recipesData.push(newRecipe);
    res.send(newRecipe);
  });

//UPDATE Recipe
app.put("/recipe/update/:id", (req, res) => {
    // Find recipe by ID
    const ID = parseInt(req.params.id);
    const recipe = recipesData.find((c) => c.id === ID);
    if (!recipe) return res.status(404).send("Recipe not found.");
  
    // Validate recipe data
    const schema = Joi.object({
      id: Joi.number().integer(),
      name: Joi.string(),
      ingredients: Joi.array().items(Joi.string()),
      steps: Joi.array().items(Joi.string()),
      tag: Joi.array().items(Joi.string()),
    });
  
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    // Merge the existing recipe with the new data from req.body
    Object.assign(recipe, req.body);
  
    res.send(recipe);
});

//DELETE a recipes
app.delete("/recipe/delete/:id", (req, res) => {
    // Find recipe by ID
    const ID = parseInt(req.params.id);
    const recipe = recipesData.find((c) => c.id === ID);
    if (!recipe) return res.status(404).send("Recipe not found.");
  
    // Remove recipe from array
    const index = recipesData.indexOf(recipe);
    recipesData.splice(index, 1);
  
    res.send(recipe);
  });


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}...`));