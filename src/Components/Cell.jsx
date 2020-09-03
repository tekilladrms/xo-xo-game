import React from 'react';

const Cell = (props) => {
    return (
        <div className="ttt-grid" onClick={props.clickHandler} data={props.index}>
                { props.square }
            </div>
    );
}

export default Cell;