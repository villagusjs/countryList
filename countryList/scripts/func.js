function save_data(index,value){
	window.localStorage.setItem(index,value);
}
 
function remove_data(index){
	window.localStorage.removeItem(index);	
}
  
function getData(param) {
    var sess = localStorage.getItem(param);
	return sess;
}