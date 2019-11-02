import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const AddTribute = ({ user, addHandler }) => {
    const [input, setInput] = useState({ tributeText: '' })
    const [errors, setError] = useState({ errorMsg: '' })


    //Alert
    const showAlert = (msg) => {
        setError({ errorMsg: msg })
        setInterval(() => {
            setError({ errorMsg: '' })
        }, 4000)
    }

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (input.tributeText.trim() === '') {
            return showAlert("Fields must not be empty")
        }
        addHandler(input.tributeText);
        setInput({tributeText: ''})
    }

    return (
        <div className="card-panel ">
            {errors.errorMsg !== '' && (<div className="center-align card-panel red">{errors.errorMsg}</div>)}
            <form className="form_2" onSubmit={submitHandler}>
                <div className="form_element">
                    <h5 className="center-align">Write A Tribute </h5>
                    <div className="input-field ">
                        <textarea className="textarea" placeholder="Enter tribute" name="tributeText" 
                            disabled={user === null ? true : false} onChange={inputHandler} value={input.tributeText}></textarea>
                    </div>
                    <div className="input-field center-align">
                        <input disabled={user === null ? true : false} type="submit" value="Publish" className="btn btn-small  light-blue darken-1" />
                    </div>
                </div>

                {
                    user === null ?
                        (
                            <div className="notAuth">
                                <Link to="/signup" className="btn btn-small red">Register to publish a tribute</Link>
                            </div>
                        )
                        :
                        ''
                }

            </form>

        </div>
    )
}

export default AddTribute
