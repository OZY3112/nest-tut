/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('validating customer');
    const { authorization } = req.headers;

    if (!authorization) return res.status(303).send({ error: 'no auth' });
    if (authorization === '123') next();
    else res.status(403).send({ error: 'no auth token' });
  }
}
