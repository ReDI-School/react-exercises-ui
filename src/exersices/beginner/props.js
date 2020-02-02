import React from "react";

export const ex01 = {
  level: "beginner",
  topic: "Props",
  title: "Welcome a given user",
  youtubeId: "Kfi_dSiYVGw",
  exerciseFilename: "Welcome",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        We want to create a Welcome component to say 'hello' to a given user
      </p>

      <pre>
        &lt;Welcome user='Peter' /&gt;
        <br />
        should become
        <br />
        &lt;div&gt;Welcome to React, Peter!&lt;/div&gt;
        <br />
        <br />
        &lt;Welcome user='Laura' /&gt;
        <br />
        should become
        <br />
        &lt;div&gt;Welcome to React, Laura!&lt;/div&gt;
      </pre>

      <p>
        Check the Welcome.spec.js file to see what text needs to
        be put into each element.
      </p>
    </div>
  )
};

export const ex02 = {
  level: "beginner",
  topic: "Props",
  title: "Display details of US presidents",
  youtubeId: "FQqBN0uVP1s",
  exerciseFilename: "President",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        We're creating a mobile app to display some basic information about
        former presidents of the US.
      </p>

      <p>Requirements by example:</p>
      <pre>
        &lt;President firstName="Bill" lastName="Clinton" /&gt;
        <br />
        <br />
        should become
        <br />
        <br />
        &lt;div&gt;
        <br />
        &nbsp;&nbsp;&lt;div class="firstName"&gt;First name: Bill&lt;/div&gt;
        <br />
        &nbsp;&nbsp;&lt;div class="lastName"&gt;Last name: Clinton&lt;/div&gt;
        <br />
        &lt;div&gt;
        <br />
      </pre>
      <pre>
        &lt;President firstName="Barack" lastName="Obama" /&gt;
        <br />
        <br />
        should become
        <br />
        <br />
        &lt;div&gt;
        <br />
        &nbsp;&nbsp;&lt;div class="firstName"&gt;First name: Barack&lt;/div&gt;
        <br />
        &nbsp;&nbsp;&lt;div class="lastName"&gt;Last name: Obama&lt;/div&gt;
        <br />
        &lt;div&gt;
        <br />
      </pre>
    </div>
  )
};

export const ex03 = {
  level: "beginner",
  topic: "Props",
  title: "Show player details",
  youtubeId: "9YTfNjYZb0Y",
  exerciseFilename: "Player",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        By popular demand, we'd like to introduce a new view into the platform
        to displaying the average score of a given user.
      </p>

      <p>Requirements by example:</p>
      <pre>
        const person = &#123; name: 'Andrea', score: 65 &#125;
        <br />
        &lt;Player person=&#123;person&#125; /&gt;
        <br />
        <br />
        should become
        <br />
        <br />
        &lt;div&gt;
        <br />
        &nbsp;&nbsp;&lt;p class=&quot;name&quot;&gt;Name: Andrea&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;p class=&quot;score&quot;&gt;Score: 65&lt;/p&gt;
        <br />
        &lt;/div&gt;
      </pre>
    </div>
  )
};

export const ex04 = {
  level: "beginner",
  topic: "Props",
  title: "Analyse scores",
  youtubeId: "pKQwMjkVwXc",
  exerciseFilename: "ScoreDetails",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        Please create a component to display basic details of a given list of
        scores:
      </p>
      <ul>
        <li>Number of received scores</li>
      </ul>
      <pre>
        const scores = [54, 65];
        <br />
        &lt;ScoreDetails scores=&#123;scores&#125; /&gt;
        <br />
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        &lt;div&gt;
        <br />
        &nbsp;&nbsp;&lt;p class=&quot;total&quot;&gt;2&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;p class=&quot;first&quot;&gt;54&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;p class=&quot;second&quot;&gt;65&lt;/p&gt;
        <br />
        &lt;/div&gt;
        <br />
        <br />
        <br />
        const scores = [71, 85, 91];
        <br />
        &lt;ScoreDetails scores=&#123;scores&#125; /&gt;
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        &lt;div&gt;
        <br />
        &nbsp;&nbsp;&lt;p class=&quot;total&quot;&gt;3&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;p class=&quot;first&quot;&gt;71&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;p class=&quot;second&quot;&gt;85&lt;/p&gt;
        <br />
        &lt;/div&gt;
        <br />
      </pre>
    </div>
  )
};

export const ex05 = {
  level: "beginner",
  topic: "Props",
  title: "Display the total score",
  youtubeId: "L6uFGZG14Ms",
  exerciseFilename: "TotalScore",
  description: (
    <div style={{ textAlign: "left" }}>
      <p>
        Please create a component to display the accumulated score of a given
        player.
      </p>
      <ul>
        <li>Number of received scores</li>
      </ul>

      <pre>
        <br />
        {`<TotalScore scores={[34, 35, 36]} />`}
        <br />
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>The total score is: 105</div>`}
        <br />
        <br />
        <br />
        {`<TotalScore scores={[65, 75, 86]} />`}
        <br />
        <br />
        ... becomes ...
        <br />
        <br />
        {`<div>The total score is: 226</div>`}
        <br />
      </pre>
    </div>
  )
};
