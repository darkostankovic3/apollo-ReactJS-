import React from 'react';

// helpers
import memoize from 'mem';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

// getText is a memoized function that generates random paragraphs
// of lorem ipsum.
function getText() {
  return lorem.generateParagraphs(1);
}

// getTextHTML is a memoized function that generates random paragraphs
// (1 - 2) of lorem ipsum in a preformatted html block
function getTextHTML() {
  // randomly generate either one or two paragraphs to make tabs look different
  // https://stackoverflow.com/questions/36756331/js-generate-random-boolean
  const twoParagraphs = !!(Math.random() >= 0.5);

  return (
    <>
      {getText()}
      {twoParagraphs && (
        <>
          <br />
          <br />
          {getText()}
        </>
      )}
    </>
  );
}

const RDM = {
  defaultBarData: (numGen = 10) => ([
    {
      data: Array.from({ length: numGen }, () => Math.floor(Math.random() * 100)),
    },
  ]),
  defaultBarData1: () => ([
    {
      data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)),
    },
  ]),
  defaultPlusMinsData: () => ([
    {
      data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 201) - 100),
    },
  ]),
  zeroData: () => ([
    {
      data: [0, 0, 0],
    },
  ]),
  noData: () => [],
};

const memoizedGetText = memoize(getText);
const memoizedGetTextHTML = memoize(getTextHTML);

export { memoizedGetTextHTML as getTextHTML, memoizedGetText as getText, RDM };
