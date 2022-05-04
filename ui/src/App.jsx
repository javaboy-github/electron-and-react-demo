import ReactDOM from "react-dom";
import {useState} from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  const files = window.list_item(".");

  return (
  <>
    <button title="Increment the counter" onClick={incrementCounter}>counter: {counter}</button><br />
    There is list of current file below
    <ul>
      {files.map(e => <li key={e}>{e}</li>)}
    </ul>
  </>
  );
}

ReactDOM.render(<App />, document.body);
