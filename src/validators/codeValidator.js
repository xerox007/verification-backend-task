import Joi from '@hapi/joi';
import validate from '../utils/validate';

export const NUMBER_OF_DIGITS_ACCEPTED = 6;
export const RESTRICTED_LAST_DIGIT = 7;

// Validation schema
const schema = Joi.object({
  code: Joi.string().length(NUMBER_OF_DIGITS_ACCEPTED).required()
});

/**
 * Validate code.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function codeValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

export { codeValidator };
