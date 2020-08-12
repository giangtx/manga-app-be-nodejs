import jwt from 'jsonwebtoken'
import jwtConfig from '../config/jwt.config';

export const generateToken = (user) => {
    const data = {
        id: user.id,
        username: user.username,
        role: user.roleId,
        email: user.email
    }
    return jwt.sign({ data: data }, jwtConfig.secretKey, { expiresIn: 168*60*60 })
}

export const verifyToken = (roles) => (request, response, next) => {
    if(typeof request.headers.authorization !== "undefined") {
        let token = request.headers.authorization.split(" ")[1];
        jwt.verify(token, jwtConfig.secretKey, (err, user) => {
            if (err) {  
                return response.status(401).json({
                    status: 401,
                    message: "Incorrect token" 
                });
                // throw new Error("Incorrect token");
            }
            if(roles && !roles.includes(user.data.role)){
                return response.status(403).json({
                    status: 403,
                    message: "access denied" 
                });
            }
            return next();
        });
    } else {
        return response.status(401).json({ 
            status: 401,
            message: "Missing token" 
        });
        // throw new Error("Missing token");
    }
}