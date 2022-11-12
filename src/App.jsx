import ReactDOM from "react-dom";
import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";


export const App = () => {
  console.log("レンダリング");
  // State の定義
  const [num, setNum] = useState(0);
  const [prev, setPrev] = useState(0);

  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    setNum(num + 1);
    setPrev((prev) => prev + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <p>{prev}</p>
    </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));