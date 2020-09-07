import React from 'react'
import { getUUID } from '../hooks/utils'

export interface AppContext {
  uid: Readonly<string>
}

const initContext: AppContext = {
  uid: getUUID(),
}

const appContext = React.createContext<AppContext>(initContext)

export default appContext
