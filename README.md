# react-exercises-ui

React components used inside of the ReDi excercises.

## Component Development

To get started developing components first read [the storybook quickstart](https://storybook.js.org/basics/quick-start-guide/).

Essentially all you need is to create your component and link it together with the current stories in `stories/index.stories.js`.

## Automated Deployment

Deployment for the component library is an automated process requiring three separate tasks:

- Testing: Building, linting, and unit testing code
- Packaging: Publishing the npm package
- Website: Deploying storybook static assets to surge

## Publish

To publish draft a new release from the user interface of github. Right after gh actions will trigger a new publish. For the publish to be successful all the checks (tests, lints) have to pass.

## Tech Used

- Storybook
- React
- Styled components
