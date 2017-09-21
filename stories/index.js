import { keys } from 'lodash';

import { storiesOf } from '@storybook/react';

import * as basicComponents from "./basic";

import "../app/assets/stylesheets/nitro_sg/application.scss";

const addStories = function(stories) {
  let newStories = storiesOf(stories.title, module);
  keys(stories.components).forEach(function (key) {
    stories.components[key](newStories)
  })
};

addStories({
  title: 'Basic Components',
  components: basicComponents
})