import React from "react";

const MineCell = (props) => {
    const [val, setVal] = React.useState(props.val);

    return (
        <td key={props.col} >
            <button
                className="mineCell"
                id={props.cellIndex}
                key={props.cellIndex}
                row={props.row}
                column={props.col}
                cellIndex={props.cellIndex}

                onClick={(event) => {
                    if (props.gameStatus === "active") {
                        if (event.shiftKey) {
                            if (val !== "🚩" || val !== '') {
                                if (val === "🚩") {
                                    setVal('');
                                    props.OnFlagsLeftChange(1, props.cellIndex);
                                }
                                else {
                                    if (props.flagsLeft === 0) {
                                        alert("You already use all flags!");
                                    }
                                    else {
                                        setVal("🚩");
                                        props.OnFlagsLeftChange(-1, props.cellIndex);
                                    }
                                }
                            }
                        }
                        else {
                            if (val !== "🚩") {
                                if ({ val } !== props.col) {
                                    setVal(props.col);
                                    props.onClick(props.row, props.col, props.val, props.cellIndex, props.isExposed, props.subItems);
                                }
                            }
                        }
                    }
                }
                }
            >
                {props.gameStatus === "active" && !props.superman
                    ? (<text>{val}</text>)
                    : (<text>{props.col}</text>)
                }
            </button>
        </td>
    );
};

export default MineCell;