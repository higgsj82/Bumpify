import { connect } from "react-redux"
import PlaylistShow from "./playlist"
import { logout } from "../../../../actions/session_actions"

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(PlaylistShow);