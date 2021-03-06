const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class = "nav">
    <img src = "img/logo.png" class="logo" alt = "">
    <div class=" nav-items">
        <div class = "search">
            <input list = "list-search" class = "search-input" placeholder = "Pesquise o que procura">
            <datalist id = "list-search">
              <option value = "Anzóis">
              <option value = "Iluminação">
              <option value = "Canas de pesca">
              <option value = "Mochilas de pesca">
            </datalist>
            <button class="search-button">Pesquisar</button>
        </div>
        <a href="#"><img src = "img/user.png" alt= ""></a>
        <a href="#"><img src = "img/cart.png" alt= ""></a>
    </div>
    </div>
    <ul class="links-div">
    <li class="link-item"><a href="#home" class="link">home</a></li>
    <li class="link-item"><a href="#" class="link">sobre n&oacutes</a></li>
    <li class="link-item"><a href="#products-div" class="link">produtos</a></li>
    <li class="link-item"><a href="#contacto" class="link">contacto</a></li>
    <li class="link-item"><a href="#" class="link">promo&ccedil&otildees</a></li>
    </ul>
  `;
};

createNav();
