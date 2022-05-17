import React, {FC} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";

interface Boardprops {
    board: Board,
    setBoard: (board: Board) => void
}

const BoardComponent: FC<Boardprops> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment >
                    {row.map(cell =>
                        <CellComponent cell={cell} key={cell.id}/>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;
