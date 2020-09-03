import React from 'react';
import Cell from './Cell';

const Grid = (props) => {

    let cells = props.squares.map( (square, index) => <Cell clickHandler={props.clickHandler} square={square} index={index} />);

    return (
        <div className="tic-tac-toe">
            { cells }
        </div>

    );
}

export default Grid;