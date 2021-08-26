const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = require("../Models/Signup.js");
const Log = require("../Models/Login")
const secret = 'test';

const signup = async (req, res) => {
const {name, email, city,password } = req.body;
try {
     const oldUser = await register.findOne({ email });
     if (oldUser) {
          return res.status(400).json({ message: "User already exists" });
        }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await register.create({name, email,city ,password: hashedPassword  });
    res.status(201).json({result});
    }catch (error) {
     res.status(500).json({ message: "Something went wrong" });
}
};

const signin = async (req, res) => {
    
    const { email, password } = req.body;
    const date=new Date()
    const time=new Date().toTimeString()
    try {
        const oldUser = await register.findOne({ email });
  
        if (!oldUser) {
            return res.status(404).json({ message: "User doesn't exist" });
        }
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) {
          return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
      const log=new Log({email,date,time})
      await log.save()
      res.status(200).json({ result: oldUser, token });
    }catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
module.exports={signup,signin}