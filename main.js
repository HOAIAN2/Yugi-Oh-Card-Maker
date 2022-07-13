function Card_Type() // Hàm này return number để chạy "MONS-TYPES/EFFECTS OR NORMAL"
{
    let Mons_Type = 0;
    let Card_Type = document.querySelectorAll(".Card-Type");
    if (Card_Type[0].checked) Mons_Type = 0;
    if (Card_Type[1].checked) Mons_Type = 1;
    console.log('Monster Type '+ Mons_Type);
    return Mons_Type;
}
function Get_Monster_Attribute()
{
    let Mons_Attribute = document.querySelectorAll(".Input-Attribute"); // Select all Class
    let Re_Mons_Attribute = document.querySelector(".Re-Mons-Attribute");
    let Attribute_Index=0;
    console.log('Monster Attribute ' + Attribute_Index)
    let i=0;
    for(i=0; i<6; i++)
    {
        if(Mons_Attribute[i].checked==true) Attribute_Index=i;
    }
    switch (Attribute_Index) {
        case 0:
            Re_Mons_Attribute.src = "/Material/Light.png";
            break;
        case 1:
            Re_Mons_Attribute.src = "/Material/Dark.png";
            break;
        case 2:
            Re_Mons_Attribute.src = "/Material/Fire.png";
            break;
        case 3:
            Re_Mons_Attribute.src = "/Material/Water.png";
            break;
        case 4:
            Re_Mons_Attribute.src = "/Material/Earth.png";
            break;
        case 5:
            Re_Mons_Attribute.src = "/Material/Wind.png";
            break;
        default:
            Re_Mons_Attribute.src = "/Material/Light.png";
            break;
    }
}
function Get_Monster_Level() // Hàm này viết hơi sida chút do lười nghiên cứu CSS
{
    let Mons_Level = document.querySelectorAll(".Input-Level"); // Select all Class
    let Level_Index=-1;
    let i=0;
    for(i=0; i<12; i++)
    {
        if(Mons_Level[i].checked==true) Level_Index=i;
    }
    console.log('Monster Levrl ' + Level_Index); // Log Level Monster, -1 là quái thú 0 sao
    let Re_Level = document.querySelectorAll(".Level");
    for(i=0; i<=Level_Index; i++)
    {
        Re_Level[i].style.display="block";
    }
    for(i=Level_Index+1; i<12; i++)
    {
        Re_Level[i].style.display="none";
    }
}
function Mons_Typing() // Hàm đã nhắc ở dòng đầu
{
    let Mons_Types = document.querySelector("#Mons-Types").value;
    console.log('Monster Type' + Mons_Types);
    let Re_Mons_Types = document.querySelector("#Re-Mons-Types");
    if (Card_Type()==0)
    {
        Re_Mons_Types = (Mons_Types + "/NORMAL");
    }
    else
    {
        Re_Mons_Types = (Mons_Types + "/EFFECTS");
    }
    console.log('Final Monster Type ' + Re_Mons_Types);
    document.querySelector("#Re-Mons-Types").textContent = Re_Mons_Types;
}
function Images() // Lấy ảnh 1x1 từ Internet ( CSS cho nó xuống 1:1 rồi)
{
    const Input_File = document.querySelector('input[type=file]');
    console.log(Input_File.file)
    const reader = new FileReader()
    reader.onload = function() {
        const img = new Image()
        img.src = reader.result
        console.log(img.src) ;
        document.querySelector(".Re-Images").src = img.src;
    }
    reader.readAsDataURL(Input_File.files[0]);
}
function Generate()
{
    let Re_Mons_Type = document.querySelector("#Main-Card");
    switch (Card_Type()) {
        case 0:
            Re_Mons_Type.src = "/Material/Normal_Mons.jpg" ;
            break;
        case 1:
            Re_Mons_Type.src = "/Material/Effects_Mons.jpg" ;
            break;
        default:
            Re_Mons_Type.src = "/Material/Normal_Mons.jpg" ;
            break;
    }
    // Nếu chỉ lấy DATA và in ra thì viết vào hàm này luôn
    let Mons_Name = document.querySelector("#Mons-Name").value;
    let Mons_ATK = document.querySelector("#Mons-ATK").value;
    let Mons_DEF = document.querySelector("#Mons-DEF").value;
    let Creator = document.querySelector("#Input-Creator").value;
    let Series = document.querySelector("#Input-Series").value;
    let Year = document.querySelector("#Input-Year").value;
    let Circulation = document.querySelector("#Input-Circulation").value;
    let Description = document.querySelector("#Input-Description").value;
    let ID = document.querySelector("#ID-0").value +"-"+ document.querySelector("#ID-1").value;
    if (ID =="-") ID=""; // Check nếu User không nhập ID
    document.querySelector("#Re-Mons-Name").textContent =  Mons_Name;
    document.querySelector("#Re-Mons-ATK").textContent =  Mons_ATK;
    document.querySelector("#Re-Mons-DEF").textContent =  Mons_DEF;
    if((Year=="")&&(Creator=="")) document.querySelector("#Re-Creator").textContent = ""; // Check nếu User không nhập Year hoặc Creator
    else document.querySelector("#Re-Creator").innerHTML = "&copy;" + " " + Year + " "+ Creator;
    document.querySelector("#Re-Series").textContent = Series;
    document.querySelector("#Re-Circulation").textContent = Circulation;
    document.querySelector("#Re-ID").textContent = ID;
    document.querySelector("#Re-Description").textContent = Description;
    Get_Monster_Attribute();
    Get_Monster_Level();
    Mons_Typing();
    Images();
}