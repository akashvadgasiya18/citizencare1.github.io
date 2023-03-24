const User = require('./models/UserSchema');
const jwt= require('jsonwebtoken');

const Authenticate = async (req,res,next) =>
{
    try
    {
        const token=req.cookies.jwtoken;
        console.log(token);
        const verifying=jwt.verify(token , process.env.SECRET_KEY);
        const root= await User.findOne({_id: verifying._id,"tokens.token":token});
        if(!root) { throw new Error("no found.")}
        req.token=token;
        req.root=root;
        req.userId= root._id;
        next();
        // res.json(root);
    }
    catch(err)
    {
        res.status(401).send('unauthorized');
        console.log(err);
    }
}
module.exports = Authenticate;