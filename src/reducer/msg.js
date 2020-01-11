import {ADD_MESSAGE, SUPP_MESSAGE} from './../constants/action';

const messageArray = {
    /*isPending: false,
    error: null,*/
    messages: [],
   /* pending: false,
    username: 'Zen',
    message: 'La vacuité est forme, et la forme est vacuité',
    sentAt: '',*/
};

const messages = (state = messageArray, action) => { switch (action.type) {
	case ADD_MESSAGE:
		return {
			messages: [
				...state.messages,
				{
                    username: action.username,
                    message: action.message,
                    sentAt: action.sentAt, 
                }
			]
        };

    case SUPP_MESSAGE:
        console.log('delete');
        return {
            messages: state.messages.filter((_message, i) => i !== action.index)
        };

	default:
		return state
    }
};

export default messages;