function judgeInputPassWordOrNumber()
{
    var x=document.getElementById("username").value;
    var y=document.getElementById("password").value;
    if(x == ""||y == "")
    {
        alert("未输入号码或密码");
    }
}

function judgeRegistMessage () {
    var name = document.getElementById("registofinput").value;
    var password = document.getElementById("registofinputpass").value;
    var surename = document.getElementById("registofinputsurepass").value;
    var mail = document.getElementById("mailinput").value;
    var phone = document.getElementById("phoneinput").value;
    if(name==""||password==""||surename==""||mail==""||phone=="")
    {
        alert("请输入完整信息")
    }
}