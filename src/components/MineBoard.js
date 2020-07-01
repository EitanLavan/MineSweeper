import React from "react";
import MineCell from "./MineCell"

export function MineBoard(props) {
    let cellIndex = 0;
    let rowlIndex = 0;
    return (
        <>
            <div>
                <table className="board" >
                    <tbody>
                        {props.mineBoard.map((row) => {
                            rowlIndex++;
                            return (
                                <tr className="mapRow" key={rowlIndex}>
                                    {row.map((col) => {
                                        cellIndex++;
                                        return (
                                            <MineCell
                                                key={cellIndex}
                                                col={col}
                                                cellIndex={cellIndex}
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