import React from 'react'
import { connect } from 'react-redux'

const Userlist = ({users}) => {
    return (
        <div>
            <h4>connected users</h4>
            {
                 users ? users.map((usr, i) => <div key={i}>{usr}</div>)
                 : null
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.userlist
    }
}

export default connect(mapStateToProps)(Userlist);