import React, { useState, useContext } from 'react'
import Layout from "../layout/layout"
import AngelPic from '../../images/art-cathedral-chapel-208218.jpg'
import firebase, {db} from '../../config/firebase'
import AuthContext from '../context/authContext/authContext'
import Spinner from '../spinner/Spinner'





const SignIn = (props) => {
    const authContext = useContext(AuthContext);
    const {setUser} = authContext;

    const [input, setInput] = useState({ email: '', password: '' })
    const [errors, setError] = useState({ errorMsg: '' })
    const [spinner, setSpinner] = useState(false)

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
        //Validation
        if (input.email.trim() === '' | input.password.trim() === '') {
            return showAlert("Fields must not be empty")
        }
        setSpinner(true)
        firebase.auth().signInWithEmailAndPassword(input.email, input.password)
       .then(data => {
        //    console.log(data.doc[0].data().userId)
           return db.collection('users')
                .where('userId', '==', data.user.uid)
                .limit(1)
                .get();
       })
       .then(user => {
            localStorage.setItem('myValueInLocalStorage', JSON.stringify(user.docs[0].data()));
            setUser(user.docs[0].data())
            setInput({ email: '', password: '' })
            setSpinner(false)
            props.history.push('/')
       })
       .catch(err => {
            console.log(err)
            setSpinner(false)
           return showAlert(err.message) 
       }) 
    }

    

    return (
        <Layout>
            <div className="" style={{
                backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(0,0,0, .5) 0%,
                    rgba(0,0,0, .8) 70%,
                    rgba(0,0,0, 1) 100%
                ), url('./${AngelPic}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: `88vh`,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <div className="">
                    {errors.errorMsg !== '' && (<div className="center-align card-panel red">{errors.errorMsg}</div>)}
                    <form className="form" onSubmit={submitHandler}>
                        <div className="form_element">
                            {spinner && (<div className="spinner_2"><Spinner/></div>)}
                            <h5 className="center-align">Sign in </h5>
                            <div className="input-field ">
                                <input placeholder="Enter email" type="email" name="email" onChange={inputHandler} value={input.email} />
                            </div>
                            <div className="input-field ">
                                <input placeholder="Enter password" type="password" name="password" onChange={inputHandler} value={input.password} />
                            </div>
                            <div className="input-field center-align">
                                <input type="submit" className="btn btn-small blue" style={{ width: '100%' }} value="Sign in" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default SignIn
