import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { Typography, Divider } from "antd";
import Heading from "./components/heading";
import Pragraph from "./components/pragraph";
const { Title } = Typography;
function App() {
  return (
    <div
      className="App"
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Heading />
      <Pragraph />
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
