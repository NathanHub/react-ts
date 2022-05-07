import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note,
            }
        ]);

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" value={input.name} name="name" className="AddToList-input" onChange={handleChange} />
            <input type="number" placeholder="Age" value={input.age} name="age" className="AddToList-input" onChange={handleChange} />
            <input type="text" placeholder="Image Url" value={input.url} name="url" className="AddToList-input" onChange={handleChange} />
            <textarea placeholder="Notes" value={input.note} name="note" className="AddToList-input" onChange={handleChange} />
            <button className="AddToList-btn" onClick={handleClick}>
                Add to List
            </button>
        </div>
    )
}

export default AddToList;