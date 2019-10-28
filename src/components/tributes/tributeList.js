import React from 'react'


const tributeList = () => {
    return (
        <div className="">
            <h3 className="center-align">Tributes</h3>


            <div className="card-panel tribute">
                <p className="tribute_meta"> Posted by John Doe on October 27, 2019</p>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem doloremque unde ut tempora cupiditate expedita voluptatibus, dolore excepturi doloribus id.</p>
            </div>

            <div className="card-panel tribute">
                <p className="tribute_meta"> Posted by John Doe on October 27, 2019</p>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem doloremque unde ut tempora cupiditate expedita voluptatibus, dolore excepturi doloribus id.</p>
            </div>

            <div className="card-panel tribute">
                <p className="tribute_meta"> Posted by John Doe on October 27, 2019</p>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem doloremque unde ut tempora cupiditate expedita voluptatibus, dolore excepturi doloribus id.</p>
            </div>
            <button className="btn btn-small">
                Write a tribute <i className="fa fa-edit"></i>
            </button>
        </div>
    )
}

export default tributeList
