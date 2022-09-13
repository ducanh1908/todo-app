import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListSelector } from "../../redux/selector";
export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState();
  const [priority, setPriority] = useState("Low");
  const todoList = useSelector(todoListSelector);
  console.log(todoList);

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        prioriry: priority,
        completed: false,
      })
    );
  };
  const handelInputChange = (e) => {
    setTodoName(e.target.value);
    console.log(e.target.value);
  };
  const handelPriorityChange = (values) => {
    setPriority(values);
    console.log(values);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList.map((todo) => (
          <Todo name={todo.name} prioriry={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handelInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handelPriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
