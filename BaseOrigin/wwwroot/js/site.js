console.log("I'm in");
let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://localhost:5004/home/test\n', true);
xhr.setRequestHeader("Authorization", "secret");
//xhr.withCredentials = true;
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        alert("The response is: " + xhr.responseText);
    }
};
xhr.send(null);