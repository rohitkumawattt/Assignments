import React, { useEffect, useState } from 'react'
import "./home.css"
import axios from 'axios'
const Home = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        async function getData() {
            let response = await axios.get("http://localhost:3000/tasks")
            setTasks(response.data)
        }
        getData();
    },[tasks.id]) 
    return (
        <div className='main'>
            <h2>Welcome to Task Manager</h2>
            <p>Manage your tasks efficiently with this simple system.</p>

            <section className="task-section">
                <h3>Recent Tasks</h3>
                {
                    tasks.map((item, index) => {
                        return <div key={index} className="task-card">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <p><strong>Due:</strong> {item.date}</p>
                        </div>
                    })
                }
            </section>
        </div>
    )
}

export default Home
