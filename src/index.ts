import { Choice, JsonSchemaProps, JsonSchemaViewer, useChoices, Validations } from './components';
import { createHydrate, createRender } from './standalone-codebase';

export { visibleChildren } from './tree';
export * from './types';
export { Choice, JsonSchemaProps, JsonSchemaViewer, useChoices, Validations };
export default {
  render: createRender<JsonSchemaProps>(JsonSchemaViewer),
  hydrate: createHydrate<JsonSchemaProps>(JsonSchemaViewer),
};
