// Importowanie wymaganych bibliotek
const fs = require('fs');
const { OpenAI } = require('openai');

// Ustawienie klucza API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Podaj swój klucz API OpenAI
});

// Funkcja do odczytania pliku tekstowego
function readArticle(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

// Funkcja do generowania HTML
async function generateHTML(articleText) {
  const prompt = `
  Przekształć poniższy artykuł do kodu HTML. Struktura ma zawierać:
  - Użycie odpowiednich tagów HTML dla nagłówków, akapitów, list itp.
  - Dodanie tagów <img> w miejscach, gdzie warto dodać grafiki, z atrybutem src="image_placeholder.jpg" i alt="Opis grafiki, który może być użyty do generowania obrazu".
  - Dodanie podpisów pod grafikami w tagach <figcaption>.
  - Nie używaj CSS ani JavaScript w kodzie.
  Artykuł: ${articleText}
  `;

  try {
    // Wysłanie zapytania do OpenAI
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Użyj modelu, który masz dostępny
      messages: [{ role: 'user', content: prompt }],
    });    

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Błąd podczas generowania HTML:', error);
  }
}

// Funkcja do zapisania wygenerowanego HTML do pliku
function saveHTML(content, filePath) {
  fs.writeFileSync(filePath, content, 'utf-8');
}

// Główna funkcja
async function processArticle() {
  try {
    // Wczytanie artykułu z pliku
    const articleText = readArticle('artykul.txt');
    
    // Wygenerowanie kodu HTML
    const htmlContent = await generateHTML(articleText);
    
    // Zapisanie wygenerowanego HTML do pliku
    saveHTML(htmlContent, 'artykul.html');
    console.log('HTML został zapisany w pliku artykul.html');
  } catch (error) {
    console.error('Błąd:', error);
  }
}

// Uruchomienie głównej funkcji
processArticle();
