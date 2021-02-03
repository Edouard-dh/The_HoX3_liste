import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from './components/Todo';
import AddTodo from './components/AddTodo';
import { deleteTodo, completeTodo } from "./actions";

import './App.css';

const App = () => {

  // useSelector pour récupérer des éléments du state global (équivalent de notre mapStateToProps)
  const todos = useSelector(state => state.todos);

  // useDispatch pour pouvoir envoyer le résultat d'une action à notre reducer
  const dispatch = useDispatch();

  const renderTodos = () => {
    const listTodos = todos.map(item => {
      return (
        <Todo
          key={item.id}
          item={item}
          checkboxAction={() => dispatch(completeTodo(item))}
          buttonAction={() => dispatch(deleteTodo(item))}
        />
      );
    });

    return (
      <div className="todos">
        <h2>Mes Cadeaux à offrir</h2>
        {listTodos}
      </div >
    );

  }

  return (
    <div className="App">
      <header>
        <span role="img" aria-label="">🎅</span>
        <h1>The Ho Ho Ho liste</h1>
        <span role="img" aria-label="">🎄</span>
      </header>
      <div className="container">
        <AddTodo />

        {renderTodos()}
      </div>
    </div>
  );
}

export default App;