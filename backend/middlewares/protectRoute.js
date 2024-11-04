
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const protectRoute = async (req, res, next) => {
    
    try{
        const token = req.cookies.jwt;

        if(!token) return res.status(401).json({ message: 'Unauthorized!, You need to be logged in' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.userId).select('-password');

        if (!user) return res.status(401).json({ error: 'Unauthorized! User not found' });

        req.user = user;

        next();
    }
    catch(err){
        res.status(500).json({ message: err.message });
        console.log('Error in protectRoute: ', err.message);
    }
    
}

export default protectRoute;


//-------GPT-3 Generated Code End-------
/*
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const protectRoute = async (req, res, next) => {
  let token;

  // Check if Authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user by ID, excluding the password
      const user = await User.findById(decoded.userId).select('-password');

      if (!user) {
        return res.status(401).json({ message: 'Unauthorized! User not found' });
      }

      // Attach user to request object
      req.user = user;

      // Proceed to the next middleware
      next();
    } catch (err) {
      // Handle token verification errors
      console.error('Error in protectRoute:', err.message);

      // Check if error is related to token verification
      if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Unauthorized! Invalid or expired token' });
      }

      // For other errors, return 500 Internal Server Error
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    // If no token is provided
    res.status(401).json({ message: 'Unauthorized! No token provided' });
  }
};

export default protectRoute;

*/