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
        <span className="header_h1_and_a">
          <a href="https://edouard-dhalluin.fr/" id="back_to_v_card" ><img  className="header_logo" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="retour au site d édouard D'Halluin"/></a>
          <h1>The Ho Ho Ho liste</h1>
        </span>
        <span role="img" aria-label="">🎄</span>
      </header>
      <div className="container">
        <section>
          <p>
            En tant que Père Noël, vous n'avez pas le temps de choisir un cadeau pour chaque enfant? Faites appel à notre Ho! Ho! Ho! liste.
          </p>
          <p>
            Pour l'utilisation, rien de plus simple : renseignez le prénom de l'enfant, choisissez s'il a été sage ou non et laisser l'outil trouver le cadeau parfait.
          </p>
        </section>
        <AddTodo />

        {renderTodos()}
      </div>
    </div>
  );
}

export default App;