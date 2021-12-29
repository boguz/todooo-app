import store from '../store/store.js';
import { ListInterface } from '../types/interfaces.js';
import { firestoreUpdateUserLists } from './firestoreUpdateUserLists.js';

export function firestoreToggleTodo(todoId: string | null) {
  // @ts-ignore
  const userId: string = store.getState().user.id.toString();
  const userLists = [...store.getState().lists.lists];
  const newUserLists = userLists.map((userList: ListInterface) => ({
    ...userList,
  }));

  newUserLists.forEach(list => {
    const listNewTodos = list.todos!.map(todo => {
      const newTodo = { ...todo };
      if (todo.id === todoId) newTodo.checked = !newTodo.checked;
      return newTodo;
    });

    list.todos = listNewTodos;
  });

  firestoreUpdateUserLists(userId, newUserLists);
}
