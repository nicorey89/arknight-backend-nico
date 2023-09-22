const {pool} = require("../db.js");

const getUserByEmail = async (email) => {
    try {
        const [result] = await pool.query(`SELECT * FROM users WHERE email="${email}"`)
        return result;

    } catch (error) {
      console.error("Error while fetching user:", error);
      throw new Error("Error fetching user");
    }
  };
  module.exports = {getUserByEmail}