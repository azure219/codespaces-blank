const buttons = document.querySelectorAll(".favorite-btn");

function loadFavorites() {

  return JSON.parse(localStorage.getItem("favorites")) || [];

}

function saveFavorites(favorites) {

  localStorage.setItem("favorites", JSON.stringify(favorites));

}

function toggleFavorite(name) {

  const favorites = loadFavorites();

  if (favorites.includes(name)) {

    favorites.splice(favorites.indexOf(name), 1);

  } else {

    favorites.push(name);

  }

  saveFavorites(favorites);
}

function updateButtons() {

  const favorites = loadFavorites();

  buttons.forEach(function (button) {

    button.textContent = favorites.includes(button.dataset.item)
      ? "Remove from favorites"
      : "Add to favorites";

  });
}

buttons.forEach(function (button) {

  button.addEventListener("click", function () {

    toggleFavorite(button.dataset.item);
    updateButtons();
    
  });
});

updateButtons();