import React from 'react';
import { generateImage } from 'jsdom-screenshot';
import { render } from '@testing-library/react';
import ApplyTheme from '../../ApplyTheme';
import { screenSizes } from '../../themes';

import IconsPage from './Icons';

describe('Icons Page', () => {
  it('has no visual regressions', async () => {
    render(
      <ApplyTheme>
        <IconsPage />
      </ApplyTheme>,
    );

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });

  it('has no visual mobile regressions', async () => {
    render(
      <ApplyTheme>
        <IconsPage />
      </ApplyTheme>,
    );

    const screenshot = await generateImage({
      viewport: { width: screenSizes.sm, height: 1 },
    });
    expect(screenshot).toMatchImageSnapshot();
  });
});
