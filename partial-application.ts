
// The imperative approach
export const highlightSearchTermImperative = (input: string, searchTerm: string): string => {
  let result = '';

  getWords(input).forEach(word => {
    if(word.startsWith(searchTerm)) {
      result += `${wrapSearchTermInWordWithAstrix(searchTerm, word)} `;
      return;
    }
    result += `${word} `;
  });

  return result.trim();
};

// The functional approach - with partial application
export const highlightSearchTermFunctional = (input: string, searchTerm: string): string =>
  getWords(input).reduce(getHighlightReducer(searchTerm), '').trim();

const getHighlightReducer = (searchTerm: string) => (accumulator: string, word: string): string =>
  word.startsWith(searchTerm) ?
    `${accumulator}${wrapSearchTermInWordWithAstrix(searchTerm, word)} ` :
    `${accumulator}${word} `;

const wrapSearchTermInWordWithAstrix = (searchTerm:string, word: string): string =>
  `*${searchTerm}*${word.slice(searchTerm.length)}`;

const getWords = (str: string): string[] => str.split(/\s+/);
