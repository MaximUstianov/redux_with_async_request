import React from 'react'
import {connect} from 'react-redux'
import {componentDidMount} from './actions/PageActions'
import {ComponentPostList} from "./components/ComponentPostList";


type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

interface IProps {
    componentDidMount: any,
    page: any,
}

interface StateI {
    data: respX[];
}


class App extends React.Component<IProps, StateI> {
    constructor(data: any) {
        super(data);
        this.props.componentDidMount(data);
    }

    render() {
        const {page, componentDidMount} = this.props
        return (
            <div className="container">
                <ComponentPostList data={page.data} componentDidMount={componentDidMount}/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        page: state.page,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        componentDidMount: () => dispatch(componentDidMount())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
