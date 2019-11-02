import React, { useState, useEffect, useContext } from 'react'
import firebase, { db } from '../../config/firebase'
import TributeItem from './tributeItem'
import AuthContext from '../context/authContext/authContext'
import AddTribute from './addTribute'


const TributeList = (history) => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    const [tributes, setTributes] = useState([])
    

    useEffect(() => {
        db.collection('tributes').orderBy('createdAt').get()
            .then(snapShot => {
                if (!snapShot.empty) {
                    const newDoc = [];
                    snapShot.docs.map(doc => {
                        return newDoc.unshift({ id: doc.id, ...doc.data() })
                    })
                    setTributes([...newDoc, ...tributes]);
                }
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addTributeHandler = (input) => {
        const newDoc = {
            authorId: user.handle,
            tribute: input,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date())
        }
        db.collection("tributes").add({...newDoc})
        .then(function(docRef) {
            setTributes([...tributes, {...newDoc}]);
            window.location.reload()
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    return (
        <div className="">

            <h3 className="center-align">Tributes</h3>
            <div>
                <AddTribute user={user} addHandler={addTributeHandler}/>
            </div>
            {
                tributes.length > 0 && tributes.map(tribute => {
                    return (
                        <TributeItem key={tribute.id} tributeProps={tribute} />
                    )
                })
            }
        </div>
    )
}

export default TributeList

