import ReactDOM from "react-dom";
import { App } from "./App";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./StyledJsx";
import { StyledComponents } from "./StyledComponents";
import { Emotion } from "./Emotion";
import { TailwindCss } from "./TailwindCss";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<CssModules />, document.getElementById("roots"));
ReactDOM.render(<StyledJsx />, document.getElementById("test"));
ReactDOM.render(<StyledComponents />, document.getElementById("test1"));
ReactDOM.render(<Emotion />, document.getElementById("test2"));
ReactDOM.render(<TailwindCss />, document.getElementById("test3"));