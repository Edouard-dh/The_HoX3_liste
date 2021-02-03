import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "./types";

// Création d'une fonction pour appeler l'action ADD_TODO et retourner un objet qui sera par la suite envoyé au Reducer
export const addTodo = (text,gift) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Date.now(), 
            text,
            gift,
            complete: false,
           
        }
    };
};

export const deleteTodo = (item) => {
    return {
        type: DELETE_TODO,
        payload: item
    };
}

export const completeTodo = (item) => {
    return {
        type: COMPLETE_TODO,
        payload: item
    };
}