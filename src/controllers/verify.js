import HttpStatus from 'http-status-codes';

import * as verifyService from '../services/verifyService';

/**
 * Verify the code
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function verify(req, res, next) {
  try {
    const input = req.body;
    const result = verifyService.verify(input.code);

    res.status(HttpStatus.OK).json(result);
  } catch (error) {
    next(error);
  }
}
