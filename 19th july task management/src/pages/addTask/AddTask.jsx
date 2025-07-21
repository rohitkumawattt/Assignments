import React, { useState } from 'react'
import "./addTask.css"
import axios from "axios"
const AddTask = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleForm = async (event) => {
        event.preventDefault()
        console.log(formData)
        try {
            let response = await axios.post("http://localhost:3000/tasks", formData);
            console.log('Post successful!', response.data);
        } catch (error) {
            console.log(error)
        }
        setFormData({
            title: '',
            description: '',
            date: ''
        });
    }
    return (
        <div className='main'>
            <h2>Add New Task</h2>
            <form onSubmit={handleForm}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter task title" required

                />
                <label>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Task description">
                </textarea>
                <label>Due Date</label>
                <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                />
                <button
                    type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask
