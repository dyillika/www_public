function getJson(url, params, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.onload = function () {
        if (xhr.status != 200) {
            error()
        } else {
            success(JSON.parse(xhr.response))
        }
    }
    xhr.onerror = error()
    xhr.send();
}
getJson("http://www.geoplugin.net/json.gp?lang=ru",{}, function (data) {
    document.getElementById('location').innerText = data.geoplugin_city
}, function () {
    document.getElementById('location').innerText = ""
})






var slider1 = document.getElementById("myRange1")
var output1 = document.getElementById("outputSum")
output1.innerHTML = slider1.value
slider1.oninput = function () {
    output1.innerHTML = slider1.value
}

