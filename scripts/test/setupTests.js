import { configureToMatchImageSnapshot, toMatchImageSnapshot } from 'jest-image-snapshot';

import { setDefaultOptions } from 'jsdom-screenshot';

// Docker requires --no-sandbox to be able to run the tests
setDefaultOptions({
  launch: {
    args: ['--no-sandbox'],
    ignoreDefaultArgs: ['--hide-scrollbars'],
  },
  screenshot: { fullPage: true },
});

// Make sure jest has enough time to capture the screenshots
jest.setTimeout(15000);

// For visual regression testing
if (
  process.env.CI
  && (typeof process.env.CI !== 'string'
    || process.env.CI.toLowerCase() !== 'false')) {
  // only needed in CI to be able to export failed test result images
  const customToMatchImageSnapshot = configureToMatchImageSnapshot({
    customDiffDir: '/app/test_results',
  });
  expect.extend({ toMatchImageSnapshot: customToMatchImageSnapshot });
} else {
  expect.extend({ toMatchImageSnapshot });
}
