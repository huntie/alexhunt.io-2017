/**
 * Shorten a string as an excerpt and add a trailing ellipsis.
 *
 * @api public
 *
 * @param {String} str    The string to format
 * @param {Number} length The number of characters to limit to
 *
 * @return {String}
 */
module.exports = function (str, length) {
    return str.slice(0, length > 0 ? length : 100).replace(/\s\w+$/, '…');
};
