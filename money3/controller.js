
var slider1 = document.getElementById("myRange1")
var output1 = document.getElementById("outputSum")
output1.innerHTML = slider1.value
slider1.oninput = function () {
    output1.innerHTML = slider1.value
}

var slider2 = document.getElementById("myRange2")
var output2 = document.getElementById("outputSum2")
output2.innerHTML = slider2.value
slider2.oninput = function () {
    output2.innerHTML = slider2.value
}

var slider3 = document.getElementById("myRange3")
var output3 = document.getElementById("outputSum3")
output3.innerHTML = slider3.value
slider3.oninput = function () {
    output3.innerHTML = slider3.value
}