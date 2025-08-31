import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add new todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  expect(todo).not.toHaveStyle("text-decoration: line-through");

  fireEvent.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText("Delete");
  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
