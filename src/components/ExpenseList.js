import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext);

    return(
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th scope='col'>Items</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Unit Price</th>
                    <th scope='col'>Items Price</th>
                    <th scope='col'>Remove</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expenses) => (
                    <ExpenseItem id={expenses.id} key={expenses.id} name={expenses.name} quantity={expenses.quantity} unitprice={expenses.unitprice}></ExpenseItem>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
