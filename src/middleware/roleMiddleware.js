const authorizeRoles = (...allowedRoles) => {
    return (req,res,next) =>{
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message: "You do not have permission to access this resource."});
        }
        next();
    };
};

module.exports = authorizeRoles;