const addkey=document.querySelector("#addkey");
const addvalue=document.querySelector("#addvalue");
const delkey=document.querySelector("#deletekey");

const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

add.addEventListener("click",function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
})
del.addEventListener("click",function deleteItem(e){
    sessionStorage.removeItem(delkey.value);
})
clear.addEventListener("click",function clearItems(e){
    sessionStorage.clear();
})