/**
 * Iterates over an objects keys and returns a concatenated string of keys that have values *that are truthy
 *
 * @export                 - classNames
 * @param {object} classes - object containing keys that map to class names and values
 * @returns                - string
 */
export default (classes: {}): string => {
  const keys = Object.keys(classes);
  const classNames: string[] = [];

  if (keys.length < 1) {
    return '';
  }

  keys.forEach(key => classes[key] && classNames.push(key));

  return classNames.join(' ');
};
