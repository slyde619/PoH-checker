async function getPOH(walletAddress) {
  const API_ENDPOINT = `https://linea-xp-poh-api.linea.build/poh/${walletAddress}`;

  const response = await fetch(API_ENDPOINT);
  const result = await response.json();

  return result;
}

const form = document.querySelector("#form");
const resultContainer = document.querySelector("#result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  resultContainer.innerHTML = "";

  // Add loading message here
  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Loading...";
  resultContainer.appendChild(loadingMessage);

  const query = document.querySelector("#wallet-address").value.trim();

  if (!query) {
    alert("Input wallet address");
    resultContainer.innerHTML = ""; // Clear loading message
    return;
  }

  const result = await getPOH(query);
  const { isFlagged, poh: proof } = result;

  // Clear loading message before showing result
  resultContainer.innerHTML = "";

  const article = UITemplate();

  resultContainer.append(article);

  if (proof !== true) {
    article.textContent = "Address does not have PoH";
    article.classList.toggle("flagged", true);
    article.classList.toggle("success", false);
  } else {
    article.textContent = "Address has a PoH";
    article.classList.toggle("flagged", false);
    article.classList.toggle("success", true);
  }

  //   form.reset()
});

function UITemplate() {
  const article = document.createElement("article");
  return article;
}
