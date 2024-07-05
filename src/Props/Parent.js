import React from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
    const data = "Hello from Parent Component!";

    const message = "Welcome"

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent message={data} message2={message} />
        </div>
    );
};

export default ParentComponent;
