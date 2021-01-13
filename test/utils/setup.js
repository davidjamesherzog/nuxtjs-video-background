// needed for mounting components
import { config } from '@vue/test-utils';

/**
 * By default, we want to test assuming we are rendering on the client
 * So we mock out the client-only component to render the default slot
 */
process.client = true;
config.stubs['client-only'] = {
  template: '<span client-only-component-rendered-on-client><slot /></span>'
};
