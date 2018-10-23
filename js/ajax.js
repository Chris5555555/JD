function getAjax(url,callback,data){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest;
    }else{
        xhr = ActiveXObject("Microsoft.XMLHTTP");
    }
    if(data){
        url = url+data;
    }
    xhr.open("get",url,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var res = xhr.responseText;
            callback(res);
        }
    }
}