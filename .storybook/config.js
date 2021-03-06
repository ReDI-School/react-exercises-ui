import React from "react";
import { addDecorator, configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";
import { withGlobalStyles } from "./customDecorators";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);
addDecorator(withGlobalStyles);

addParameters({
  options: {
    showPanel: false,
    name: "simple-components",
    theme: create({
      base: "light",
      brandTitle: "simple-components",
      brandUrl: "https://www.google.com/"
    })
  }
});

function loadStories() {
  // automatically import all story js files that end with *.stories.js
  const req = require.context("../stories", true, /\.story\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
