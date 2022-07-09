function Card_Type() // Hàm này return number để chạy "MONS-TYPES/EFFECTS OR NORMAL"
{
    let Mons_Type = 0;
    let Card_Type = document.querySelectorAll(".Card-Type");
    if (Card_Type[0].checked) Mons_Type = 0;
    else Mons_Type = 1;
    console.log('Monster Type '+ Mons_Type);
    return Mons_Type;
}
function Get_Monster_Attribute()
{
    let Mons_Attribute = document.querySelectorAll(".Input-Attribute"); // Select all Class
    let Re_Mons_Attribute = document.querySelector(".Re-Mons-Attribute");
    let Attribute_Index=0;
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
    console.log(Mons_Level[1].value); // Test kết quả
    // console.log(Mons_Attribute[1]);
    let Level_Index=0;
    let i=0;
    for(i=0; i<12; i++)
    {
        if(Mons_Level[i].checked==true) Level_Index=i;
    }
    console.log(Level_Index); // Test hàm thành công
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
    console.log(Mons_Types);
    let Re_Mons_Types = document.querySelector("#Re-Mons-Types");
    if (Card_Type()==0)
    {
        Re_Mons_Types = ("[" + Mons_Types + "/NORMAL]");
    }
    else
    {
        Re_Mons_Types = ("[" + Mons_Types + "/EFFECTS]");
    }
    console.log(Re_Mons_Types);
    document.querySelector("#Re-Mons-Types").innerHTML = Re_Mons_Types;
}
function Images() // Lấy ảnh 1x1 từ Internet ( CSS cho nó xuống 1:1 rồi)
{
    let Input_img = document.querySelector("#Input-File").value;
    console.log(Input_img);
    let Re_Images = document.querySelector(".Re-Images");
    Re_Images.src = Input_img;
}
function Generate()
{
    let Re_Mons_Type = document.querySelector(".Main-Card");
    if(Card_Type()==0)
    {
        Re_Mons_Type.src = "/Material/Normal_Mons.jpg" ;
    }
    else
    {
        Re_Mons_Type.src = "/Material/Effects_Mons.jpg" ;
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
    document.querySelector("#Re-Mons-Name").innerHTML =  Mons_Name;
    document.querySelector("#Re-Mons-ATK").innerHTML =  Mons_ATK;
    document.querySelector("#Re-Mons-DEF").innerHTML =  Mons_DEF;
    document.querySelector("#Re-Creator").innerHTML = "@"+" "+Year+" "+Creator;
    document.querySelector("#Re-Series").innerHTML = Series;
    document.querySelector("#Re-Circulation").innerHTML = Circulation;
    document.querySelector("#Re-ID").innerHTML = ID;
    document.querySelector("#Re-Description").innerHTML = Description;
    Get_Monster_Attribute();
    Get_Monster_Level();
    Mons_Typing();
    Images();
}