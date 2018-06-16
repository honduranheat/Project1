// var Recipe = require('../models')['Recipe'];
// var Users = require('../models')['Users'];
// var Ingredients = require('../models')['Ingredients'];
// var Steps = require('../models')['Steps'];
// var Posts = require('../models')['Posts'];




// module.exports = function(app) {
//     app.post('/newRecipe', function (req, res) {
    

//     var recipe = req.body;
//     Recipe.create({
//         title: recipe.title,
//         image: recipe.image,
//         ing1: recipe.ingredients1,
//         ing2: recipe.ingredients2,
//         ing3: recipe.ingredients3,
//         ing4: recipe.ingredients4,
//         ing5: recipe.ingredients5,
//         step1: recipe.steps1,
//         step2: recipe.steps2,
//         step3: recipe.steps3,
//         step4: recipe.steps4,
//         step5: recipe.steps5,
//         healthlabel: recipe.healthlabel,
//         score: 0

//     }).then(function (data) {
//         console.log('data', data);
//         res.redirect('/recipes/' + data.dataValues.id);
//     });

    
// });

// // //////////////////////////        
// // // view single recipe        
// app.get('/recipes/:id', function (req, res) {
//     var id = req.params.id;
//     // var recipe;
//     // var steps;
//     Recipe.findOne({
//         where: {
//             id: req.params.id
//         },

//     }).then(function (recipe) {
//         // console.log('singleRecipe', recipe);
//         res.render('singleRecipe', {
//             recipe: recipe
//         });
//        // recipe = result;
//         // console.log("saved recipe is ", recipe);
//     });



// });



// app.get("/api/recipes", function(req, res) {
//     // findAll returns all entries for a table when used with no options
//     Recipe.findAll({}).then(function(dbRecipes) {
//       // We have access to the todos as an argument inside of the callback function
//       res.json(dbRecipes);
//     });
//   });
// // /////////////////////////// 
// // // recipe ranking



// app.get('/allrecipes/', function (req, res) {

//     // var recipe;
//     // var ingredients;

//     Recipe.findAll({
//         order: [
//             ['score', 'DESC']
//         ]
//     }).then(function (recipe) {
//         //console.log(Recipe.dataValues);
       
//         //console.log('allData', result);
//         //recipe = result;

//         res.render('allData', {
//             recipes: recipe
//         });
//     });
// });


// app.post('/signup', function (req, res) {
//     var users = req.body;
//     users.create({
//         username: users.username,
//         userpassword: users.password

//     }).then(function (data) {
//         console.log('data', data);
//         res.redirect('/');
//     });
// });


// app.put('/allrecipes', function (req, res) {
//     Post.findById(req.params.id).exec(function (err, post) {
//       post.upVotes.push(req.user._id)
//       post.voteScore = post.voteTotal + 1
//       post.save();
//       res.status(200);
//     })
//   })
  
//  };