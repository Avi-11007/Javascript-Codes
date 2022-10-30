console.log("Ajax Tutorial in one video");
let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);
function buttonClickHandler(){
    console.log('you have clicked fetchdata button');

    const xhr=new XMLHttpRequest();

    xhr.open('GET','harry.txt',true);

    xhr.onprogress=function(){
        console.log("on progress");
    }

    xhr.onload=function(){
        if(this.status==200){
            console.log(this.responseText);
        }
        else{
            console.log("error occured");
        }
    }
    xhr.send();
}
