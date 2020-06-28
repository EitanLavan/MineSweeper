import React from "react";
import MineBoard from './MineBoard'
import PlayAgain from './PlayAgain'
import helpers from '../helpers'

export function MinesGame(props) {
    const [flagsLeft, setFlagsLeft] = React.useState(props.mines);
    const [mineBoard, setmineBoard] = React.useState(helpers.CreateMap(props.height, props.width, props.mines));
    const [gameStatus, setGameStatus] = React.useState("active");
    const [superman, setSuperman] = React.useState(false);

    const onsupermanCheck = () => {
        setSuperman(true);
        setGameStatus('lost');
    };

    const resetGame = () => {
        setGameStatus("active");
        setFlagsLeft(props.mines);
        setmineBoard(helpers.CreateMap(props.height, props.width, props.mines));
        setSuperman(false);
        props.startNewGame()
    };

    const onMineCellClick = (row, col, val, cellIndex, isExposed, subItems) => {
        if (val !== col) {
            val = col;
            if (val === '☀') {
                setGameStatus("lost");
            }
            else {
                if (col == 0) {
                    helpers.ExpoesAllRelevantCells(Number(props.height), Number(props.width), cellIndex);
                }
            }
            checkGameStatus(cellIndex);
        }
    };

    const checkGameStatus = (exposedCellIndex) => {
        let isWin = true;
        for (let cellIndex = 1; cellIndex <= props.height * props.width; cellIndex++) {
            if (exposedCellIndex !== cellIndex) {
                let y = document.getElementById(cellIndex);
                if (y.innerHTML == '<text></text>') {
                    isWin = false;
                    break;
                }
            }
        }

        if (isWin) {
            setGameStatus('win');
        }
    }

    const OnFlagsLeftChange = (isUsedFlag, cellIndex) => {
        {
            setFlagsLeft(flagsLeft + isUsedFlag);
            checkGameStatus(cellIndex);
        }
    }

    return (
        <>
            <div>
                <MineBoard mineBoard={mineBoard} gameStatus={gameStatus} flagsLeft={flagsLeft} superman={superman} onClick={onMineCellClick} OnFlagsLeftChange={OnFlagsLeftChange} />
            </div>
            <div>
                <text>Flags left: {flagsLeft}</text>
            </div>
            <div>

                <button onClick={onsupermanCheck}>Superman</button>
            </div>
            <div >
                {gameStatus !== 'active' || superman ? (
                    <PlayAgain onClick={resetGame} gameStatus={gameStatus} />
                ) : (
                        <text >Game is active!!!</text>
                    )}
            </div>
        </>
    );
}

export default MinesGame;