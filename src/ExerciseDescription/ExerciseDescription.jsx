import React from "react";
import { Panel } from "rsuite";
import PropTypes from "prop-types";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

function ExerciseDescription({
  level,
  topic,
  title,
  description,
  youtubeId,
  exerciseFilename
}) {
  return (
    <Row>
      <Col>
        <Panel
          header={`Kodiri / ${level} / ${topic} / ${title}`}
          collapsible
          bordered
        >
          <h4>{title}</h4>
          {description}
          <br />

          {youtubeId && youtubeId.length && (
            <>
              <h4 style={{ marginBottom: 8 }}>Video</h4>
              <iframe
                title="youtubeVideo"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                allow="autoplay; encrypted-media"
              />
            </>
          )}

          <h4>Instructions</h4>
          <p>
            Edit <strong>{exerciseFilename}.js</strong> to complete the
            exercise.
          </p>
          <p>Switch to the "Tests" tab to check your results.</p>
          <p>
            If you need help, ask another student or a teacher (in class or in
            Slack).
          </p>
          <p>
            The tests are defined in <strong>{exerciseFilename}.spec.js</strong>
            . You do <strong>not need</strong> to understand in detail how unit
            tests work, but feel free to look in the file if you're curious.
          </p>
        </Panel>
      </Col>
    </Row>
  );
}

ExerciseDescription.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  exerciseFilename: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  youtubeId: PropTypes.string.isRequired
};

export default ExerciseDescription;
