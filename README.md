# React_Review
Review React through watching Youtube videos and reading guides

## Video Progress:
[Link](youtube.com/watch?v=b9eMGE7QtTk&ab_channel=JavaScriptMastery) : 13:26/1:11:43

# Relearn React.js
- Benefits:
  - large library
  - Efficient 
  - Easy to understand
  - Popular
  - React Updates View on a DOM model
- Real-life example:
  - FilmPire

- Notes:
  - Virtual DOM
    - = a Javascript object, light-weight representation of DOM
    - Updating Virtual DOM = faster than real DOM
    - Only update the section of a page that needs to update, not entire page
    - React compares previous View/html web component with the current and update real DOM to keep in Sync with Virtual DOM
    - Why use Virtual DOM?
      - Faster than regular DOM
      - We don't have to worry about Javascript DOM api
  - Components
    - Webpages are divided into components
    - Allow splitting of UI into independent usable parts
      - Ex: Sidebar, search bar, movie components
    - Two type of components:
      - Functional components: (Used and popular)
        - Create a JS function and return an HTML code
          - > `import React from 'react'`
          - > `const Example = () => {`
          - > ` return <div> Hello </div> }`
      - Class-based componenets(history): Not being used
        - Make Javascript class extends using React-Component library
        - Render() { describe what UI displays}
  - React environment
    - using 'Creat React App' command
      - require node (JS runtime)
    - install webpack using babel


