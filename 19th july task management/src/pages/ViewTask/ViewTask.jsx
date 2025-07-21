import React from 'react'
import "./viewtask.css"
const ViewTask = () => {
    return (
        <div className='main'>
            <h2>Task List</h2>
            <table>
                <thead>
                    <tr><th>Title</th><th>Description</th><th>Due</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Example Task</td>
                        <td>Sample description</td>
                        <td>2025-05-10</td>
                        <td>
                            <a href="update.html">Edit</a> |
                            <a href="#" onclick="deleteTask(this)">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Submit Project Report</td>
                        <td>Finalize and email the project report.</td>
                        <td>2025-05-07</td>
                        <td>
                            <a href="update.html">Edit</a> |
                            <a href="#" onclick="deleteTask(this)">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Buy Groceries</td>
                        <td>Milk, bread, eggs, and vegetables.</td>
                        <td>2025-05-08</td>
                        <td>
                            <a href="update.html">Edit</a> |
                            <a href="#" onclick="deleteTask(this)">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Client Meeting</td>
                        <td>Zoom meeting to discuss project updates.</td>
                        <td>2025-05-09</td>
                        <td>
                            <a href="update.html">Edit</a> |
                            <a href="#" onclick="deleteTask(this)">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Pay Electricity Bill</td>
                        <td>Due this week to avoid late charges.</td>
                        <td>2025-05-11</td>
                        <td>
                            <a href="update.html">Edit</a> |
                            <a href="#" onclick="deleteTask(this)">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ViewTask
