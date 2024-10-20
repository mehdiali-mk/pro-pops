const Joi = require("joi");

module.exports.joiPropSchema = Joi.object({
  prop: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().allow("", null),
    price: Joi.number().min(0).required(),
    country: Joi.string().required(),
    location: Joi.string().required(),
  }).required(),
});

module.exports.joiReviewSchema = Joi.object({
  review: Joi.object({
    title: Joi.string().required(),
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
