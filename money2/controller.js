
var slider1 = document.getElementById("myRange1")
var output1 = document.getElementById("outputSum")
output1.innerHTML = slider1.value
slider1.oninput = function () {
    output1.innerHTML = slider1.value
}
