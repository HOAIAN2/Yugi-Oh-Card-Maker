const ACTION = {
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_CARD_TYPE: 'CHANGE_CARD_TYPE',
    CHANGE_ATTRIBUTE: 'CHANGE_ATTRIBUTE',
    CHANGE_LEVEL: 'CHANGE_LEVEL',
    CHANGE_PIC: 'CHANGE_PIC',
    CHANGE_CIRCULATION: 'CHANGE_CIRCULATION',
    CHANGE_ID: 'CHANGE_ID',
    CHANGE_TYPES: 'CHANGE_TYPES',
    CHANGE_DESCRIPTION: 'CHANGE_DESCRIPTION',
    CHANGE_ATK: 'CHANGE_ATK',
    CHANGE_DEF: 'CHANGE_DEF',
    CHANGE_CREATOR: 'CHANGE_CREATOR',
    CHANGE_YEAR: 'CHANGE_YEAR',
    CHANGE_SERIAL: 'CHANGE_SERIAL'
}
function reducer(state, action) {
    switch (action.type) {
        case ACTION.CHANGE_NAME:
            return { ...state, name: action.payload }
        case ACTION.CHANGE_CARD_TYPE:
            return { ...state, cardType: action.payload }
        case ACTION.CHANGE_ATTRIBUTE:
            return { ...state, attribute: action.payload }
        case ACTION.CHANGE_LEVEL:
            return { ...state, level: action.payload }
        case ACTION.CHANGE_PIC:
            return { ...state, pic: action.payload }
        case ACTION.CHANGE_CIRCULATION:
            return { ...state, circulation: action.payload }
        case ACTION.CHANGE_ID:
            return { ...state, id: action.payload }
        case ACTION.CHANGE_TYPES:
            return { ...state, types: action.payload }
        case ACTION.CHANGE_DESCRIPTION:
            return { ...state, description: action.payload }
        case ACTION.CHANGE_ATK:
            return { ...state, atk: action.payload }
        case ACTION.CHANGE_DEF:
            return { ...state, def: action.payload }
        case ACTION.CHANGE_CREATOR:
            return { ...state, creator: action.payload }
        case ACTION.CHANGE_YEAR:
            return { ...state, year: action.payload }
        case ACTION.CHANGE_SERIAL:
            return { ...state, serialNumber: action.payload }
        default:
            break
    }
}
export { ACTION }
export default reducer