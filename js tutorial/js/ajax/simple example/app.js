(() => {
  let httpRequest;
  document.getElementById("ajaxButton").addEventListener("click", makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert("Giving up :( Cannot create an XMLHTTP instance");
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open("GET", "index.html");
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const text = document.createElement("div");
        text.textContent = httpRequest.responseText;
        document.body.appendChild(text);
      } else {
        alert("There was a problem with the request.");
      }
    }
  }
})();
