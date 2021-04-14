import React from 'react'
import {createContext, useContext, useReducer} from 'react'

//Prepares Data layer
export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider
    value = {useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

//To modify data layer values from outside
export const useDataLayerValue = () => useContext(DataLayerContext)