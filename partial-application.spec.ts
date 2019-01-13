import {highlightSearchTermFunctional, highlightSearchTermImperative} from "./partial-application";

describe('Partial Application', () =>{
  const input       = 'Fair is foul, and foul is fair: Hover through the fog and filthy air';
  const expected    = 'Fair is *fo*ul, and *fo*ul is fair: Hover through the *fo*g and filthy air';
  const searchTerm  = 'fo';

  describe('highlightSearchTermImperative', () => {
    it('should wrap all words that begin with searchTerm in astrix', () => {
      expect(highlightSearchTermImperative(input, searchTerm)).toBe(expected);
    });
  });

  describe('highlightSearchTermImperative', () => {
    it('should wrap all words that begin with searchTerm in astrix', () => {
      expect(highlightSearchTermFunctional(input, searchTerm)).toBe(expected);
    });
  });
});