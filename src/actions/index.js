import {INCREMENT_COUNT} from "../constants/actionTypes";

function incrementCount() {
    console.log('increment count action creator');
    return {
        type: INCREMENT_COUNT
    };
}

export {incrementCount};