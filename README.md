# React Progress Bar

A simple React component that displays a progress bar to visually indicate task progress.

## Features
- Displays progress from 0% to 100%
- Smoothly updates the progress bar width
- Easy to customize styles

## Installation

Clone the repo or copy the component into your React project.

```bash
npm install
npm start
````

## Usage

Import and use the `<ProgressBar />` component, passing a `progress` prop (number from 0 to 100):

```jsx
import ProgressBar from './ProgressBar';

function App() {
  const [progress, setProgress] = React.useState(50);

  return <ProgressBar progress={progress} />;
}
```

## Props

| Prop     | Type   | Description                 |
| -------- | ------ | --------------------------- |
| progress | number | Progress percentage (0–100) |

## Example

```jsx
<ProgressBar progress={75} />
```

## Credits

This project is inspired by and based on the progress bar tutorial from Codedex.

## License

MIT © Pxdarkshadow

