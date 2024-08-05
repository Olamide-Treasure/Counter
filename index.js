let count = 0

document.getElementById("increase").onclick = function(){
    count += 1
    document.getElementById("label1").textContent = count
}

document.getElementById("decrease").onclick = function(){
    if (count > 0){
        count -= 1
        document.getElementById("label1").textContent = count
    }
}

document.getElementById("reset").onclick = function(){
    count = 0
    document.getElementById("label1").textContent = count
}