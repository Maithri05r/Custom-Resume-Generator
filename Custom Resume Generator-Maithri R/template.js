function addNewTSField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('tsField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter');
    let tsOb=document.getElementById("ts");
    let tsAddButtonOb=document.getElementById("tsAddButton");
    tsOb.insertBefore(newNode, tsAddButtonOb);
}
function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter');
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter');
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}




//generating resume
function generateCV(){
    console.log("generating cv")
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById(
        "contactField").value;
    document.getElementById("emailT").innerHTML=document.getElementById(
            "emailField").value;
    document.getElementById("addressT").innerHTML=document.getElementById(
        "addressField").value;
    document.getElementById("fbT").innerHTML=document.getElementById(
        "fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById(
        "instaField").value;
    document.getElementById("LinkedT").innerHTML=document.getElementById(
        "LinkedField").value;
    document.getElementById('objectiveT').innerHTML = document.getElementById(
        "objectiveField").value;
        let tss=document.getElementsByClassName('tsField')
    let str=''
    for ( let e of tss)
    {
        str =str +`<li> ${e.value} </li>`;
    }
    document.getElementById("tsT").innerHTML = str;
    let wes=document.getElementsByClassName('weField')
    let str1=''
    for ( let e of wes)
    {
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str1;

    let aqs=document.getElementsByClassName('eqField')
    let str2=''
    for(let e of aqs){
        str2 += `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str2;

    let file=document.getElementById('imgField').files[0]
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
    document.getElementById('imgTemplate').src=reader.result;
};
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}
function printCV(){
    window.print();
}