// Hämta artikelns ID från webbadressen
const params = new URLSearchParams(window.location.search);
const articleId = params.get("id");

// Hitta platsen där artikeln ska visas
const articleElement = document.getElementById("artikel");

// Funktion som skapar HTML-element
function addElement(parent, tag, text, className = "") {
  const element = document.createElement(tag);

  element.textContent = text;

  if (className) {
    element.className = className;
  }

  parent.appendChild(element);
  return element;
}

// Funktion som hämtar artikeln från JSON-filen
async function loadArticle() {
  if (!articleId || !/^[a-z0-9-]+$/.test(articleId)) {
    articleElement.textContent = "Ogiltig artikeladress.";
    return;
  }

  try {
    const response = await fetch("artiklar/" + articleId + ".json");

    if (!response.ok) {
      throw new Error("Artikeln kunde inte hittas.");
    }

    const data = await response.json();

    // Ta bort laddningstexten
    articleElement.innerHTML = "";

    // Visa artikelns rubrik och ingress
    addElement(articleElement, "span", data.kategori, "article-category");
    addElement(articleElement, "h1", data.titel);
    addElement(articleElement, "p", data.ingress, "article-intro");

    // Visa artikelns bild
    if (data.bild && data.bild.src) {
      const image = document.createElement("img");
      image.src = data.bild.src;
      image.alt = data.bild.alt || "";
      articleElement.appendChild(image);
    }

    // Visa artikelns underrubriker och texter
    data.sektioner.forEach(function (section) {
      addElement(articleElement, "h2", section.rubrik);
      addElement(articleElement, "p", section.text);
    });

    document.title = data.titel + " | VÄX Digital";
  } catch (error) {
    articleElement.textContent =
      "Artikeln kunde inte laddas. Kontrollera JSON-filen.";

    console.error(error);
  }
}

// Starta funktionen
loadArticle();
