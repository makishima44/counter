import { INCREMENT_COUNT, RESET_COUNT, SET_ERROR, SET_MAX_VALUE, SET_MIN_VALUE, SET_VALUE_FROM_LS } from "./constants";


export const setMinValueAC = (minValue: number) => ({ type: SET_MIN_VALUE, minValue } as const);
export const setMaxValueAC = (maxValue: number) => ({ type: SET_MAX_VALUE, maxValue } as const);
export const incrementCountAC = () => ({ type: INCREMENT_COUNT } as const);
export const setErrorAC = (error: boolean) => ({ type: SET_ERROR, error } as const);
export const resetCountAC = () => ({ type: RESET_COUNT } as const);
export const setValueFromLSAC = (count: number) => ({ type: SET_VALUE_FROM_LS, count } as const);
