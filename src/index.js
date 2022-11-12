import ReactDOM from "react-dom";
import { App } from "./App";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./StyledJsx";
import { StyledComponents } from "./StyledComponents";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<CssModules />, document.getElementById("roots"));
ReactDOM.render(<StyledJsx />, document.getElementById("test"));
ReactDOM.render(<StyledComponents />, document.getElementById("test1"));