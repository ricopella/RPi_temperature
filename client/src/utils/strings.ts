/**
 * function that takes a UTC date and returns as a formatted string
 * format example: "Sunday, August 12, 2018, 4:51 PM"
 *
 * @param {(string | null)} value
 * @returns {string}
 */
export const formatDate = (value: string | null): string => {
  const options = {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  };
  return value && value.length
    ? new Date(value).toLocaleDateString('en-US', options)
    : '';
};

/**
 * function used to remove "\n" from a string
 *
 * @param {string} value
 * @returns {string}
 */
export const removeLineBreak = (value: string | null): string =>
  value && value.length ? value.replace(/(\r\n\t|\n|\r\t)/gm, '') : '';
