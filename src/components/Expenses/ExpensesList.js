
import ExpenseItrm from "./ExpenseItem"
import './ExpensesList.css'
const ExpensesList = (props) =>{

    // let expensesContant = <p>No Data to Show</p>

    if(props.items.length===0){
      return <h2>No Data found...!</h2>
    }
    
    return(
        <ul>
        {props.items.map((expense) => (
        <ExpenseItrm
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
        </ul>
    )
}

export default ExpensesList;