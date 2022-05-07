import React from "react";
import { IState as IProps } from "../App";

/** const List = (props: IProps) or ({people}: IProps) => {
    return (
        <div>List</div>
    );
} */

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => { // Return an array of JSX Elements
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} Years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    );
}

export default List;