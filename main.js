if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    let Name = document.querySelector('#Re-Mons-Name-CSS')
    let ATK = document.querySelector('.Re-ATK-CSS')
    let DEF = document.querySelector('.Re-DEF-CSS')
    let Type = document.querySelector('#Re-Mons-Types-CSS')
    let Cir = document.querySelector('#Re-Circulation-CSS')
    Name.style.position = 'absolute'
    ATK.style.position = 'absolute'
    DEF.style.position = 'absolute'
    Type.style.position = 'absolute'
    Cir.style.position = 'absolute'
    Name.style.top = '33px'
    ATK.style.top = '553px'
    DEF.style.top = '553px'
    Type.style.top = '457px'
    Cir.style.top = '435px'
}
function Card_Type() {
    let Mons_Type = 0
    let Card_Type = document.querySelectorAll(".Card-Type")
    if (Card_Type[0].checked) Mons_Type = 0
    if (Card_Type[1].checked) Mons_Type = 1
    return Mons_Type
}
function Get_Monster_Attribute() {
    let Mons_Attribute = document.querySelectorAll(".Input-Attribute")
    let Re_Mons_Attribute = document.querySelector(".Re-Mons-Attribute")
    let Attribute_Index = 0
    let i = 0
    for (i = 0; i < 6; i++) {
        if (Mons_Attribute[i].checked == true) Attribute_Index = i
    }
    switch (Attribute_Index) {
        case 0: Re_Mons_Attribute.src = "/Material/Light.png"; break
        case 1: Re_Mons_Attribute.src = "/Material/Dark.png"; break
        case 2: Re_Mons_Attribute.src = "/Material/Fire.png"; break
        case 3: Re_Mons_Attribute.src = "/Material/Water.png"; break
        case 4: Re_Mons_Attribute.src = "/Material/Earth.png"; break
        case 5: Re_Mons_Attribute.src = "/Material/Wind.png"; break
        default: Re_Mons_Attribute.src = "/Material/Light.png"; break
    }
}
function Get_Monster_Level() {
    let Mons_Level = document.querySelectorAll(".Input-Level")
    let Level_Index = -1
    let i = 0
    for (i = 0; i < 12; i++) {
        if (Mons_Level[i].checked == true) Level_Index = i
    }
    let Re_Level = document.querySelectorAll(".Level")
    for (i = 0; i <= Level_Index; i++) {
        Re_Level[i].style.display = "block"
    }
    for (i = Level_Index + 1; i < 12; i++) {
        Re_Level[i].style.display = "none"
    }
}
function Mons_Typing() {
    let Mons_Types = document.querySelector("#Mons-Types").value
    let Re_Mons_Types = document.querySelector("#Re-Mons-Types")
    if (Card_Type() == 0) {
        if (Mons_Types == '') Re_Mons_Types = "NORMAL"
        else Re_Mons_Types = (Mons_Types + "/NORMAL")
    }
    else {
        if (Mons_Types == '') Re_Mons_Types = "EFFECTS"
        Re_Mons_Types = (Mons_Types + "/EFFECTS")
    }
    document.querySelector("#Re-Mons-Types").textContent = Re_Mons_Types
}
function Images() {
    const Input_File = document.querySelector('input[type=file]')
    if (Input_File.files[0] == undefined) return 0
    const reader = new FileReader()
    reader.onload = function () {
        const img = new Image()
        img.src = reader.result
        document.querySelector(".Re-Images").src = img.src
    }
    reader.readAsDataURL(Input_File.files[0])
    return 1
}
function Generate() {
    let Gen_Button = document.querySelector('.Result-Button')
    Gen_Button.textContent = 'Generating...'
    let Re_Mons_Type = document.querySelector("#Main-Card")
    switch (Card_Type()) {
        case 0: Re_Mons_Type.src = "/Material/Normal_Mons.png"; break
        case 1: Re_Mons_Type.src = "/Material/Effects_Mons.png"; break
        default: Re_Mons_Type.src = "/Material/Normal_Mons.png"; break
    }
    let Mons_Name = document.querySelector("#Mons-Name").value
    let Mons_ATK = document.querySelector("#Mons-ATK").value
    let Mons_DEF = document.querySelector("#Mons-DEF").value
    let Creator = document.querySelector("#Input-Creator").value
    let Series = document.querySelector("#Input-Series").value
    let Year = document.querySelector("#Input-Year").value
    let Circulation = document.querySelector("#Input-Circulation").value
    let Description = document.querySelector("#Input-Description").value
    let ID = document.querySelector("#ID-0").value + "-" + document.querySelector("#ID-1").value
    if (ID == "-") ID = ""
    document.querySelector("#Re-Mons-Name").textContent = Mons_Name
    document.querySelector("#Re-Mons-ATK").textContent = Mons_ATK
    document.querySelector("#Re-Mons-DEF").textContent = Mons_DEF
    if ((Year == "") && (Creator == "")) document.querySelector("#Re-Creator").textContent = ""
    else document.querySelector("#Re-Creator").textContent = "©" + " " + Year + " " + Creator
    document.querySelector("#Re-Series").textContent = Series
    document.querySelector("#Re-Circulation").textContent = Circulation
    document.querySelector("#Re-ID").textContent = ID
    document.querySelector("#Re-Description").textContent = Description
    Get_Monster_Attribute()
    Get_Monster_Level()
    Mons_Typing()
    Images()
    function CheckLoad() {
        let load1 = false, load2 = false, load3 = false
        let Image = document.querySelector('.Re-Images')
        let Type = document.querySelector(".Re-Mons-Attribute")
        if(Images() == 1)
        {
            Re_Mons_Type.addEventListener('load',()=>{
                load1 = true
            })
            Image.addEventListener('load',()=>{
                load2 = true
            })
            Type.addEventListener('load',()=>{
                load3 = true
            })
            let FullCheck = setInterval(()=>{
                let test = load1
                let test2 = load2
                let test3 = load3
                if(test == true && test2 == true && test3 == true)
                {
                    Gen_Button.textContent = 'Generate'
                    clearInterval(FullCheck)
                }
            },0)
        }
        else
        {
            Re_Mons_Type.addEventListener('load',()=>{
                load1 = true
            })
            Type.addEventListener('load',()=>{
                load3 = true
            })
            let FullCheck = setInterval(()=>{
                let test = load1
                let test3 = load3
                if(test == true && test3 == true)
                {
                    Gen_Button.textContent = 'Generate'
                    clearInterval(FullCheck)
                }
            },0)
        }
    }
    CheckLoad()
}