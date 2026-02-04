# Lotto Number Generator Site Blueprint

## Overview

This document outlines the plan to create a visually appealing and interactive lottery number generator website. The site will use modern web technologies, including Web Components, to provide a clean and modular structure.

## Project Outline

### Style and Design

*   **Theme:** A modern, dark theme will be used for a premium feel.
*   **Layout:** A centered, clean layout will focus the user's attention on the number generator.
*   **Typography:** Expressive fonts will be used to create a clear visual hierarchy.
*   **Color Palette:** A vibrant color palette will be used for the generated numbers and interactive elements to create an energetic look.
*   **Interactivity:** The "Generate" button will have a "glow" effect on hover to provide visual feedback.
*   **Texture:** A subtle noise texture will be applied to the background to add a tactile feel.

### Features

*   **Number Generation:** The site will generate 6 unique random numbers between 1 and 45.
*   **Web Component:** The entire lottery number generator will be encapsulated within a `<lotto-generator>` custom Web Component.
*   **Shadow DOM:** The component's styles and structure will be isolated using the Shadow DOM to prevent conflicts with global styles.
*   **Responsive Design:** The site will be responsive and work well on both desktop and mobile devices.

## Current Plan

1.  **`index.html`:**
    *   Set the document title to "Lotto Number Generator".
    *   Include the main JavaScript file.
    *   Add the `<lotto-generator>` custom element to the body.

2.  **`main.js`:**
    *   Create a `LottoGenerator` class that extends `HTMLElement`.
    *   Use a `<template>` to define the component's HTML structure.
    *   Encapsulate the component's HTML and CSS using the Shadow DOM.
    *   Implement the `generateNumbers` function to get 6 unique random numbers.
    *   Add an event listener to the "Generate" button to trigger the number generation and display.
    *   Define the custom element using `customElements.define('lotto-generator', LottoGenerator)`.

3.  **`style.css`:**
    *   Define global styles for the `body`, including the dark theme background and noise texture.
