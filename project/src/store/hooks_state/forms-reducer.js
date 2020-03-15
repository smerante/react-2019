import * as ACTION_TYPES from '../actions/action_types'

export const initialFormState = {
  user_form_change: '',
  user_form_submit: ''
}

export const FormsReducer = (state = initialFormState, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_FORM_CHANGE:
        return {
          ...state,
          user_form_change: action.payload
        }
      case ACTION_TYPES.USER_FORM_SUBMIT:
        return {
          ...state,
          user_form_submit: action.payload
        }
      default:
        return state
    }
}