import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export function isValidId(req, _res, next) {
  const { id } = req.params;

  if (isValidObjectId(id) !== true) {
    return next(createHttpError.BadRequest('ID is not valid'));
  }

  next();
}
