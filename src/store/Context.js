import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {data} from '../data';
const Context = createContext()

export function useAppContext() {
  const context = useContext(Context)
  if (!context) {
    throw new Error(
      `You can't use context state outside of a provider, check where you are using this hook.`
    )
  }

  return context
}

export function Provider({ children }) {
  const value = {
    projects: data.projects
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.any
}
