import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  SelectField,
  TextField,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const statusList = ["New", "Open", "On Hold", "Resolved", "Close"];
const priorityList = ["Trivial", "Minor", "Major", "Critical", "Blocker"];

export function EditTodoModal({
  userId,
  preTodo,
  updateTodo,
  handleEditModal,
}) {
  const [todo, setTodo] = useState({ ...preTodo, user: userId });

  return (
    <div className="overlay">
      <div className="content">
        <View className="header">
          <Heading level={2}>Edit Todo</Heading>
        </View>
        <View margin="1rem">
          <Flex direction="column">
            <TextField
              placeholder="Input todo title"
              label="Title"
              value={todo.title}
              onChange={(i) => {
                setTodo({ ...todo, title: i.target.value });
              }}
            />
            <TextAreaField
              label="Discription"
              placeholder="Input todo discription"
              value={todo.description}
              onChange={(i) => {
                setTodo({ ...todo, description: i.target.value });
              }}
            />
            <SelectField
              label="Status"
              value={todo.status}
              onChange={(i) => {
                setTodo({ ...todo, status: i.target.value });
              }}
            >
              {statusList.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>
            <SelectField
              label="Priority"
              value={todo.priority}
              onChange={(i) => {
                setTodo({ ...todo, priority: i.target.value });
              }}
            >
              {priorityList.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              margin="1rem 0"
            >
              <DatePicker
                label="Start Date"
                value={dayjs(todo.start)}
                onChange={(i) => {
                  setTodo({ ...todo, start: dayjs(i).format("YYYY-MM-DD") });
                }}
              />
              <span>-</span>
              <DatePicker
                label="End Date"
                value={dayjs(todo.end)}
                onChange={(i) => {
                  setTodo({ ...todo, end: dayjs(i).format("YYYY-MM-DD") });
                }}
              />
            </Flex>
          </Flex>
          <Flex
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            margin="1rem 0"
          >
            <Button onClick={handleEditModal}>Cansel</Button>
            <Button
              onClick={() => {
                updateTodo(todo);
                handleEditModal();
              }}
            >
              Edit
            </Button>
          </Flex>
        </View>
      </div>
    </div>
  );
}
