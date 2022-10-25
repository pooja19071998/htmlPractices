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

//display table
var totalData="";
var tab;

function addTable(bid,bname,aut,cat,chk,st)
{
    var tr=document.createElement("tr");

    var td=document.createElement("td");
    td.innerHTML=bid;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=bname;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=aut;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=cat;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=chk;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=st;
    tr.appendChild(td);
    tab.appendChild(tr);
}

function Myfunction()
{
    totalData=String(localStorage.getItem("data")).split("`");
    
    tab=document.getElementById("table");
    var count=0;
    for(var i=0;i<parseInt(totalData.length/6);i++)
    {
        addTable(totalData[count],totalData[count+1],totalData[count+2],totalData[count+3],totalData[count+4],totalData[count+5]);
        count+=6;
    }
    var entry = document.getElementById('entry');

}
function displayDetails(){
    var BookId = document.getElementById('BookId').value;
    var BookName = document.getElementById('BookName').value;
    var Author = document.getElementById('Author').value;
    var cat = document.forms["alldetails"]["selection"].value;
    
  var checkboxes = document.getElementsByName('Catagory');
  var chk = "";
 for (var checkbox of checkboxes)
 {
 if (checkbox.checked) {
    chk=chk+" "+checkbox.value;
}
}
var Status = document.forms["alldetails"]["status"].value;
    if(BookId.length==0 || BookName.length==0 || Author.length==0 || cat.length==0 || chk.length==0|| Status.length==0){
        alert("Please fill all the boxes");
        return false;
    }
   else{
    var count=0;
    var isfound=false;
    for(var i=0;i<parseInt(totalData.length/6);i++)
    {
        if(totalData[count]==BookId)
        {
            isfound=true;
            break;
        }
        count+=6;
    }
    if(!isfound)
    {
        var d = String(localStorage.getItem("data"));
    if(d!="null")
    {
        d=d+BookId+"`"+BookName+"`"+Author+"`"+cat+"`"+chk+"`"+Status+"`";
        localStorage.setItem("data",d);
    }
    else{
        
        d=BookId+"`"+BookName+"`"+Author+"`"+cat+"`"+chk+"`"+Status+"`";
        localStorage.setItem("data",d);
    }
    return true;
    }
    else{
        alert("already exit");
        return false;
    }
}
}

//Reset the table
function ReSet(){
    resetTable();
    var count=0;
    document.getElementById('record').innerHTML="";
    
    document.getElementById("searchEle").value="";
    for(var i=0;i<parseInt(totalData.length/6);i++)
    {
        addTable(totalData[count],totalData[count+1],totalData[count+2],totalData[count+3],totalData[count+4],totalData[count+5]);
        count+=6;
    }
}

//Search 
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

    var count=0;
    var isfound=false;

    if(s.length>0)
    {
        resetTable();
        for(var i=0;i<parseInt(totalData.length/6);i++)
        {
        if(String(totalData[count])==s)
        {
            var isfound=true;
            addTable(totalData[count],totalData[count+1],totalData[count+2],totalData[count+3],totalData[count+4],totalData[count+5]);   
        }
        
        count+=6;
        }

    if(!isfound){

        document.getElementById('record').innerHTML="No record found";
    }
    }
    else{
        alert("Please entered Id");
        if(isfound){
            for(var i=0;i<parseInt(totalData.length/6);i++)
        {
        if(String(totalData[count])==s)
        {
            var isfound=true;
            addTable(totalData[count],totalData[count+1],totalData[count+2],totalData[count+3],totalData[count+4],totalData[count+5]);   
        }
        
        count+=6;
        }
        }
    }
}