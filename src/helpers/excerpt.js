/**
 * Shorten a string as an excerpt and add a trailing ellipsis.
 *
 * @api public
 *
 * @param {string} text                      The string to format
 * @param {Object} options                   The helper option set
 * @param {number} [options.hash.length=100] The character length to limit to
 *
 * @return {string}
 */
module.exports = function (text, { hash: { length = 100 }}) {
    return text.length > length
        ? text.slice(0, length).replace(/\s\w+$/, '…')
        : text;
};
