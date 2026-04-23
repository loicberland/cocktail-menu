const cocktails = [
  {
    name: "Jungle Bird revisite",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cocktail%20orange%20drink%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["rhum", "4 cl"],
      ["Campari", "2 cl"],
      ["ananas", "10 cl"],
      ["citron", "1 cl"],
      ["sirop sucre", "1 cl"],
    ],
    method: ["Shaker avec glace", "Servir bien frais"],
  },
  {
    name: "Berry Rum Punch",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fruity%20cocktails%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["rhum", "4 cl"],
      ["creme cassis", "2 cl"],
      ["ananas", "6 cl"],
      ["orange", "4 cl"],
      ["citron", "1 cl"],
    ],
    method: ["Melanger directement", "Ajouter de la glace"],
  },
  {
    name: "Cherry Negroni",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Negroni%20(cocktail).jpg?width=900",
    source: "Wikimedia Commons",
    ingredients: [
      ["gin", "3 cl"],
      ["Campari", "3 cl"],
      ["creme cerise", "2 cl"],
      ["Angostura", "quelques traits"],
    ],
    method: ["Construire sur glace", "Remuer doucement"],
  },
  {
    name: "Peach Rum Sour",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cocktail%20beverage%20juice%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["rhum", "4 cl"],
      ["creme peche", "2 cl"],
      ["citron", "2 cl"],
      ["sirop", "1 cl"],
    ],
    method: ["Shaker energiquement", "Filtrer dans le verre"],
  },
  {
    name: "Cosmopolitan",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cosmopolitan%20cocktail%20drink.jpg?width=900",
    source: "Wikimedia Commons",
    ingredients: [
      ["vodka", "4 cl"],
      ["Cointreau", "2 cl"],
      ["creme fruit", "2 cl"],
      ["citron", "2 cl"],
    ],
    method: ["Shaker avec glace", "Servir sans glace"],
  },
  {
    name: "Painkiller",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fruity%20cocktails%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["rhum", "4 cl"],
      ["ananas", "4 cl"],
      ["orange", "4 cl"],
      ["Malibu", "2 cl"],
    ],
    method: ["Shaker", "Servir avec glace"],
  },
  {
    name: "Tequila Berry",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cocktail%20orange%20drink%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["tequila", "4 cl"],
      ["creme fruits", "2 cl"],
      ["citron", "2 cl"],
      ["sirop", "1 cl"],
    ],
    method: ["Shaker", "Filtrer dans le verre"],
  },
  {
    name: "Godfather",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Godfather%20cocktail.jpg?width=900",
    source: "Wikimedia Commons",
    ingredients: [
      ["whisky", "4 cl"],
      ["Disaronno", "2 cl"],
      ["Angostura", "quelques traits"],
    ],
    method: ["Construire sur glace", "Remuer doucement"],
  },
  {
    name: "Daiquiri Ananas",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fruity%20cocktails%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["rhum", "4 cl"],
      ["ananas", "4 cl"],
      ["citron", "2 cl"],
      ["sirop", "1 cl"],
    ],
    method: ["Shaker", "Servir bien frais"],
  },
  {
    name: "Purple Margarita",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cosmopolitan%20cocktail%20(52272444120).jpg?width=900",
    source: "Wikimedia Commons",
    ingredients: [
      ["tequila", "4 cl"],
      ["Cointreau", "2 cl"],
      ["citron", "2 cl"],
      ["creme fruits", "2 cl"],
    ],
    method: ["Shaker", "Servir avec un bord citronne"],
  },
  {
    name: "Black Forest",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cocktail%20beverage%20juice%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["vodka", "4 cl"],
      ["creme cerise", "2 cl"],
      ["ananas", "4 cl"],
      ["Angostura", "quelques traits"],
    ],
    method: ["Shaker", "Servir sur glace ou sans glace"],
  },
  {
    name: "Coco Berry",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fruity%20cocktails%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["Malibu", "4 cl"],
      ["creme fruits", "2 cl"],
      ["ananas", "6 cl"],
      ["orange", "4 cl"],
    ],
    method: ["Melanger directement", "Ajouter de la glace"],
  },
  {
    name: "Americano",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Negroni.jpg?width=900",
    source: "Wikimedia Commons",
    ingredients: [
      ["rosso", "3 cl"],
      ["Campari", "3 cl"],
      ["eau petillante", "top"],
    ],
    method: ["Construire sur glace", "Completer a l'eau petillante"],
  },
  {
    name: "Bianco Tropical",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cocktail%20orange%20drink%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["bianco", "5 cl"],
      ["ananas", "8 cl"],
      ["citron", "1 cl"],
    ],
    method: ["Melanger directement", "Servir bien frais"],
  },
  {
    name: "Rosso Berry",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fruity%20cocktails%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["rosso", "5 cl"],
      ["creme fruits", "2 cl"],
      ["eau petillante", "top"],
      ["citron", "un trait"],
    ],
    method: ["Melanger directement", "Completer a l'eau petillante"],
  },
  {
    name: "Bianco Peach",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cocktail%20beverage%20juice%20(Unsplash).jpg?width=900",
    source: "Wikimedia Commons / Unsplash",
    ingredients: [
      ["bianco", "5 cl"],
      ["creme peche", "2 cl"],
      ["citron", "2 cl"],
      ["sirop", "1 cl"],
    ],
    method: ["Shaker", "Servir bien frais"],
  },
];

const state = {
  mode: "cocktails",
  selectedIngredients: new Set(),
};

const cards = document.querySelector("#cards");
const drinkSelect = document.querySelector("#drinkSelect");
const ingredientFilters = document.querySelector("#ingredientFilters");
const clearFilters = document.querySelector("#clearFilters");
const resultsCount = document.querySelector("#resultsCount");
const activeFilters = document.querySelector("#activeFilters");
const emptyState = document.querySelector("#emptyState");
const drinkCount = document.querySelector("#drinkCount");
const ingredientCount = document.querySelector("#ingredientCount");

const normalize = (value) =>
  value
    .toLocaleLowerCase("fr-FR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const ingredients = [...new Set(cocktails.flatMap((drink) => drink.ingredients.map(([name]) => name)))]
  .sort((a, b) => a.localeCompare(b, "fr"));

function getIconName(step) {
  const normalized = normalize(step);
  if (normalized.includes("shaker")) return "cup-soda";
  if (normalized.includes("glace")) return "snowflake";
  if (normalized.includes("melanger") || normalized.includes("remuer")) return "refresh-cw";
  if (normalized.includes("petillante")) return "waves";
  if (normalized.includes("filtrer")) return "filter";
  return "wine";
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function renderIngredientFilters() {
  ingredientFilters.innerHTML = ingredients
    .map(
      (ingredient) => `
        <button class="ingredient-chip" type="button" data-ingredient="${ingredient}">
          ${ingredient}
        </button>
      `,
    )
    .join("");
}

function renderSelect(drinks) {
  drinkSelect.innerHTML = drinks.length
    ? drinks.map((drink) => `<option value="${drink.name}">${drink.name}</option>`).join("")
    : `<option>Aucun cocktail trouve</option>`;
}

function renderCards(drinks) {
  cards.innerHTML = drinks
    .map(
      (drink) => `
        <article class="drink-card" id="${normalize(drink.name).replace(/[^a-z0-9]+/g, "-")}">
          <div class="drink-card__photo">
            <img src="${drink.image}" alt="${drink.name}" loading="lazy" />
            <span class="drink-card__badge">${drink.source}</span>
          </div>
          <div class="drink-card__body">
            <h2>${drink.name}</h2>
            <section>
              <p class="section-title">${icon("list-plus")} Ingredients</p>
              <ul class="ingredient-list">
                ${drink.ingredients
                  .map(([name, amount]) => `<li><strong>${name}</strong><span>${amount}</span></li>`)
                  .join("")}
              </ul>
            </section>
            <section>
              <p class="section-title">${icon("sparkles")} Methode</p>
              <div class="method-steps">
                ${drink.method
                  .map(
                    (step) => `
                      <div class="method-step">
                        <span class="method-icon">${icon(getIconName(step))}</span>
                        <p>${step}</p>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </section>
          </div>
        </article>
      `,
    )
    .join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function getFilteredCocktails() {
  if (!state.selectedIngredients.size) return cocktails;
  return cocktails.filter((drink) => {
    const drinkIngredients = new Set(drink.ingredients.map(([name]) => name));
    return [...state.selectedIngredients].every((ingredient) => drinkIngredients.has(ingredient));
  });
}

function render() {
  const isCocktailMode = state.mode === "cocktails";
  cards.hidden = !isCocktailMode;
  emptyState.hidden = isCocktailMode;
  document.querySelector(".select-wrap").hidden = !isCocktailMode;
  document.querySelector(".filter-panel").hidden = !isCocktailMode;

  if (!isCocktailMode) {
    resultsCount.textContent = "0 shooteur pour le moment";
    activeFilters.textContent = "";
    return;
  }

  const filteredCocktails = getFilteredCocktails();
  renderSelect(filteredCocktails);
  renderCards(filteredCocktails);
  resultsCount.textContent = `${filteredCocktails.length} cocktail${filteredCocktails.length > 1 ? "s" : ""} affiche${filteredCocktails.length > 1 ? "s" : ""}`;
  activeFilters.textContent = state.selectedIngredients.size
    ? `Filtres: ${[...state.selectedIngredients].join(", ")}`
    : "Tous les ingredients";

  document.querySelectorAll(".ingredient-chip").forEach((chip) => {
    chip.classList.toggle("is-active", state.selectedIngredients.has(chip.dataset.ingredient));
  });
}

ingredientFilters.addEventListener("click", (event) => {
  const chip = event.target.closest(".ingredient-chip");
  if (!chip) return;
  const ingredient = chip.dataset.ingredient;
  if (state.selectedIngredients.has(ingredient)) {
    state.selectedIngredients.delete(ingredient);
  } else {
    state.selectedIngredients.add(ingredient);
  }
  render();
});

clearFilters.addEventListener("click", () => {
  state.selectedIngredients.clear();
  render();
});

drinkSelect.addEventListener("change", () => {
  const targetId = normalize(drinkSelect.value).replace(/[^a-z0-9]+/g, "-");
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    document.querySelectorAll(".mode-button").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    render();
  });
});

drinkCount.textContent = cocktails.length;
ingredientCount.textContent = ingredients.length;
renderIngredientFilters();
render();
