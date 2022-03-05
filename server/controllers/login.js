const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Member = require("../models/member");

exports.login = async (req, res, next) => {
  const member = await Member.find({ email: req.body.email }).exec();
  try {
    const notExist = member.length < 1;
    if (notExist) {
      return res.status(401).json({
        message: "Auth failed",
      });
    } else {
      const match = await bcrypt.compare(req.body.password, member[0].password);
      if (match) {
        const token = jwt.sign(
          {
            memberId: member[0]._id,
            email: member[0].email,
          },
          process.env.JWT_KEY,
          {
            expiresIn: 90,
          }
        );
        return res.status(200).json({
          message: "Auth successful",
          token: token,
          id: member[0]._id,
        });
      } else {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
