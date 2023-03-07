const matricula = document.querySelector("#matricula");
const senha = document.querySelector("#senha");

function autenticar() {
  let data = {
    matricula: matricula.value,
    senha: senha.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/corretor/login", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info.id != undefined) {
        localStorage.setItem("corretor", JSON.stringify(info));

        window.location.href = "./home.html";
      } else {
        alert(info.msg);
      }
    });
}
