// function loadContent(day) {
//     fetch(`path/to/${day}.json`)
//       .then(response => response.json())
//       .then(data => {
//         const card1 = document.getElementById('card1');
//         const card2 = document.getElementById('card2');
//         const card3 = document.getElementById('card3');

//         // Update the content of each card
//         card1.querySelector('span').textContent = data[0].upcoming;
//         card1.querySelector('p').textContent = data[0].text;
//         card1.querySelector('img').src = data[0].imagePath;

//         card2.querySelector('h2').textContent = data[1].title;
//         card2.querySelector('p').textContent = data[1].text;
//         card2.querySelector('img').src = data[1].image;

//         card3.querySelector('h2').textContent = data[2].title;
//         card3.querySelector('p').textContent = data[2].text;
//         card3.querySelector('img').src = data[2].image;


//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
function loadContent(day) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "../json/" + day + ".json");

  xhttp.onload = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      var clases = JSON.parse(xhttp.responseText);
      var seleccion = clases[0];
      document.getElementById("imagen").src = seleccion.imagePath;
      document.getElementById("parrafo").innerText = seleccion.upcoming;
      document.getElementById("time").innerText = seleccion.time;
      document.getElementById("ejercicio").innerText = seleccion.title;
      var seleccion1 = clases[1];
      document.getElementById("imagen2").src = seleccion1.imagePath;
      document.getElementById("parrafo2").innerText = seleccion1.upcoming;
      document.getElementById("time2").innerText = seleccion1.time;
      document.getElementById("ejercicio2").innerText = seleccion1.title;
      var seleccion2 = clases[2];
      document.getElementById("imagen3").src = seleccion2.imagePath;
      document.getElementById("parrafo3").innerText = seleccion2.upcoming;
      document.getElementById("time3").innerText = seleccion2.time;
      document.getElementById("ejercicio3").innerText = seleccion2.title;
    }
  };
  xhttp.send();
}
