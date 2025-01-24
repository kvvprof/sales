/* eslint-disable no-restricted-imports */
import { cn } from './cn';
describe('cn', () => {
  it('should merge styles with condition', () => {
    const isActive = true;
    const classnames1 = 'p-2 m-3 bg-red-500';
    const classnames2 = 'p-3';
    const expectedValue = 'm-3 bg-red-500 p-3';
    const result = cn(classnames1, isActive && classnames2);
    expect(result).toEqual(expectedValue);
  });
});
