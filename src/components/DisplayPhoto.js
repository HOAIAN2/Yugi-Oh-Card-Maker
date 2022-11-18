import html2canvas from 'html2canvas'
import { useEffect, useRef } from 'react'
import './DisplayPhoto.css'
function DisplayPhoto({ data }) {
    const nameNode = useRef()
    const desNode = useRef()
    const renderNode = useRef()
    const atkDefNode = useRef()
    let description = []
    function handleRender() {
        console.log(renderNode)
        html2canvas(renderNode.current, { scale: 2 }).then((canvas) => {
            const dataURL = canvas.toDataURL()
            const a = document.createElement('a')
            a.href = dataURL
            a.download = 'YuGi_Oh_Custom_Card.png'
            a.click()
        })
    }
    function getDescription() {
        if (data.description) description = data.description.split('\n')
        return description
    }
    function cardType() {
        if (data.cardType === 'Effects') return './material/Effects_Mons.png'
        else return './material/Normal_Mons.png'
    }
    function attributes() {
        switch (data.attributes) {
            case 'Light': return './material/Light.png'
            case 'Dark': return './material/Dark.png'
            case 'Fire': return './material/Fire.png'
            case 'Water': return './material/Water.png'
            case 'Earth': return './material/Earth.png'
            case 'Wind': return './material/Wind.png'
            default: return './material/Light.png'
        }
    }
    function createLevel(number) {
        const arr = []
        for (let i = 0; i < number; i++) {
            arr[i] = i
        }
        return arr
    }
    function autoResize(size) {
        return `${size}px`
    }
    /// The fuck, set size số khác ăn bug nhảy ngay phát mounted đầu
    useEffect(() => {
        let nameSize = 34
        nameNode.current.style.fontSize = nameSize
        if (nameNode.current.offsetHeight > 50) {
            while (nameNode.current.offsetHeight > 50) {
                --nameSize
                nameNode.current.style.fontSize = autoResize(nameSize)
            }
        }
        else {
            nameSize = 34
            nameNode.current.style.fontSize = autoResize(nameSize)
            while (nameNode.current.offsetHeight > 50) {
                --nameSize
                nameNode.current.style.fontSize = autoResize(nameSize)
            }
        }
    })
    useEffect(() => {
        let desSize = 12
        desNode.current.style.fontSize = desSize
        if (desNode.current.offsetHeight > 72) {
            while (desNode.current.offsetHeight > 72) {
                --desSize
                desNode.current.style.fontSize = autoResize(desSize)
            }
        }
        else {
            desSize = 12
            desNode.current.style.fontSize = autoResize(desSize)
            while (desNode.current.offsetHeight > 72) {
                --desSize
                desNode.current.style.fontSize = autoResize(desSize)
            }
        }
    })
    useEffect(() => {
        function isMobile() {
            let check = false;
            if (navigator.userAgent.match(/Android/i)) check = true
            if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) check = true
            if (navigator.userAgent.match(/Opera Mini/i)) check = true
            return check
        }
        if (isMobile()) {
            atkDefNode.current.className = 'atk-def mobile'
        }
    }, [])
    const arr = createLevel(data.level || 0)
    function handleCreator() {
        if (data.year !== '' || data.creator !== '') return <span className='creator'>©{data.year} {data.creator}</span>
        else return <span className='creator'></span>
    }
    return (
        <div onClick={handleRender} ref={renderNode} className='display-photo' title='Click to Download'>
            <img className='main-card' src={cardType()} alt=''></img>
            <div className='name'>
                <p ref={nameNode}>{data.name}</p>
            </div>
            <img className='attribute' src={attributes()} alt='' />
            <div className='levels'>
                {arr.map((level) => {
                    return <img key={level} src='./material/Level.png' alt='' />
                })}
            </div>
            <div className='pic'>
                <img src={data.pic || ''} alt='' />
            </div>
            <div className='cir-id'>
                <span>{data.circulation}</span>
                <span>{data.id}</span>
            </div>
            <div className='type'>
                <span>[</span>
                <span id='type'>{data.type}</span>
                <span>]</span>
            </div>
            <div className='des'>
                <p ref={desNode}>
                    {getDescription().map((des, index) => {
                        return <span key={index}>{des} <br /></span>
                    })}
                </p>
            </div>
            <div ref={atkDefNode} className='atk-def'>
                <div className='atk'>
                    <span>ATK /</span>
                    <span>{data.atk}</span>
                </div>
                <div className='def'>
                    <span>DEF /</span>
                    <span>{data.def}</span>
                </div>
            </div>
            <div className='creator-series'>
                <span className='seris'>{data.serialNumber}</span>
                {handleCreator()}
            </div>
        </div>
    )
}
export default DisplayPhoto