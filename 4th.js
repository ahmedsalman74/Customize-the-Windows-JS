


function show()
{

var myTimeOut = setTimeout(function () {
    
    var mybtn=document.createElement("button")
    mybtn.innerHTML="This is your link"
    mybtn.style.backgroundColor="green"
    mybtn.style.color="white"
    mybtn.style.marginLeft="540px"
    mybtn.style.margintop="50px"
    mybtn.style.borderRadius="10px"
    mybtn.style.borderColor="green"
    mybtn.style.fontweight="bold"
    mybtn.style.width="180px"
    mybtn.style.height="50px"
    mybtn.style.fontSize="larger"


    document.body.append(mybtn)

}, 3000)

}
let myWindow;
function newwindow()
{
    myWindow = window.open("", "", "width=200,height=100");
    myWindow.document.write("<p>This is 'new window'. I am 200px wide and 100px tall!</p>");
    
}
function closewin(){
    myWindow.close();

}

function moveTo(){
    myWindow.moveTo(500, 100);

}
function moveBy(){
    myWindow.moveBy(250, 250);
}
function resizeTo(){
    myWindow.close();
    myWindow = window.open("", "", "width=200,height=100");
    myWindow.resizeTo(300, 300);
    myWindow.document.write("<p>This is 'resized window'. I am 300px wide and 300px tall!</p>");


}
function resizeBy(){
    myWindow.close();
    myWindow = window.open("", "", "width=200,height=100");
    myWindow.resizeBy(700, 700);
    myWindow.document.write("<p>This is 'resized window by'. I am 700px wide and 700px tall!</p>");

   
}


