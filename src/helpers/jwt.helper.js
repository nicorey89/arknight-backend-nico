const jwt = require("jsonwebtoken");
const process = require("process");
const secret = process.env.JWT_SECRET || 'arknight-backend';

const generateToken = (user) => {

  try {
    const USER_DATA = {
        id: user.id,
        name: user.name,
        email: user.email,
    }
    const payload = {
        user: USER_DATA,
        exp: Date.now() + 600000,
    }

    const token = jwt.sign({payload}, secret);

    return token;
  } catch (error) {
    console.error("Error al generar el token:", error);
    // Manejar el error de acuerdo a tus necesidades
    throw new Error("Error al generar el token");
  }
};

module.exports = {
  generateToken,
};