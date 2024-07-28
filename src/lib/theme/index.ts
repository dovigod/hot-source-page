import { extendTheme } from '@chakra-ui/react'
import { colorsRelatives } from './tokens/colors'
import { fontRelatives } from './tokens/fonts';
import { breakpoints } from './tokens/breakpoints'
import { config } from './config';
import { sizes } from './tokens/sizes'
import { spacing } from './tokens/space';
import { radii } from './tokens/borderRadius';

const overrides = {
  ...fontRelatives,
  ...colorsRelatives,
  breakpoints,
  config,
  sizes,
  radii,
  ...spacing
};

export default extendTheme(overrides)