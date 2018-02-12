/**
 * Shorten a string as an excerpt and add a trailing ellipsis.
 *
 * @api public
 *
 * @param {string} str    The string to format
 * @param {number} length The number of characters to limit to
 *
 * @return {string}
 */
module.exports = function (str, length) {
    return str.slice(0, length > 0 ? length : 100).replace(/\s\w+$/, '…');
};
