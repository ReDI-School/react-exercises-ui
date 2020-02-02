import React from "react";

export const ex01 = {
  level: "beginner",
  topic: "Render",
  title: "Get a welcome message",
  youtubeId: "lyDS7pZr5ZI",
  exerciseFilename: "Welcome",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>Simply create a function to return the following message:</p>
      <pre>Welcome to React</pre>
      <p>Please note React is case sensitive :)</p>
    </div>
  )
};

export const ex02 = {
  level: "beginner",
  topic: "Render",
  title: "Get a welcome message, in two paragraphs",
  youtubeId: "lyDS7pZr5ZI",
  exerciseFilename: "Welcome",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>Create a function to return the following message:</p>
      <pre>Welcome to React</pre>
      <p>
        Please split the message into two separated paragraphs (using the p
        tag):
      </p>
      <ul>
        <li>Welcome</li>
        <li>to React</li>
      </ul>
    </div>
  )
};

export const ex03 = {
  level: "beginner",
  topic: "Render",
  title: "Show player details",
  youtubeId: "KKwRbRt3HKE",
  exerciseFilename: "BasketballStar",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        We want to introduce a new component BasketballStar to display some
        details about some legendary basketball players.
      </p>
      <p>
        We'd like to add a className attribute to the first name and last name
        props, for styling purposes.
      </p>
      <p>
        Resource:{" "}
        <a href="https://reactjs.org/docs/faq-styling.html">
          Styling and CSS in React
        </a>
      </p>
    </div>
  )
};

export const ex04 = {
  level: "beginner",
  topic: "Render",
  title: "Mixing selectors",
  youtubeId: "-LIR6KlLb0M",
  exerciseFilename: "BookDetails",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        We're trying to define a new React component to display the details of
        our last order:
      </p>
      <ul>
        <li>Book Id</li>
        <li>Title</li>
        <li>Author</li>
      </ul>
      <p>
        A colleague started to work on it today, but he left early to play table
        tennis.
      </p>
      <p>Could you please complete it? Here are the requirements:</p>
      <ul>
        <li>
          An element (for example a div) should have the id <em>bookId</em> and
          contain the following text: <em>32156</em>
        </li>
        <li>
          An element (for example a div) should have the class <em>title</em>{" "}
          and contain the following text: <em>JavaScript : The Good Parts</em>
        </li>
        <li>
          A <em>author</em> element should contain the following text:{" "}
          <em>Douglas Crockford</em>
        </li>
      </ul>
    </div>
  )
};

export const ex05 = {
  level: "beginner",
  topic: "Render",
  title: "Dealing with nested selectors",
  youtubeId: "9nw_ewL7n9o",
  exerciseFilename: "PremierLeagueFixtures",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        We'd like to create a new component to display the match results on the
        Premier League.
      </p>

      <p>The structure of the component is:</p>

      <ul>
        <li>
          .fixtures
          <ul>
            <li>
              .fixture
              <ul>
                <li>.team1</li>
                <li>.team2</li>
                <li>.result</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Check the PremierLeagueFixtures.spec.js file to see what text needs to
        be put into each element.
      </p>
    </div>
  )
};
