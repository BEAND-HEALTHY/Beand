function loadContent(day) {
    fetch(`path/to/${day}.json`)
      .then(response => response.json())
      .then(data => {
        const card1 = document.getElementById('card1');
        const card2 = document.getElementById('card2');
        const card3 = document.getElementById('card3');
        
        // Update the content of each card
        card1.querySelector('span').textContent = data[0].upcoming;
        card1.querySelector('p').textContent = data[0].text;
        card1.querySelector('img').src = data[0].imagePath;
        
        card2.querySelector('h2').textContent = data[1].title;
        card2.querySelector('p').textContent = data[1].text;
        card2.querySelector('img').src = data[1].image;
        
        card3.querySelector('h2').textContent = data[2].title;
        card3.querySelector('p').textContent = data[2].text;
        card3.querySelector('img').src = data[2].image;

        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }