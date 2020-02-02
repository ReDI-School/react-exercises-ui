import React from "react";
import { Panel, Tooltip, Whisper } from "rsuite";
import PropTypes from "prop-types";

const tooltipMessage = (
  <Tooltip>
    <span role="img" aria-label="good job">
      🏆
    </span>{" "}
    You are killing it!
  </Tooltip>
);

const PanelHeader = () => (
  <h3>
    Solution
    <Whisper placement="top" trigger="hover" speaker={tooltipMessage}>
      <span role="img" aria-label="gun">
        {" "}
        🔫
      </span>
    </Whisper>
  </h3>
);

const SolutionArea = ({ component }) => (
  <Panel header={<PanelHeader />} bordered>
    {component}
  </Panel>
);

SolutionArea.propTypes = {
  component: PropTypes.element.isRequired
};
export default SolutionArea;
