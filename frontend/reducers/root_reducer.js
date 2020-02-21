import { combineReducers } from 'redux';
import sessionReducer from './session/session_reducer';
import entitiesReducer from './entities/entities_reducer';
import errorsReducer from './errors/errors_reducer';
import mediaReducer from './music/media_reducer'

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    media: mediaReducer
})

export default rootReducer;