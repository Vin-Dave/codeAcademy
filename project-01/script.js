function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject(Error(request.statusText));
      }
    };
    request.onerror = () => {
      reject(Error("Network Error"));
    };
    request.send();
  });
}

// Function that accepts a Callback
function fetchDataWithCallback(callback) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  request.onload = () => {
    if (request.status === 200) {
      callback(null, JSON.parse(request.response));
    } else {
      callback(Error(request.statusText), null);
    }
  };
  request.onerror = () => {
    callback(Error("Network Error"), null);
  };
  request.send();
}

// Event listener for the Promise button
document.getElementById("promiseButton").addEventListener("click", () => {
  fetchDataWithPromise()
    .then((data) => {
      document.getElementById("result").innerHTML = `Title: ${data.title}`;
    })
    .catch((error) => {
      console.error(error);
    });
});

// Event listener for the Callback button
document.getElementById("callbackButton").addEventListener("click", () => {
  fetchDataWithCallback((error, data) => {
    if (error) {
      console.error(error);
    } else {
      document.getElementById("result").innerHTML = `Title: ${data.title}`;
    }
  });
});
