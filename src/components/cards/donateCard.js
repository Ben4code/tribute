import React, { useState } from 'react'
import NumFormat from 'react-number-format'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from '../spinner/Spinner'
import StripeCheckOut from 'react-stripe-checkout'
import axios from 'axios'

toast.configure();

const DonateCard = () => {
    const [input, setInput] = useState({ donation: '' })
    const [selectValue, setSelectValue] = useState({ currency: 'gbp', symbol: '£' })
    const [payButton, setPay] = useState({ pay: false, spinner: false })
    const [errors, setError] = useState({ errorMsg: '' })

    //Alert
    const showAlert = (msg) => {
        setError({ errorMsg: msg })
        setInterval(() => {
            setError({ errorMsg: '' })
        }, 4000)
    }

    const handleSelect = (e) => {
        if (e.target.value === 'gbp') {
            setSelectValue({ currency: e.target.value, symbol: "£" })
        } else if (e.target.value === 'usd') {
            setSelectValue({ currency: e.target.value, symbol: "$" })
        }else{
            setSelectValue({ currency: e.target.value, symbol: "₦"})
        }
    }

    const inputHandler = (e) => {
        setInput({ donation: e.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (input.donation.trim() === '') {
            return showAlert("Field must not be empty")
        }
        setPay({ pay: true, spinner: false });
    }

    const tokenHandler = async (token) => {
        
        setPay({ pay: true, spinner: true });
        await axios.post("https://myappgood.herokuapp.com/checkout", {
            token,
            input,
            currency: selectValue.currency
        }).then((response) => {
            const { status } = response.data;
            console.log("Ran here:", response)
            if (status === 'success') {
                toast('Transaction was successful! Thank you for your kind donation.', { type: 'success' })
                setPay({ pay: false, spinner: false });
                setInput({ donation: '' })
            } else {
                toast('Something went wrong', { type: 'error' })
                setPay({ pay: false, spinner: false });
            }
        })
            .catch(err => console.log(err))
    }

    const cancelPay = () => {
        setPay({ pay: false, spinner: false });
    }

    return (
        <div className="col m12 donate">
            <ToastContainer />
            {errors.errorMsg !== '' && (<div className="center-align card-panel red">{errors.errorMsg}</div>)}
            <div className="card">
                <div className="blue lighten-1 center-align">
                    <div className="card-title">Donate in Memory of Fidelis</div>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="card-content black-text donation">
                        {payButton.spinner && (<div className="spinner"><Spinner /></div>)}
                        {
                            !payButton.pay ? (
                                <>
                                    <div className="input-field">
                                        <select className="browser-default" value={selectValue.currency} onChange={handleSelect}>
                                            <option value="">Select Currency</option>
                                            <option value="gbp">Pound</option>
                                            <option value="usd">US Dollar</option>
                                            <option value="NGN">Naira</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div className="input-field">
                                        <i className={`fa fa-${selectValue.currency} prefix blue-text`}>{selectValue.currency === 'NGN' && selectValue.symbol }</i>
                                        <NumFormat thousandSeparator={true} onValueChange={inputHandler} value={input.donation} />
                                    </div>
                                </>
                            ) : (<p className="confirm">You have agreed to donate {selectValue.symbol}{input.donation}</p>)
                        }
                    </div>
                    <div className="card-action">
                        {
                            !payButton.pay ? (<button style={{ width: '100%' }} type="submit" className="btn btn-large blue">Donate</button>)
                                :
                                (
                                    <>
                                        <StripeCheckOut stripeKey="pk_live_CLNFXgwJ2WPtdRtQABfxpcln00rHPaYcN7" token={tokenHandler} amount={input.donation * 100} currency={selectValue.currency} />
                                        <button className="btn btn-small red right" onClick={cancelPay}>Back</button>
                                    </>
                                )
                        }
                    </div>
                </form>
            </div>
        </div >
    )
}

export default DonateCard
