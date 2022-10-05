import React from 'react';
import { generateImage } from 'jsdom-screenshot';
import { render } from '@testing-library/react';
import ApplyTheme from '../../ApplyTheme';

import { DividerPageContent } from './Dividers';
import getTestConfig from '../../tests/testConfig';

describe('Divider Component', () => {
  it('has no visual regressions', async () => {
    render(
      <ApplyTheme>
        <DividerPageContent />
      </ApplyTheme>,
    );

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });

  it('has no visual mobile regressions', async () => {
    render(
      <ApplyTheme>
        <DividerPageContent />
      </ApplyTheme>,
    );

    const screenshot = await generateImage(getTestConfig({ mobile: true }));
    expect(screenshot).toMatchImageSnapshot();
  });
});
