import React from 'react'
import { connect } from 'react-redux'
import { title } from './style';

const Edit = () => {
    return (
        <button>edit</button>
    )
}

const Userlist = ({users, id}) => {
    return (
        <div style={title}>
            <h4>connected users</h4>
            {
                 users ? users.map((usr, i) =>
                    <div key={i}>
                        player{i+1}
                        {
                            id === usr ? <Edit/> : null
                        }
                    </div>)
                 : null
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        id: state.yourID,
    }
}

export default connect(mapStateToProps)(Userlist);
