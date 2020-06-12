function check(){
    let name= document.getElementById('txtName').value;
    if(name.length==0){
    alert('hi');
    return false;
}else{
    return true;
}
}