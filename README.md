# Nitro Styleguide

This repo provides the tools to implement view components which make up the visual appearance of Nitro.

* Stylesheets for the app navigation and general appearance
* Self-contained React components for use in building views

The intent of this repo is to provide a base on which other UIs can be built such that they maintain visual consistency and the Nitro brand.

## Creating Components

Creation of new components requires a bit of forethought. Ask yourself these questions first:

1. Does the component already exist in `nitro_react` ?
    1. Yes - see [Converting Components](#converting)
    1. No - continue
1. Ensure you are familiar with these concepts:
    - using Flow.js (install tooling in your editor/IDE)
    - creating "dumb components" in React - your new component **will not** need to be concerned with XHR requests, servers, ect.
    - ESLint (install tooling in your editor/IDE)
    - CSSModules
    - Composing complex React components/organisms (so that you don't create them here!)
    - [Storybook]()

### Now You Can Begin 😉

Here are the steps to creating a new `Foo` component (in order):

1. Create a new directory under `/components` named `Foo`
1. Create `Foo.jsx` inside the directory with the contents:
    ```javascript
    /* @flow */

    import React from 'react'

    type Props = {}

    export default class Foo extends React.Component<Props> {
      static defaultProps = {}
      props: Props
      render() {
        return <span>{`I'm a Foo`}</span>
      }
    }

    ```
1. Create `styles.scss` inside the directory with the contents:
    ```scss
    .foo {}
    ```
1. Add the stylesheet as an import by adding this line:
    ```javascript
    import styles from './styles.scss'
    ```
1. Then make use of the import by adding `styles.foo` as the `className`:
    ```javascript
    render() {
      return <span className={styles.foo}>{`I'm a Foo`}</span>
    }
    ```
1. Add `Foo.jsx` to the component index in `components/index.js`
    ```javascript
    export Foo from '../Foo/Foo.jsx'
    ```

#### Create the Story

1. Within the same directory, create a `FooStory.jsx` with the contents:
    ```javascript
    import React from "react"
    import Text from "./Foo"

    import { text, select, boolean } from "@storybook/addon-knobs"

    export default function TextStory(stories) {
      stories.add("Foo",
        () => {
          let props = {}
          return (
            <Foo {...props}/>
          )
        }
      )
    }
    ```
1. Add the story to the appropriate story index. This will depend on the intent of your component. `Foo` is pretty simply 😁, hence we will add it to `/stories/basic.js` like so:
    ```javascript
    export FooStory from '../components/Foo/FooStory'
    ```
    This will add your `Foo` story to the categoy "Basic Components" in Storybook

#### Test Your Shiz (a.k.a. Running Storybook Locally)

From the current project directory, run:

1. ensure you are running proper node version (see `package.json` => `engines`)
1. `npm install`
1. `npm run storybook`
1. navigate to [localhost:9001](http://localhost:9001)





