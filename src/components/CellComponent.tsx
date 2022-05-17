import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface cellProps {
    cell: Cell;
}

const CellComponent: FC<cellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>

        </div>
    );
};

export default CellComponent;
