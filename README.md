# React_Review
Review React through watching Youtube videos and reading guides

## Video Progress:
[Link](youtube.com/watch?v=b9eMGE7QtTk&ab_channel=JavaScriptMastery) : 41:19/1:11:43

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
  - Updates in real time
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
  
## Starting React App:
1. Commands
  > `$ npx create-react-app ./` # This will create all necessarypackages to start working on a low-level react-app
  
  > `$ npm start` # Run React server 
2. Files
   - **package.json** - a 'requirement.txt' file that contains all installed modules
   - **package-lock.json**
   - 'src' folder - where all our code will go
     - *index.html* - the starting frontend
       - Inject into `<body id=root></body>`
     - *index.js* - the starting backend
     - *App.js* - Contain functional component that renders the react component
       - uses "className" attribute instead of "class"
3. React syntax:
   - Ternary = operations ? val_1:val_2
   - use '{}' inside of HTML to reference JS variables
   - React Fragment:
     - > `{operator ? (<><h1></h1> <h1></h1></>):(<> <h2></h2> <h2></h2> </>)}`
     - Being able to dynamically place multiple HTML/web components using boolean operations 
   - **React Components**:
     - a JS function return react elements (html format)
     - Can call React Components inside one another
   - **React Props**:
     - Allows us to put parameters into **React Component** functions. Passing data into components
     - Add int as props by using `<PersonComponent age={23}/>`
   - **React State**:
     - Represent piece of information about component's current situation 
       - Ex: Show, don't show
       - > `const [counter, setCounter] = useState(0);`
         - `counter` = the variable containing the value, `setCounter` = the set function for the variable, `0` = initial value
     - React Events:
       - used alongside **React state** where it is an action that is caused by user or a system generated event 
         - Ex: mouseClick, 
   - **React Hooks**:
     - `useState` = a static getter and setter type
       - React state can **ONLY** be changed using it's *setter* function
     - `useEffect` = A hook that runs a command/action/code when the page reloads/appear




