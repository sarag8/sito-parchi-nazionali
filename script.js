
document.addEventListener("DOMContentLoaded", function() {
    // Seleziona tutti i link dei filtri nella sezione delle categorie
    const filterLinks = document.querySelectorAll('.categorie-filtro a');
    // Seleziona tutte le card (gli elementi <a> all'interno di .opere)
    const cards = document.querySelectorAll('.opere a');
  
    // Aggiunge un event listener ad ogni link filtro
    filterLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        // Recupera il valore del dataset, che corrisponde alla categoria da filtrare
        const category = this.dataset.filter;
        setActiveLink(this);
        filterCards(category);
      });
    });
  
    // Funzione per mostrare/nascondere le card in base alla categoria scelta
    function filterCards(category) {
      cards.forEach(card => {
        // Se la categoria è "all", visualizza tutte le card, altrimenti nasconde quelle che non corrispondono
        if (category === "all" || card.classList.contains(category)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    // Funzione per aggiornare lo stato "active" sul link selezionato
    function setActiveLink(activeLink) {
      filterLinks.forEach(link => link.classList.remove("active"));
      activeLink.classList.add("active");
    }
  });



  document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});



document.addEventListener("DOMContentLoaded", function () {
  const carosello = document.querySelector(".traccia-carosello");
  const items = document.querySelectorAll(".traccia-carosello a");
  const itemWidth = items[0].offsetWidth;
  let scrollAmount = 0;

  function autoScroll() {
      scrollAmount += 0.5; // Velocità più fluida
      if (scrollAmount >= itemWidth * items.length) {
          scrollAmount = 0; // Reset per il loop infinito
      }
      carosello.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(autoScroll); // Movimento fluido
  }

  requestAnimationFrame(autoScroll);
});

