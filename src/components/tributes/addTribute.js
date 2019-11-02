import React, { useState } from 'react'



const AddTribute = ({ user, addHandler }) => {
    const [input, setInput] = useState({userName: '',  tributeText: '' })
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
        if (input.userName.trim() === '' | input.tributeText.trim() === '') {
            return showAlert("Fields must not be empty")
        }
        addHandler(input);
        setInput({userName: '',  tributeText: '' });
    }

    return (
        <div className="card-panel ">
            {errors.errorMsg !== '' && (<div className="center-align card-panel red">{errors.errorMsg}</div>)}
            <form className="form_2" onSubmit={submitHandler}>
                <div className="form_element">
                    <h5 className="center-align">Write A Tribute </h5>
                    <div className="input-field">
                        <input className="inputText" placeholder="Enter name" type="text" name="userName" onChange={inputHandler} value={input.userName} />
                    </div>
                    <div className="input-field">
                        <textarea className="textarea" placeholder="Enter tribute" name="tributeText" onChange={inputHandler} value={input.tributeText}></textarea>
                    </div>
                    <div className="input-field center-align">
                        <input type="submit" value="Publish" className="btn btn-small  light-blue darken-1" />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddTribute
