import dotenv from 'dotenv'; // Ładowanie zmiennych środowiskowych
dotenv.config(); // Inicjalizacja dotenv

import { readFileSync, writeFileSync } from 'fs'; // Moduł do obsługi plików
import { OpenAI } from 'openai'; // Importowanie instancji OpenAI

console.log(process.env.OPENAI_API_KEY);

// Inicjalizacja klienta OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Funkcja do wczytywania pliku tekstowego
function readFile(filePath) {
    try {
        return readFileSync(filePath, 'utf-8');
    } catch (error) {
        console.error('Błąd odczytu pliku:', error);
        process.exit(1);
    }
}

// Funkcja do zapisu pliku
function writeFile(filePath, content) {
    try {
        writeFileSync(filePath, content, 'utf-8');
        console.log(`Plik zapisany jako ${filePath}`);
    } catch (error) {
        console.error('Błąd zapisu pliku:', error);
    }
}

// Główna funkcja aplikacji
async function processArticle() {
    const inputFile = 'artykul.txt'; // Nazwa pliku wejściowego
    const outputFile = 'artykul.html'; // Nazwa pliku wyjściowego

    // Odczyt pliku
    const articleContent = readFile(inputFile);

    // Tworzenie promptu
    const prompt = `Stwórz stronę HTML, która zawiera treść tego artykułu w czytelnej formie. Treść artykułu:\n\n${articleContent}`;

    try {
        // Wysłanie zapytania do OpenAI (zmienione na wersję 4.x API)
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',  // Użyj modelu odpowiedniego do Twojej aplikacji
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 1500,
            temperature: 0.7,
        });

        // Pobranie kodu HTML z odpowiedzi
        const htmlCode = response.choices[0].message.content.trim();

        // Zapisanie kodu do pliku
        writeFile(outputFile, htmlCode);
    } catch (error) {
        console.error('Błąd API OpenAI:', error);
    }
}

// Uruchomienie aplikacji
processArticle();
