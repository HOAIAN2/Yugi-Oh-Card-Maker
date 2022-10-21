import { useState, useEffect, useRef } from "react"
import './InputForm.css'
function InputForm({ getData }) {
    const [name, setName] = useState('')
    const [cardType, setCardType] = useState('Normal')
    const [attributes, setAttributes] = useState('Light')
    const [level, setLevel] = useState('1')
    const [pic, setPic] = useState('')
    const [circulation, setCirculation] = useState('')
    const [id, setId] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [atk, setAtk] = useState('')
    const [def, setDef] = useState('')
    const [creator, setCreator] = useState('')
    const [year, setYear] = useState('')
    const [serialNumber, setSerialNumber] = useState('')
    const yearNode = useRef()
    const serialNode = useRef()
    function handleGenerate() {
        const data = {
            name,
            cardType,
            attributes,
            level,
            pic,
            circulation,
            id,
            type,
            description,
            atk,
            def,
            creator,
            year,
            serialNumber
        }
        if (data.type === '') data.type = data.cardType
        else {
            data.type = `${data.type}/${data.cardType}`
        }
        getData(data)
    }
    useEffect(handleGenerate,
        [getData, name, cardType, attributes, level, pic, circulation, id, type, description, atk, def, creator, year, serialNumber])
    function getPicURL(e) {
        const picURL = URL.createObjectURL(e.target.files[0])
        setPic(picURL)
    }
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(pic)
        }
    }, [pic])
    useEffect(() => {
        const date = new Date().getFullYear()
        yearNode.current.placeholder = date
        const random = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000
        serialNode.current.placeholder = random
    }, [])
    return (
        <div className='input-form'>
            <div>
                <label>Name: </label>
                <input value={name} onInput={(e) => { setName(e.target.value) }} placeholder="Monster name" />
            </div>
            <div>
                <label>Card Type: </label>
                <select value={cardType} onChange={(e) => { setCardType(e.target.value) }}>
                    <option>Normal</option>
                    <option>Effects</option>
                </select>
            </div>
            <div>
                <label>Attribute: </label>
                <select value={attributes} onChange={(e) => { setAttributes(e.target.value) }}>
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
                <select value={level} onChange={(e) => { setLevel(e.target.value) }}>
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
            <div>
                <label>Circulation</label>
                <input value={circulation} onInput={(e) => { setCirculation(e.target.value) }} placeholder="Limited edition" />
            </div>
            <div>
                <label>Set-ID: </label>
                <input value={id} onInput={(e) => { setId(e.target.value) }} placeholder="KN-01" maxLength="5" />
            </div>
            <div>
                <label>Type: </label>
                <input value={type} onInput={(e) => { setType(e.target.value) }} placeholder="Dragon/Warrior" maxLength="20" />
            </div>
            <div>
                <label>Description: </label>
                <textarea onInput={(e) => { setDescription(e.target.value) }} value={description}></textarea>
            </div>
            <div className='ip-atk-def'>
                <label>ATK / DEF: </label>
                <input maxLength={4} onInput={(e) => { setAtk(e.target.value) }} value={atk} placeholder="3000" />
                <input maxLength={4} onInput={(e) => { setDef(e.target.value) }} value={def} placeholder="2800" />
            </div>
            <div>
                <label>Creator: </label>
                <input value={creator} onInput={(e) => { setCreator(e.target.value) }} placeholder="Your name" />
            </div>
            <div>
                <label>Year: </label>
                <input ref={yearNode} value={year} onInput={(e) => { setYear(e.target.value) }} />
            </div>
            <div>
                <label>Serial number: </label>
                <input ref={serialNode} value={serialNumber} onInput={(e) => { setSerialNumber(e.target.value) }} />
            </div>
        </div>
    )
}
export default InputForm