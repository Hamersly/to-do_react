import React from "react";
import { TaskWrapper, TaskText, TaaskBlock, RemoveButton } from "./Task.styles";

const Task = ({ task, removeTodo, todoCompleted }) => {
	return (
		<TaaskBlock>
			<p>{task.date}</p>
			<TaskWrapper>
				{task.isCompleted ? (
					<TaskText Completed={"text-decoration: line-through;"}>
						{task.text}
					</TaskText>
				) : (
					<TaskText>{task.text}</TaskText>
				)}
				<input
					type="checkbox"
					checked={task.isCompleted}
					onChange={() => todoCompleted(task.id)}
				/>
			</TaskWrapper>
			<RemoveButton onClick={() => removeTodo(task.id)}>
				Удалить задание
			</RemoveButton>
		</TaaskBlock>
	);
};

export default Task;
