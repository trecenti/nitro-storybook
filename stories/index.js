import { keys } from 'lodash';

import { storiesOf } from '@storybook/react';

import * as basicComponents from "./basic";
import * as formComponents from "./form";

const addStories = function(stories) {
  let newStories = storiesOf(stories.title, module);
  keys(stories.components).forEach(function (key) {
    stories.components[key](newStories)
  })
};

addStories({
  title: 'Form Components',
  components: formComponents
})

addStories({
  title: 'Basic Components',
  components: basicComponents
})
