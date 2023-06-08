import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {

    const [testString, setTestString] = useState("test");
    const [salary, setSalary] = useState(0);
    const [expenses, setExpenses] = useState(0);

    const readGoogleSheet = () =>{
        //let myData;
        fetch('https://sheetdb.io/api/v1/1jvtnx7xaon6g')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const salary = data.find(element => element["Money In"] == "Total income");
                const expenses = data.find(element => element["Money In"] == "Total expenses")
                setSalary(salary.summ);
                setExpenses(expenses.summ);
            } );
    }
    let myData = readGoogleSheet();
   let data = (a,b) => console.log(a+b);


    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Get the actual data  <button className="button" onClick={readGoogleSheet}>Read</button>
                </p>
            </header>
            <div className="center-block">
            <div className= "info-unit" id="salary">
                <p>Total income</p>
                <p>{salary}</p>
               {/*/ <button className="button" onClick={readGoogleSheet}>Read</button>*/}
            </div>
            <div className= "info-unit" id="expenses">
                <p> Expenses</p>
                <p>{expenses}</p>
            </div>
            </div>
        </div>

    );
}

export default App;
