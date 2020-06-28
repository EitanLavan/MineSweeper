import React from "react";
import MineCell from "./MineCell"

export function MineBoard(props) {
    let cellIndex = 0;
    return (
        <>
            <div>
                <table className="board" >
                    <tbody>
                        {props.mineBoard.map((row) => {
                            return (
                                <tr key={row} className="mapRow">
                                    {row.map((col, subItems) => {
                                        cellIndex++;
                                        return (
                                            <MineCell col={col} row={row} val=""
                                                cellIndex={cellIndex}
                                                isExposed='false'
                                                subItems={subItems}
                                                gameStatus={props.gameStatus}
                                                superman={props.superman}
                                                flagsLeft={props.flagsLeft}
                                                OnFlagsLeftChange={props.OnFlagsLeftChange}
                                                onClick={props.onClick} />
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        </>
    );
};

export default MineBoard;