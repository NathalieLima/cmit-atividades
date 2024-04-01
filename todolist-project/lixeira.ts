type TTask = {
    key: string,
    done: boolean,
    iconName: string,
    title: string,
    amountXP: number,
}

const TASKS: TTask[] = [
  {
    key: '1',
    done: true,
    iconName: 'users',
    title: 'Atualizar app',
    amountXP: 3,
  },
  {
    key: '2',
    done: true,
    iconName: 'facebook',
    title: 'Atualizar app',
    amountXP: 3,
  },
  {
    key: '3',
    done: false,
    iconName: 'users',
    title: 'Arrumar quarto',
    amountXP: 4,
  }
]