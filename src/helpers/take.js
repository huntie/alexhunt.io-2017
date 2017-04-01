/**
 * Take a subset of items from an array.
 *
 * @api public
 *
 * @param {Array}  array The array
 * @param {Number} limit The number of items to limit to
 *
 * @return {String}
 */
module.exports = function (array, limit) {
    return array.slice(0, limit);
};
