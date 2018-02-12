/**
 * Take a subset of items from an array.
 *
 * @api public
 *
 * @param {Array}  array The array
 * @param {number} limit The number of items to limit to
 *
 * @return {string}
 */
module.exports = function (array, limit) {
    return array.slice(0, limit);
};
