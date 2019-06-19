import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Navigation from './root.component.js';

function domElementGetter() {
  return document.getElementById("navigation")
}


export const navigation = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Navigation,
  domElementGetter,
})