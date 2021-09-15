function Input() {
    var inputSign = document.getElementById("textBox").value
    var lin = inputSign.length;
    var cost = lin * 5;
    cost = "£" + cost;
    var showCost = document.createElement('p')
    showCost.innerText = cost;
    document.getElementById('popup1container').appendChild(showCost);
    var sign = document.createElement('p')
    sign.innerText = inputSign;
    document.getElementById('popup2container').appendChild(sign);
}