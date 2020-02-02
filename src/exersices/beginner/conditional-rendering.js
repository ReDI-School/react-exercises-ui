import React from "react";

export const ex01 = {
  level: "beginner",
  topic: "Conditional Rendering",
  title: "Welcome users",
  youtubeId: "h2qYEEtagL8",
  exerciseFilename: "Welcome",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        We'd like to display a welcome message to our customers, according to
        the following criteria:
      </p>
      <ul>
        <li>
          If the <span className="highlight">lastName</span> is provided ->
          display Welcome Mr <span className="highlight">lastName</span>
        </li>
        <li>
          If not -> display Welcome <span className="highlight">firstName</span>
        </li>
      </ul>

      <pre>
        <br />
        {`<Welcome firstName="Valentino" lastName="Rossi" />`}
        <br />
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>Welcome Mr Rossi</div>`}
        <br />
        <br />
        <br />
        {`<Welcome firstName="Carl" />`}
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>Welcome Carl</div>`}
        <br />
      </pre>
    </div>
  )
};

export const ex02 = {
  level: "beginner",
  topic: "Conditional Rendering",
  title: "Creating a ticketing system",
  youtubeId: "VyVfhlTlvdw",
  exerciseFilename: "BuyTickets",
  description: (
    <div>
      <p>
        We'd like to introduce a new online system to allow users buying tickets
        for their favourite shows.
      </p>
      <p>
        The only exception is: they should be at least 18 years old to proceed!
      </p>

      <pre>
        <br />
        {`<BuyTickets user={{name: 'Anthony', age: 16}} />`}
        <br />
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>Sorry, try again once you turn 18</div>`}
        <br />
        <br />
        <br />
        {`<BuyTickets user={{name: 'Anthony', age: 21}} />`}
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>Enjoy the show!</div>`}
        <br />
      </pre>
    </div>
  )
};

export const ex03 = {
  level: "beginner",
  topic: "Conditional Rendering",
  title: "Evaluate challenge results",
  youtubeId: "hRSaL0UA2j0",
  exerciseFilename: "ChallengeResults",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        Please create a new component to determine how good the challenge
        results of a given user are.
      </p>

      <ul>
        <li>
          If the average score is {`>= 50`}, display:{" "}
          <span className="highlight">Well done!</span>
        </li>
        <li>
          If the average score is {`< 50`}, display:{" "}
          <span className="highlight">Keep training!</span>
        </li>
      </ul>

      <pre>
        <br />
        {`<ChallengeResults scores={[91, 71, 64, 79]} />`}
        <br />
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>Well done!</div>`}
        <br />
        <br />
        <br />
        {`<ChallengeResults scores={[34, 54, 34, 23]} />`}
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>Keep training!</div>`}
        <br />
      </pre>
    </div>
  )
};

export const ex04 = {
  level: "beginner",
  topic: "Conditional Rendering",
  title: "How good a film is?",
  youtubeId: "IxgszwH098c",
  exerciseFilename: "FilmScore",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        We'd like to evaluate how good a given film is depending on its average
        score on the internet:
      </p>

      <ul>
        <li>&lt;50: Poor</li>
        <li>&gt;=50 && &lt; 75: Nice</li>
        <li>&gt;=75: Excellent</li>
      </ul>

      <pre>
        {`<FilmScore title="The Fountain" score={90} />`}
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>Excellent</div>`}
        <br />
        <br />
        <br />
        {`<FilmScore title="Spaceballs" score={30} />`}
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>Poor</div>`}
        <br />
      </pre>
    </div>
  )
};
