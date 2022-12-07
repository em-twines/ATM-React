import { useState } from "react";

const RecentTransactions = (props) => {
    // const[counter,setCount]=useState(props.transactions)
  


    return ( 
    <div>
        <div>Recent Transactions</div> 
        <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Amount</th>
                <th scope="col">Balance</th>
            </tr>
        </thead>
        <tbody>
            {props.transactions?.map((el, index) => {
                return(
                    <tr key = {index}>
                        <td>{index + 1}</td>
                        <td>{el.amount}</td>
                        <td>{el.balance}</td>
                        {/* {setCount(counter => counter -= 1)} */}
                    </tr>
                    )
                })
            }
            
        
        </tbody>
    </table>
</div>

)}
export default RecentTransactions;