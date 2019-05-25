import React from 'react';

const test = (props) => {
    return (
        <div className="test"> 
        <p>dsdsd</p>
            <p>coming from test {props.name}  with age: {props.age}</p>      
            <hr/>
            <p>testing props with {props.test} and coming from test.js</p>      
        </div>
    )
};

export default test;