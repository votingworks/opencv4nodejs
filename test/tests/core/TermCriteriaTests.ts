import { expect } from 'chai';
import { assertPropsWithValue } from '../../utils/testUtils';
import { TestContext } from '../model';

export default function (args: TestContext) {
  const { cv } = args;

  describe('constructor', () => {
    it('has default constructor', () => {
      expect(() => new cv.TermCriteria()).to.not.throw();
    });

    it('can be constructed with args', () => {
      const type = cv.termCriteria.EPS;
      const maxCount = 100;
      const epsilon = 0.8;
      const termCriteria = new cv.TermCriteria(type, maxCount, epsilon);
      assertPropsWithValue(termCriteria, { type, maxCount, epsilon });
    });
  });
}
