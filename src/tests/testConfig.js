import { screenSizes } from '../themes';

const defaults = {
  mobile: false,
};

const mobileConfig = {
  viewport: { width: screenSizes.sm, height: 1 },
};

const getTestConfig = (params = defaults) => {
  const { mobile } = params;
  return {
    ...(mobile && mobileConfig),
  };
};

export default getTestConfig;
