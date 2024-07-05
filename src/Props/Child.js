// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {

    const {message2,message } = props
    return (
        <div>
            <h2>Child Component</h2>
            <p>{message}</p>
            <p>{message2}</p>
        </div>
    );
};

export default ChildComponent;
