import React from "react";

const MinesGameParameters = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <text>Height:</text>
                        </td>
                        <td>
                            <input type="text" value={props.height} onChange={event => props.setHeight(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <text>Width:</text>
                        </td>
                        <td>
                            <input type="text" value={props.width} onChange={event => props.setWidth(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <text>Mines:</text>
                        </td>
                        <td>
                            <input type="text" value={props.mines} onChange={event => props.setMines(Number(event.target.value))} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MinesGameParameters;