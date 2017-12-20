import highestPowerTwo from '.';

describe('#highestPowerTwo', () => {
  it('returns 0 for non-numeric values', () => {
    expect(highestPowerTwo('hello')).toBe(0);
  });

  it('returns 0 for any non-positive integer', () => {
    expect(highestPowerTwo(0)).toBe(0);
    expect(highestPowerTwo(-5)).toBe(0);
    expect(highestPowerTwo(-64)).toBe(0);
    expect(highestPowerTwo(-123121)).toBe(0);
  });

  it('correctly returns the next highest power of two', () => {
    expect(highestPowerTwo(2)).toBe(2);
    expect(highestPowerTwo(14)).toBe(8);
    expect(highestPowerTwo(19)).toBe(16);
    expect(highestPowerTwo(51)).toBe(32);
  });
});
