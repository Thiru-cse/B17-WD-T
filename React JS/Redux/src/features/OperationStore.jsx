import { configureStore } from '@reduxjs/toolkit'
import OperationReducer from './OperationSlice'

export const operationStore = configureStore({
    reducer: {
        opReducer: OperationReducer
    },
});