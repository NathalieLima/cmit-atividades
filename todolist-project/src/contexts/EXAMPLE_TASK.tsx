import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

interface TaskContextProps {
  task: TaskProps;
  tasks: TaskProps[];
  selectTask: (task: TaskProps) => void;
  clearTask: () => void;
  createTask: (title: string) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
  task: { id: 0, title: "", done: false },
  tasks: [],
  selectTask: () => {},
  clearTask: () => {},
  createTask: () => {},
});

function TaskProvider({ children }: TaskProviderProps) {
  const [task, setTask] = useState<TaskProps>({} as TaskProps);
  const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);
  const [count, setCount] = useState<number>(0);

  async function storeTasks(tasks: TaskProps[]) {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (e) {
      Alert.alert("Opa!", "Não foi possível salvar as tarefas");
    }
  }

  async function loadTasks() {
    try {
      const tasks = await AsyncStorage.getItem("@tasks");
      if (tasks) {
        setTasks(JSON.parse(tasks));
      }
    } catch (e) {
      Alert.alert("Opa!", "Não foi possível carregar as tarefas");
    }
  }

  function createTask(title: string) {
    const newTask = {
      id: count,
      title,
      done: false,
    };
    setCount(count + 1);
    setTasks([...tasks, newTask]);
  }

  function selectTask(task: TaskProps) {
    setTask(task);
  }

  function clearTask() {
    setTask({} as TaskProps);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ task, selectTask, clearTask, createTask, tasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;