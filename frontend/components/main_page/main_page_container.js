import { connect } from 'react-redux';
import MainPage from './main_page';


const mSTP = state => {
    return {
        msg: "Hello World"
    }
}

const mDTP = dispatch => {
    return {
        
    }
}


export default connect(mSTP)(MainPage);
