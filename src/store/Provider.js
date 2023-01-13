import { useReducer } from 'react'
import Context from './Context'
import reducer from './reducer'
function Provider({ children }) {
    const [data, dataDispatch] = useReducer(reducer, {
        name: '',
        cardType: 'Normal',
        attribute: 'Light',
        level: '1',
        pic: '',
        circulation: '',
        id: '',
        types: '',
        description: '',
        atk: '',
        def: '',
        creator: '',
        year: '',
        serialNumber: ''
    })
    return (
        <Context.Provider value={[data, dataDispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider