import { useContext, useEffect, useRef } from "react"
import Context from "../store/Context"
import { ACTION } from "../store/reducer"
import './InputForm.css'
function InputForm({ configs, setConfigs }) {
    const [data, dataDispatch] = useContext(Context)
    const yearNode = useRef()
    const serialNode = useRef()
    function getPicURL(e) {
        if (!e.target.files[0]) return
        const picURL = URL.createObjectURL(e.target.files[0])
        dataDispatch({ type: ACTION.CHANGE_PIC, payload: picURL })
    }
    useEffect(() => {
        const date = new Date().getFullYear()
        yearNode.current.placeholder = date
        const random = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000
        serialNode.current.placeholder = random
    }, [])
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(data.pic)
        }
    }, [data.pic])
    return (
        <div className='input-form'>
            <div>
                <label>Name: </label>
                <input
                    value={data.name}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_NAME, payload: e.target.value }) }}
                    placeholder="Monster name" />
            </div>
            <div>
                <label>Card Type: </label>
                <select
                    value={data.cardType}
                    onChange={(e) => { dataDispatch({ type: ACTION.CHANGE_CARD_TYPE, payload: e.target.value }) }}>
                    <option>Normal</option>
                    <option>Effects</option>
                </select>
            </div>
            <div>
                <label>Attribute: </label>
                <select
                    value={data.attribute}
                    onChange={(e) => { dataDispatch({ type: ACTION.CHANGE_ATTRIBUTE, payload: e.target.value }) }}>
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Fire</option>
                    <option>Water</option>
                    <option>Earth</option>
                    <option>Wind</option>
                </select>
            </div>
            <div>
                <label>Level: </label>
                <select
                    value={data.level}
                    onChange={(e) => { dataDispatch({ type: ACTION.CHANGE_LEVEL, payload: e.target.value }) }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
            </div>
            <div>
                <label>Picture(1x1): </label>
                <input type='file' accept='image/*' onChange={(e) => { getPicURL(e) }} />
            </div>
            <div className="configs">
                <label>Config(x, y, scale): </label>
                <input type='number'
                    placeholder="50"
                    onChange={(e) => {
                        if (e.target.valueAsNumber === 0) return setConfigs({ ...configs, x: 0 })
                        setConfigs({ ...configs, x: e.target.valueAsNumber || 50 })
                    }} />
                <input type='number'
                    placeholder="112"
                    onChange={(e) => {
                        if (e.target.valueAsNumber === 0) return setConfigs({ ...configs, y: 0 })
                        setConfigs({ ...configs, y: e.target.valueAsNumber || 112 })
                    }} />
                <input type='number'
                    placeholder="1"
                    min="0.1"
                    onChange={(e) => {
                        setConfigs({ ...configs, scale: e.target.valueAsNumber || 1 })
                    }} />
            </div>
            <div>
                <label>Circulation</label>
                <input
                    value={data.circulation}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_CIRCULATION, payload: e.target.value }) }}
                    placeholder="Limited edition" />
            </div>
            <div>
                <label>Set-ID: </label>
                <input
                    value={data.id}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_ID, payload: e.target.value }) }}
                    placeholder="KN-01"
                    maxLength="5" />
            </div>
            <div>
                <label>Type: </label>
                <input
                    value={data.types}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_TYPES, payload: e.target.value }) }}
                    placeholder="Dragon/Warrior"
                    maxLength="20" />
            </div>
            <div>
                <label>Description: </label>
                <textarea
                    value={data.description}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_DESCRIPTION, payload: e.target.value }) }}>
                </textarea>
            </div>
            <div className='ip-atk-def'>
                <label>ATK / DEF: </label>
                <input
                    value={data.atk}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_ATK, payload: e.target.value }) }}
                    maxLength={4}
                    placeholder="3000" />
                <input
                    value={data.def}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_DEF, payload: e.target.value }) }}
                    maxLength={4}
                    placeholder="2800" />
            </div>
            <div>
                <label>Creator: </label>
                <input
                    value={data.creator}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_CREATOR, payload: e.target.value }) }}
                    placeholder="Your name" />
            </div>
            <div>
                <label>Year: </label>
                <input
                    ref={yearNode}
                    value={data.year}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_YEAR, payload: e.target.value }) }} />
            </div>
            <div>
                <label>Serial number: </label>
                <input
                    ref={serialNode}
                    value={data.serialNumber}
                    onInput={(e) => { dataDispatch({ type: ACTION.CHANGE_SERIAL, payload: e.target.value }) }} />
            </div>
        </div>
    )
}
export default InputForm