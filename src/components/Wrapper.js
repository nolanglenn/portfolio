import React from 'react';

export default function Wrapper(props) {
    return (
        <div cassName='container' style={{overflowX: 'hidden'}} >{props.children}</div>
    )
}