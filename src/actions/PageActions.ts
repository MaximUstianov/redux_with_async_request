export const LOAD_POST = 'LOAD_POST'

export const componentDidMount = () => async (dispatch: any) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await response.json();
    dispatch(LoadPost(data));
}

export const LoadPost = (mainData: any) => {
    return {
        type: LOAD_POST,
        payload: mainData
    };
}