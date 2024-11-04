/*

import jwt from 'jsonwebtoken'


const generateTokenAndSetCookie = (userId, res) => {
  
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });

    res.cookie("jwt", token,{
        httpOnly: true, // more secure
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        sameSite: "strict" // CSRF protection
    });
    return token;
};

export default generateTokenAndSetCookie;

*/

//----GPT-3


import jwt from 'jsonwebtoken'


const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '7d', // Set token expiration time as needed
    });
  
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 7 * 24 * 60 * 60 * 1000, // Set cookie to expire in 7 days
      sameSite: 'Lax', // Adjust sameSite attribute as needed
    });
    return token;
  };

export default generateTokenAndSetCookie;