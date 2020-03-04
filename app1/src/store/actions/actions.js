import * as ACTION_TYPES from './action.types';

export const SUCCESS = {
	type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
	type: ACTION_TYPES.FAILURE
}

export const success = () => {
	return {
		type: ACTION_TYPES.SUCCESS
	}
}

export const failure = () => {
	return {
		type: ACTION_TYPES.FAILURE
	}
}

export const user_input = (value) => {
	return {
		type: ACTION_TYPES.USER_INPUT,
		payload: value
	}
}


export const login_success = () => {
	return {
		type: ACTION_TYPES.LOGIN_SUCCESS
	}
}

export const login_failure = () => {
	return {
		type: ACTION_TYPES.LOGIN_FAILURE
	}
}

export const add_profile = (profile) => {
	return {
		type: ACTION_TYPES.ADD_PROFILE,
		payload: profile
	}
}

export const remove_profile = () => {
	return {
		type: ACTION_TYPES.REMOVE_PROFILE
	}
}