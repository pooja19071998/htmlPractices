
var totalData=[];
function addTable(BookId,BookName,Author,catagory,chk,Status)
{
    var tr=document.createElement("tr");

    var td=document.createElement("td");
    td.innerHTML=BookId;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=BookName;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=Author;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=catagory;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=chk;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=Status;
    tr.appendChild(td);
    tab.appendChild(tr);
}


function intial(){
    tab=document.getElementById("table");
    var jdata=String(localStorage.getItem("data")).trim();
    if(jdata!="null" && jdata!="[]")
    {
        var obj = JSON.parse(jdata);
        for(var i=0;i<obj.length;i++)
        {
            totalData.push(obj[i]);
        }
        for(var i=0;i<totalData.length;i++)
        {
            addTable(totalData[i].BookId,totalData[i].BookName,totalData[i].Author,totalData[i].catagory,totalData[i].chk,totalData[i].Status,i);
        }
    }
}


function dispay(){
    var t = {};
    var BookId = document.getElementById('BookId').value;
    var BookName = document.getElementById('BookName').value;
    var Author = document.getElementById('Author').value;
    var catagory = document.forms["alldetails"]["selection"].value;
    var checkboxes = document.getElementsByName('Catagory');
    var chk = "";
    for (var checkbox of checkboxes)
    {
        if (checkbox.checked){
            chk=chk+" "+checkbox.value;
        }
    }
    var Status = document.forms["alldetails"]["status"].value;
    if(BookId.length==0 || BookName.length==0 || Author.length==0 || catagory.length==0 || chk.length==0 || Status==0){
        alert("Please fill all the boxes");
        return false;
    }
    else{
        var d=String(localStorage.getItem("data"));
        if(d!="null"){
            var isFound=false;
            obj=JSON.parse(d);
            for(var i=0;i<obj.length;i++)
            {
               if(String(obj[i].BookId)==BookId)
                {
                     isFound=true;
                        break;
                }
            }
            if(!isFound)
                {
                    var t={};
                    t["BookId"]=BookId;
                    t["BookName"]=BookName;
                    t["Author"]=Author;
                    t["catagory"]=catagory;
                    t["chk"]=chk;
                    t["Status"]=Status;
                    totalData.push(t);
                    d=JSON.stringify(totalData);
                    localStorage.setItem("data",d);
                    return true;
                }
            else
                {
                    alert("exist");
                    return false;
                    
                }        
            }
        else
            {
                //SAVE DATA FOR 1ST TIME
                var model={};
                model["BookId"]=BookId;
                model["BookName"]=BookName;
                model["Author"]=Author;
                model["catagory"]=catagory;
                model["chk"]=chk;
                model["Status"]=Status;
                d=JSON.stringify(model);
                d="["+d+"]";
                localStorage.setItem("data",d);
                return true;
            }  
    }
}


function resetTable(){
    tab.innerHTML="";
    var tr=document.createElement("tr");
    var th = document.createElement("th");
    th.innerHTML="Book Id";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerHTML="Book Name";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerHTML="Author";
    tr.appendChild(th);


    th = document.createElement("th");
    th.innerHTML="Category";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerHTML="SubCategory";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerHTML="Status";
    tr.appendChild(th);

    tab.appendChild(tr);
}

function searchData(){
    var s=String(document.getElementById("searchEle").value);
    var isfound=false;
    var d=String(localStorage.getItem("data"));
    obj1=JSON.parse(d);
    if(s.length>0){
        resetTable();
        for(var i=0;i<totalData.length;i++)
        {
            if(String(obj1[i].BookId)==s)
            {
                var isfound=true;
                addTable(totalData[i].BookId,totalData[i].BookName,totalData[i].Author,totalData[i].catagory,totalData[i].chk,totalData[i].Status,i);
            }  
        }
        if(!isfound){
            document.getElementById('record').innerHTML="No record found";
        }
    }
    else{
        alert("Please entered Id");
        if(isfound){
            for(var i=0;i<totalData.length;i++){
                if(String(obj1[i].BookId)==s){
                    var isfound=true;
                addTable(totalData[i].BookId,totalData[i].BookName,totalData[i].Author,totalData[i].catagory,totalData[i].chk,totalData[i].Status,i);
                }
                
            }
        }
}
}


function ReSet(){
    resetTable();
  
    document.getElementById('record').innerHTML="";
    
    document.getElementById("searchEle").value="";
    for(var i=0;i<totalData.length;i++)
    {
        addTable(totalData[i].BookId,totalData[i].BookName,totalData[i].Author,totalData[i].catagory,totalData[i].chk,totalData[i].Status,i);
        
    }
}

document.getElementById('button').addEventListener('click',function(){
    document.querySelector(".popup").style.display = "flex";
})
document.getElementById('button1').addEventListener('click',function(){
    document.querySelector(".popup").style.display = "none";
    document.getElementById("r1").checked=false;
    document.getElementById("r2").checked=false;
    document.getElementById("catagary1").checked=false;
    document.getElementById("catagory2").checked=false;
    document.getElementById("catagory3").checked=false;
    document.getElementById("catagory").selectedIndex=0;
    document.getElementById("BookId").value="";
    document.getElementById("BookName").value="";
    document.getElementById("Author").value="";
})