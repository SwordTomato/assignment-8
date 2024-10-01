window.onload = pageLoad;

function pageLoad(){
	var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        showData(JSON.parse(xhr.responseText));
    }; 
    xhr.onerror = function() { 
        alert("ERROR!"); 
    }; 
    xhr.send();
}

function showData(data){
	var alldiv = document.querySelectorAll("#layer div");
    var keys = Object.keys(data);
    for (i=0; i < alldiv.length; i++)
    {
        var temp = document.createElement("p");
        temp.innerHTML = data[keys[i]].brandname;
        alldiv[i].appendChild(temp);

        var temp = document.createElement("img");
        temp.setAttribute("src", "pic/" + data[keys[i]].pic)
        alldiv[i].appendChild(temp);

        var temp = document.createElement("p");
        temp.innerHTML = data[keys[i]].price;
        alldiv[i].appendChild(temp);
    }
}

