**Session 02 - Exercise G**

# Integrating External Components

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, you will start with a new React project called "react-02g-external-components". Use the following command to create the project:

```
npx degit alexclaes/vite-react-minimal react-02g-external-components
```

After the setup is complete, proceed with the following steps:

- Change into the directory that was created for this project:
    - `cd react-02g-external-components`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Install all necessary dependencies using `npm`:
    - `npm install`
- Start the local development server:
    - `npm run dev`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

## Task 1: Create and Use the `IconButton` Component

### Step 1: Create the `IconButton` Component

Create a new file `IconButton.jsx` in the `src/components` directory:

```
src/components/IconButton.jsx
```

Define an `IconButton` component that uses the `children` prop for the button label:

```jsx
export default function IconButton({ children }) {
  return (
    <button>
      {children}
    </button>
  );
}
```

### Step 2: Use the `IconButton` Component in the App

Update the `App` component:

```
src/App.jsx
```

Modify the `App` component to use the `IconButton` component and pass different labels for each instance:

```jsx
<IconButton>Home</IconButton>
<IconButton>Settings</IconButton>
<IconButton>Profile</IconButton>
```

### Step 3: Test and Debug

Ensure your development server is running and open the React app in your browser. Check that each `IconButton` displays its respective label. Verify that the buttons function as simple HTML buttons with labels.

## Task 2: Integrate Icons from `react-icons`

Now you add the [react-icons](https://react-icons.github.io/react-icons/) library to your project to display nice icons.

### Step 1: Install `react-icons`

Run the following command in your project directory to add the `react-icons` package via `npm`:

```bash
npm install react-icons
```

### Step 2: Add an Icon to the `IconButton` Component

After installing `react-icons`, modify the `IconButton.jsx` to include an icon from the library:

```jsx
import { MdArrowForward } from 'react-icons/md';

export default function IconButton({ children }) {
  return (
    <button>
      {children} <MdArrowForward />
    </button>
  );
}
```

### Step 3: Test and Debug

Refresh your browser to see the updated buttons with the arrow icon next to each label.
