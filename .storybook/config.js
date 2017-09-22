import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// This addon is broken AF
import { withInfo, setDefaults } from '@storybook/addon-info'

setDefaults({
  header: false,
  inline: false,
  source: true,
})

addDecorator((story, context) => withInfo('Common Info')(story)(context))
addDecorator(withKnobs)

function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module)