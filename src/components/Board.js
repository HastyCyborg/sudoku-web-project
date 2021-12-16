import React from "react";
import './Boardmousestyle.css'

export default function Board(props) {

  const [toRefresh, setToRefresh] = React.useState(0)

  props.refresher(setToRefresh)

  const boardstyle = {
    height: "50vh",
    width: "50vh",
    background: "white",
    margin: "15px auto",
    maxHeight: "90%",
    borderRadius:"10px",
    padding:"5px"
  };

  const inputBoxStyle ={
    width:"6.2vw",
    maxWidth:"8%",
    height:"4.2vh",
    maxHeight:"4vh",
    margin:"1px",
    padding: "2px 2px",
    background:"#201E60",
    color:"white",
    textAlign:"center",
    fontSize:"larger"
  }

  const boardChangeRunner = (i, j) => {
    let temp = document.getElementById(i*10+j).value
    console.log(temp)
    temp = parseInt(temp)
    if(isNaN(temp)){temp=0}
    if(temp===9){
      document.getElementById(i*10+j).value=null
      props.gameBoard[i][j]=null
      return
    }
    document.getElementById(i*10+j).value=temp+1
    props.gameBoard[i][j]=temp+1
  };

  return <div style={boardstyle}>
      {props.gameBoard.map((arr,i)=>{
          return <div key={i*100}>{arr.map((val,j)=>{
              return <input type="text" key={i*10+j} id={i*10+j} value={val} onClick={()=>{boardChangeRunner(i,j)}} readOnly style={inputBoxStyle}/>
          })}</div>
      })}
  </div>;
}













// {props.board.map((arr,i)=>{
//     return <div key={i*100}>{arr.map((subarr,j)=>{
//         return <button key={i*10+j} onClick={()=>{boardChangeRunner(i,j)}} style={{padding:"15px", margin:"2px"}}>{subarr}</button>
//     })}</div>
// })}
