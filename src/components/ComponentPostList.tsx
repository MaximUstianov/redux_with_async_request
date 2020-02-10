import React from "react";

type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

interface IPost {
    data: any,
    componentDidMount: (data: respX[]) => void;
}

export class ComponentPostList extends React.Component<IPost> {


    render() {
        return (
            <div className="About">
                {this.props.data.map((el: any) => (
                    <li key={el.id}>
                        {el.title}
                    </li>
                ))}
            </div>
        );
    }
}
