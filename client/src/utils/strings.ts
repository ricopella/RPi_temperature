export const formatDate = (value: string | null): string => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return value && value.length ? new Date(value).toLocaleDateString("en-US", options) : '';
};
