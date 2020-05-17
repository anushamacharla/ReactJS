import React from 'react';
//const Loading = () => <h4>Loading</h4>
//const Loading = (props) => <h4>{props.message}</h4>
const Loading = ({message}) => <h4>{message}</h4> // destructuring directly
export default Loading;

// when we have multiple components

// export const Loading = () => <h4>Loading</h4>
// export const Loading = () => <h4>Loading</h4>
// export const Loading = () => <h4>Loading</h4>

// here no need of export default and in App component while importing we have to do like 
//    import {Loading} from './Loading'