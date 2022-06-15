import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface Boardprops {
    board: Board,
    setBoard: (board: Board) => void
}

const BoardComponent: FC<Boardprops> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] =  useState<Cell | null>(null)

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        } else {
            setSelectedCell(cell)
        }

    }

    function hightlightCell() {
        board.hightlightCells(selectedCell)
        updateBoard()
    }

    useEffect(() => {
        hightlightCell()
    }, [selectedCell])

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment >
                    {row.map(cell =>
                        <CellComponent
                            cell={cell}
                            key={cell.id}
                            click={click}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;
