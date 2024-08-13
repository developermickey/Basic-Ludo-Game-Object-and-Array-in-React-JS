import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});
    let [arr, setArr] = useState(["No Moves"]);

    const udpateBlue = () => {
    setMoves((preValue) => {
        return {...preValue, blue: preValue.blue + 1}
    });
    setArr((preArr) => {
        return [...preArr, " blue"]
    });
        console.log(arr);
    }
    const udpateYellow = () => {
        setMoves((preValue) => {
            return {...preValue, yello: preValue.blue + 1}
        });
        }
        const udpateGreen = () => {
            setMoves((preValue) => {
                return {...preValue, green: preValue.blue + 1}
            });
            }
            const udpateRed = () => {
                setMoves((preValue) => {
                    return {...preValue, red: preValue.blue + 1}
                });
                }
    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
            <p>Blue Moves = {moves.blue}</p>
            <button onClick={udpateBlue} style={{backgroundColor: "blue"}}>+1</button>
            <p>Yellow Moves = {moves.yellow}</p>
            <button onClick={udpateYellow} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
            <p>Green Moves = {moves.green}</p>
            <button onClick={udpateGreen} style={{backgroundColor: "green", color: "black"}}>+1</button>
            <p>Red Moves = {moves.red}</p>
            <button onClick={udpateRed} style={{backgroundColor: "red", color: "white"}}>+1</button>

            </div>
        </div>
    )
}