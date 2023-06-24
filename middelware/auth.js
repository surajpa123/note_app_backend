const User = require("../models/userSchema")
// Middleware to check if user already exists
const checkUserExists = (req, res, next) => {
    const { username } = req.body;
  
    // Check if the user already exists in the database
    User.findOne({ username })
      .then((existingUser) => {
        if (existingUser) {
          // Redirect to the login route or handle it as per your application's needs
        return res.send('User Already exist');
        }
        // If user doesn't exist, proceed to the next middleware or route handler
        next();
      })
      .catch((error) => {
        console.error('Error checking user:', error);
        res.status(500).send('Error checking user');
      });
  };

module.exports = checkUserExists