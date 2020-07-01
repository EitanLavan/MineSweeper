import React from "react";

const MineCell = (props) => {
    const [val, setVal] = React.useState("");

    return (
        <td>
            <button
                className="mineCell"
                id={props.cellIndex}
                key={props.cellIndex}
                col={props.col}
                cellindex={props.cellIndex}

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
                                    props.onClick(props.col, { val }, props.cellIndex);
                                }
                            }
                        }
                    }
                }
                }
            >
                {props.gameStatus === "active" && !props.superman
                    ? (<div>{val}</div>)
                    : (<div>{props.col}</div>)
                }
            </button>
        </td>
    );
};

export default MineCell;