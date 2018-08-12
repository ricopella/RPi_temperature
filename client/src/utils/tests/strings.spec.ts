import { formatDate } from '../strings';

describe('formatDate - Strings Utils', () => {
  it('should return empty string', () => {
    expect(formatDate('')).toEqual('');
  });

  it('should return empty string', () => {
    expect(formatDate(null)).toEqual('');
  });
  it('should return correct date', () => {
    expect(formatDate('2018-08-12T07:00:00.000Z')).toEqual('Sunday, August 12, 2018, 12:00 AM')
  });

  it('should not equal date', () => {
    expect(formatDate('2018-08-12T07:00:00.000Z')).not.toEqual('Sunday, August 11, 2018, 12:00 AM');
  });
});
