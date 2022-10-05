import React from 'react';
import { generateImage } from 'jsdom-screenshot';
import { render } from '@testing-library/react';
import ApplyTheme from '../../ApplyTheme';
import { NoChildrenHeader, HashHeader } from './BreadcrumbHeader';
import TextHeader from './TextHeader';
import getTestConfig from '../../tests/testConfig';

const testData = {
  title: 'test title',
  subtitle: 'test subtitle',
  id: 123,
  label: {
    label: 'test label',
  },
  dashboardRoute: '/not/a/real/path',
};

describe('Breadcrumb with No Children Page Header Component', () => {
  it('has no visual regressions', async () => {
    render(
      <ApplyTheme>
        <NoChildrenHeader {...testData} />
      </ApplyTheme>,
    );

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });

  it('has no visual mobile regressions', async () => {
    render(
      <ApplyTheme>
        <NoChildrenHeader {...testData} />
      </ApplyTheme>,
    );

    const screenshot = await generateImage(getTestConfig({ mobile: true }));
    expect(screenshot).toMatchImageSnapshot();
  });
});

describe('Breadcrumb with Children Page Header Component', () => {
  it('has no visual regressions', async () => {
    render(
      <ApplyTheme>
        <HashHeader {...testData} />
      </ApplyTheme>,
    );

    const screenshot = await generateImage(getTestConfig());
    expect(screenshot).toMatchImageSnapshot();
  });

  it('has no visual mobile regressions', async () => {
    render(
      <ApplyTheme>
        <HashHeader {...testData} />
      </ApplyTheme>,
    );

    const screenshot = await generateImage(getTestConfig({ mobile: true }));
    expect(screenshot).toMatchImageSnapshot();
  });
});

describe('Text Page Header Component', () => {
  it('has no visual regressions', async () => {
    render(
      <ApplyTheme>
        <TextHeader {...testData} />
      </ApplyTheme>,
    );

    const screenshot = await generateImage(getTestConfig());
    expect(screenshot).toMatchImageSnapshot();
  });

  it('has no visual mobile regressions', async () => {
    render(
      <ApplyTheme>
        <TextHeader {...testData} />
      </ApplyTheme>,
    );

    const screenshot = await generateImage(getTestConfig({ mobile: true }));
    expect(screenshot).toMatchImageSnapshot();
  });
});
