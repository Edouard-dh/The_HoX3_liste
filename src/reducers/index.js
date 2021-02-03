import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actions/types";

const initialState = {
    todos: []
};

// Le Reducer prend en paramètre un état du state à un instant T et une action à traiter
export default function rootReducer(state = initialState, action) {
    let todos = [...state.todos];
    let position;
    
    switch (action.type) {
        case ADD_TODO:
            // Ajout d'une tache dans le state global
            return {
                todos: [...state.todos, action.payload]
            };

        case DELETE_TODO:
            // Suppression d'une tâche dans le state global
            if (action.payload.complete) {
                position = todos.indexOf(action.payload);
                todos.splice(position, 1);
            } else {
                alert("Vous ne pouvez pas supprimer le cadeaux sans l'avoir offert");
            }

            return { todos };

        case COMPLETE_TODO:
            // Compléter une tâche
            position = todos.indexOf(action.payload);
            let todo = { ...todos[position] };
            todo.complete = !todo.complete;
            todos[position] = todo;
            
            return { todos };

        default:
            return state;
    }
}