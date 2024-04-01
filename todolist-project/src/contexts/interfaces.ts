export interface TaskProps {
    id: number,
    title: string,
    iconName: string,
    amountXP: number,
    done: boolean,
}

export interface TaskListProps {
  title: string,
  iconName: string,
  tasksAmount: number,
  tasks: TaskProps[],
}

export interface UserDatasProps
{
    userName: string,
    userXP: number,
    tasksToday: number,
    tasklist: TaskListProps | undefined,
    tasklists: TaskListProps[] | undefined,
}