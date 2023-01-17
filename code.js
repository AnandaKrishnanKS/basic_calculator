function displaydata(data) {
    result.value += data
}

function cleardata() {
    result.value = ""
}

function equal() {
    result.value = eval(result.value)

}

function backspace() {
    result.value = (result.value).slice(0, -1)
}