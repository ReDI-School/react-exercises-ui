import React from "react";
import { storiesOf } from "@storybook/react";
import { SolutionArea } from "../src/index";

storiesOf("components/SolutionArea", module).add("basic", () => (
  <SolutionArea component={<div>Solution will appear here</div>} />
));
