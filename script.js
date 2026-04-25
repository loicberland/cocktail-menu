const cocktails = [
  {
    name: "Jungle Bird revisite",
    image: "images/Jungle Bird revisite.jpg",
    source: "Photo locale",
    ingredients: [
      ["rhum", "4 cl"],
      ["Campari", "2 cl"],
      ["ananas", "10 cl"],
      ["citron", "1 cl"],
      ["canadou", "1 cl"],
    ],
    method: ["Shaker avec glace", "Servir bien frais"],
  },
  {
    name: "Berry Rum Punch",
    image: "images/Berry Rum Punch.jpg",
    source: "Photo locale",
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
    image: "images/Cherry Negroni.jpg",
    source: "Photo locale",
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
    image: "images/Peach Rum Sour.jpg",
    source: "Photo locale",
    ingredients: [
      ["rhum", "4 cl"],
      ["creme peche", "2 cl"],
      ["citron", "2 cl"],
      ["canadou", "1 cl"],
    ],
    method: ["Shaker energiquement", "Filtrer dans le verre"],
  },
  {
    name: "Cosmopolitan",
    image: "images/Cosmopolitan.jpg",
    source: "Photo locale",
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
    image: "images/Painkiller.jpg",
    source: "Photo locale",
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
    image: "images/Tequila Berry.jpg",
    source: "Photo locale",
    ingredients: [
      ["tequila", "4 cl"],
      ["creme fruits", "2 cl"],
      ["citron", "2 cl"],
      ["canadou", "1 cl"],
    ],
    method: ["Shaker", "Filtrer dans le verre"],
  },
  {
    name: "Godfather",
    image: "images/Godfather.jpg",
    source: "Photo locale",
    ingredients: [
      ["whisky", "4 cl"],
      ["Disaronno", "2 cl"],
      ["Angostura", "quelques traits"],
    ],
    method: ["Construire sur glace", "Remuer doucement"],
  },
  {
    name: "Daiquiri Ananas",
    image: "images/Pineapple Daiquiri twist.jpg",
    source: "Photo locale",
    ingredients: [
      ["rhum", "4 cl"],
      ["ananas", "4 cl"],
      ["citron", "2 cl"],
      ["canadou", "1 cl"],
    ],
    method: ["Shaker", "Servir bien frais"],
  },
  {
    name: "Purple Margarita",
    image: "images/Purple Margarita.jpg",
    source: "Photo locale",
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
    image: "images/Black Forest.jpg",
    source: "Photo locale",
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
    image: "images/Coco Berry.jpg",
    source: "Photo locale",
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
    image: "images/Americano.jpg",
    source: "Photo locale",
    ingredients: [
      ["rosso", "3 cl"],
      ["Campari", "3 cl"],
      ["eau petillante", "top"],
    ],
    method: ["Construire sur glace", "Completer a l'eau petillante"],
  },
  {
    name: "Bianco Tropical",
    image: "images/Bianco Tropical.jpg",
    source: "Photo locale",
    ingredients: [
      ["bianco", "5 cl"],
      ["ananas", "8 cl"],
      ["citron", "1 cl"],
    ],
    method: ["Melanger directement", "Servir bien frais"],
  },
  {
    name: "Rosso Berry",
    image: "images/Rosso Berry.jpg",
    source: "Photo locale",
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
    image: "images/Bianco Peach.jpg",
    source: "Photo locale",
    ingredients: [
      ["bianco", "5 cl"],
      ["creme peche", "2 cl"],
      ["citron", "2 cl"],
      ["canadou", "1 cl"],
    ],
    method: ["Shaker", "Servir bien frais"],
  },
  {
    name: "Blue Caribbean",
    image: "images/Blue Caribbean.jpg",
    source: "Photo locale",
    ingredients: [
      ["rhum", "4 cl"],
      ["curacao", "2 cl"],
      ["ananas", "8 cl"],
      ["citron", "1 cl"],
    ],
    method: ["Shaker"],
  },
  {
    name: "Bianco Peach",
    image: "images/madeleine.webp",
    source: "Photo locale",
    ingredients: [
      ["Cointreau", "2 cl"],
      ["Disaronno", "4 cl"],
      ["ananas", "6 cl"],
    ],
    method: ["Shaker", "Servir bien frais"],
  },
  {
    name: "Blue Caribbean",
    image: "images/Blue Caribbean.jpg",
    source: "Photo locale",
    ingredients: [
      ["rhum", "4 cl"],
      ["curacao", "2 cl"],
      ["ananas", "8 cl"],
      ["citron", "1 cl"],
    ],
    method: ["Shaker"],
  },
];

const shooters = [
  {
    name: "Kamikaze Shot",
    image: "images/Kamikaze Shot.jpg",
    source: "Photo locale",
    ingredients: [
      ["vodka", "2 cl"],
      ["Cointreau", "1 cl"],
      ["citron", "1 cl"],
    ],
    method: ["Shaker avec glace puis servir"],
  },
  {
    name: "Cherry Boom",
    image: "images/Cherry Boom.jpg",
    source: "Photo locale",
    ingredients: [
      ["vodka", "2 cl"],
      ["creme cerise", "2 cl"],
    ],
    method: ["Melanger"],
  },
  {
    name: "Purple Shot",
    image: "images/Purple Shot.jpg",
    source: "Photo locale",
    ingredients: [
      ["vodka", "2 cl"],
      ["creme mure ou myrtille", "2 cl"],
    ],
    method: ["Melanger"],
  },
  {
    name: "Peach Party Shot",
    image: "images/Peach Party Shot.jpg",
    source: "Photo locale",
    ingredients: [
      ["vodka", "2 cl"],
      ["creme peche", "2 cl"],
    ],
    method: ["Melanger"],
  },
  {
    name: "Herbal Fire",
    image: "images/Herbal Fire.jpg",
    source: "Photo locale",
    ingredients: [
      ["Jagermeister", "2 cl"],
      ["citron", "1 cl"],
      ["Tabasco", "1 goutte"],
    ],
    method: ["Melanger"],
  },
  {
    name: "French Shot",
    image: "images/French Shot.jpg",
    source: "Photo locale",
    ingredients: [
      ["vodka", "2 cl"],
      ["Chambord", "2 cl"],
    ],
    method: ["Melanger"],
  },
  {
    name: "Jungle Shot",
    image: "images/Jungle Shot.jpg",
    source: "Photo locale",
    ingredients: [
      ["rhum", "2 cl"],
      ["Campari", "1 cl"],
      ["ananas", "1 cl"],
    ],
    method: ["Melanger"],
  },
  {
    name: "Blue Kamikaze",
    image: "images/Blue Kamikaze.jpg",
    source: "Photo locale",
    ingredients: [
      ["vodka", "2 cl"],
      ["curacao", "1 cl"],
      ["citron", "1 cl"],
    ],
    method: ["Shaker avec glace puis servir"],
  },
  {
    name: "Blue Fire",
    image: "images/Blue Fire.jpg",
    source: "Photo locale",
    ingredients: [
      ["tequila", "2 cl"],
      ["curacao", "1 cl"],
      ["citron", "1 cl"],
    ],
    method: ["Melanger"],
  },
  {
    name: "Fire Shot",
    image: "images/Fire Shot.jpg",
    source: "Photo locale",
    ingredients: [
      ["tequila", "2 cl"],
      ["citron", "1 cl"],
      ["Tabasco", "1 goutte"],
    ],
    method: ["Melanger"],
  },
];

const state = {
  mode: "cocktails",
  selectedIngredients: {
    cocktails: new Set(),
    shooters: new Set(),
  },
};

const cards = document.querySelector("#cards");
const ingredientFilters = document.querySelector("#ingredientFilters");
const clearFilters = document.querySelector("#clearFilters");
const resultsCount = document.querySelector("#resultsCount");
const activeFilters = document.querySelector("#activeFilters");
const drinkCount = document.querySelector("#drinkCount");
const ingredientCount = document.querySelector("#ingredientCount");

const normalize = (value) =>
  value
    .toLocaleLowerCase("fr-FR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const formatIngredientName = (name) =>
  name
    .split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase("fr-FR") + word.slice(1))
    .join(" ");

const ingredientCategories = [
  {
    name: "Alcools",
    ingredients: ["rhum", "gin", "vodka", "tequila", "whisky", "Malibu", "Jagermeister"],
  },
  {
    name: "Jus",
    ingredients: ["ananas", "orange", "citron", "eau petillante"],
  },
  {
    name: "Liquoreux",
    ingredients: [
      "Campari",
      "Cointreau",
      "Disaronno",
      "Angostura",
      "Chambord",
      "Tabasco",
      "curacao",
      "rosso",
      "bianco",
      "creme cassis",
      "creme cerise",
      "creme fruit",
      "creme fruits",
      "creme mure ou myrtille",
      "creme peche",
      "Canadou",
    ],
  },
];

const drinksByMode = {
  cocktails,
  shooters,
};

const getCurrentDrinks = () => drinksByMode[state.mode];

const getSelectedIngredients = () => state.selectedIngredients[state.mode];

const getIngredientsForMode = () =>
  [...new Set(getCurrentDrinks().flatMap((drink) => drink.ingredients.map(([name]) => name)))]
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
  const ingredients = getIngredientsForMode();

  ingredientFilters.innerHTML = ingredientCategories
    .map((category) => {
      const categoryIngredients = category.ingredients.filter((ingredient) => ingredients.includes(ingredient));
      if (!categoryIngredients.length) return "";

      return `
        <div class="ingredient-category">
          <h3>${category.name}</h3>
          <div class="ingredient-category__chips">
            ${categoryIngredients
              .map(
                (ingredient) => `
                  <button class="ingredient-chip" type="button" data-ingredient="${ingredient}">
                    ${formatIngredientName(ingredient)}
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");
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
          .map(([name, amount]) => `<li><strong>${formatIngredientName(name)}</strong><span>${amount}</span></li>`)
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
  const selectedIngredients = getSelectedIngredients();
  const drinks = getCurrentDrinks();

  if (!selectedIngredients.size) return drinks;
  return drinks.filter((drink) => {
    const drinkIngredients = new Set(drink.ingredients.map(([name]) => name));
    return [...selectedIngredients].every((ingredient) => drinkIngredients.has(ingredient));
  });
}

function render() {
  const selectedIngredients = getSelectedIngredients();
  const typeLabel = state.mode === "cocktails" ? "cocktail" : "shooteur";

  const filteredCocktails = getFilteredCocktails();
  renderCards(filteredCocktails);
  resultsCount.textContent = `${filteredCocktails.length} ${typeLabel}${filteredCocktails.length > 1 ? "s" : ""} affiche${filteredCocktails.length > 1 ? "s" : ""}`;
  activeFilters.textContent = selectedIngredients.size
    ? `Filtres: ${[...selectedIngredients].map(formatIngredientName).join(", ")}`
    : "Tous les ingredients";

  document.querySelectorAll(".ingredient-chip").forEach((chip) => {
    chip.classList.toggle("is-active", selectedIngredients.has(chip.dataset.ingredient));
  });

  drinkCount.textContent = getCurrentDrinks().length;
  ingredientCount.textContent = getIngredientsForMode().length;
}

ingredientFilters.addEventListener("click", (event) => {
  const chip = event.target.closest(".ingredient-chip");
  if (!chip) return;
  const ingredient = chip.dataset.ingredient;
  const selectedIngredients = getSelectedIngredients();
  if (selectedIngredients.has(ingredient)) {
    selectedIngredients.delete(ingredient);
  } else {
    selectedIngredients.add(ingredient);
  }
  render();
});

clearFilters.addEventListener("click", () => {
  getSelectedIngredients().clear();
  render();
});

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    document.querySelectorAll(".mode-button").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    renderIngredientFilters();
    render();
  });
});

renderIngredientFilters();
render();
