import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "./Button";
import { addTodo } from "../actions";
import databad from "./databad";
import datanice from "./datanice";


const AddTodo = () => {

    // Initialisation du state local
    const [text, setText] = useState("");
    const [nice, setNice] = useState(true);


    // Initilisation du useDispatch pour pouvoir envoyer le résultat d'une action à notre reducer
    const dispatch = useDispatch();

    const addTodoAction = () => {
        // Faire en sorte que le champ de saisie soit réinitialisé/vidé après l'ajout de la tâche

        let gift;
        if (nice) {
            gift = datanice[Math.floor(Math.random() * datanice.length)]
        }
        else {
            gift = databad[Math.floor(Math.random() * databad.length)]

        }
        dispatch(addTodo(text, gift));
        setText("");
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="todo-input-text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="prénom de l'enfant "
            />
            <div className="div-radio">
                <input
                    type="radio"
                    id="nice"
                    name="niceornot"
                    value="nice"
                    onChange={(e) => setNice(e.target.checked)}
                    checked={nice}
                />
                <label for="nice"
                    className="todoGift">
                    Enfant  sage
            </label>
            </div>
            <div className="div-radio">
                <input
                    type="radio"
                    id="bad"
                    name="niceornot"
                    value="bad"
                    onChange={(e) => setNice(!e.target.checked)}
                    checked={!nice}
                />
                <label for="bad"
                    className="todoGift">
                    Enfant pas sage
            </label>
            </div>
            <Button
                className="btn"
                action={() => addTodoAction()}
            >
                Ajouter un cadeaux
                </Button>
        </div>
    )
}

export default AddTodo;