import React from "react";
import { storiesOf } from "@storybook/react";
import {
  ExerciseDescription,
  render,
  props,
  conditionalRendering,
  inputs,
  loops
} from "../src/index";

Object.values(render).forEach(exercise => {
  const stories = storiesOf(`exercises/beginner/${exercise.topic}`, module);
  return stories.add(exercise.title, () => (
    <ExerciseDescription {...exercise} />
  ));
});

Object.values(props).forEach(exercise => {
  const stories = storiesOf(`exercises/beginner/${exercise.topic}`, module);
  return stories.add(exercise.title, () => (
    <ExerciseDescription {...exercise} />
  ));
});

Object.values(conditionalRendering).forEach(exercise => {
  const stories = storiesOf(`exercises/beginner/${exercise.topic}`, module);
  return stories.add(exercise.title, () => (
    <ExerciseDescription {...exercise} />
  ));
});

Object.values(loops).forEach(exercise => {
  const stories = storiesOf(`exercises/beginner/${exercise.topic}`, module);
  return stories.add(exercise.title, () => (
    <ExerciseDescription {...exercise} />
  ));
});

Object.values(inputs).forEach(exercise => {
  const stories = storiesOf(`exercises/beginner/${exercise.topic}`, module);
  return stories.add(exercise.title, () => (
    <ExerciseDescription {...exercise} />
  ));
});
