import React from 'react';
import { Button } from './Button';

export const Todo = ({ item, checkboxAction, buttonAction }) => {
    let textStyle = item.complete ? "complete" : "";

    return (
        <div
            className="todo"
            key={item.text}
        >
            <div className="todoLeft">
                <div>
                    <input
                        type="checkbox"
                        checked={item.complete}
                        onChange={checkboxAction}
                    />
                    <span
                        className="todoGift"
                    >
                        {item.text}
                    </span>
                </div>
                <div className={`todoText ${textStyle}`}
                >
                    {item.gift.text}
                </div>
            </div>
           <div>
           <Button
                className="btn btn-danger"
                action={buttonAction}
            >
                Cadeau offert
          </Button>
           </div>
        </div>
    )
}
