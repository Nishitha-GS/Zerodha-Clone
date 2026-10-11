import React,{useState, useEffect} from "react";
import axios from "axios"
import {holdings} from "../data/data";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3002/allHoldings").then((res)=>{
      console.log(res.data);
      setAllHoldings(res.data)
    })
  },[])

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray)=>subArray["name"])
  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: allHoldings.map((stock)=>stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
    };
  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };
  
  let totalInvestments = 0
  let currentValue = 0

  allHoldings.forEach((stock)=>{
    totalInvestments += stock.avg*stock.qty
    currentValue += stock.price*stock.qty
  })
  const totalPnL = currentValue - totalInvestments
  const pnlpercentage = totalInvestments !== 0? totalPnL/totalInvestments*100:0

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>


      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock,index)=>{
            const investment = stock.avg *stock.qty;
            const currVal = stock.price * stock.qty;
            const pnl = currVal - investment;
            const isProfit = pnl>=0.0;
            const profClass = isProfit? "profit":"loss";
            const dayClass = stock.isLoss? "loss":"profit";

            return(
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={profClass}>{pnl.toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            ) 

          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            ₹{totalInvestments.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            ₹{currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
          ₹{totalPnL.toFixed(2)} ({pnlpercentage.toFixed(2)}%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data = {data}/>
    </>
  );
};

export default Holdings;
