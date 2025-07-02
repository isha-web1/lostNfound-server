import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import type ms from 'ms';
import AppError from '../errors/AppError';
import { USER_ROLE, USER_STATUS } from '../modules/User/user.constant';

export const createToken = (
  jwtPayload: {
    _id?: string;
    name: string;
    email: string;
    mobileNumber?: string;
    role: keyof typeof USER_ROLE;
    status: keyof typeof USER_STATUS;
  },
  secret: Secret,
  expiresIn: number | ms.StringValue | undefined
) => {
  // TypeScript will enforce the correct expiresIn type here
  const options: SignOptions = { expiresIn };
  return jwt.sign(jwtPayload, secret, options);
};

export const verifyToken = (
  token: string,
  secret: Secret
): JwtPayload => {
  try {
    const decoded = jwt.verify(token, secret);
    if (typeof decoded === 'string') {
      throw new AppError(401, 'Invalid token payload!');
    }
    return decoded as JwtPayload;
  } catch (error: any) {
    throw new AppError(401, 'You are not authorized!');
  }
};