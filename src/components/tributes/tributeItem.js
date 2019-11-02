import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'


const tributeItem = ({tributeProps}) => {
    const {authorId, tribute, createdAt} = tributeProps
    dayjs.extend(relativeTime)

    return (
        <div className="card-panel tribute">
            <p className="tribute_meta"> Posted by {authorId} | <span className="indigo-text date">{ dayjs(createdAt.toDate()).fromNow() }</span></p>
            <p className="">{tribute}</p>
        </div>
    )
}

export default tributeItem
