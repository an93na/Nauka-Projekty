# Projekt do którego można trafić po przeczytaniu CV
Główny cel to stworzenie projektu, który wyróżniał by się spośród innych. 
- Ponieważ mam jakieś umiejętności ale nie mogę ich dalej rozwijać bo potrzebuje pracy w której będę mieć motywację i chęć do dalszego działania.
- Bardzo podoba mi się to co robię i chciałabym się dalej rozwijać
- Mam nadzieję, że inność tej aplikacji wywoła uśmiech na twarzy rekrutera.
- Plik w sumie jest dla mnie żebym nie musiała szukać tych komend za każdym razem. Bo pamiętać je pamiętam ale zawsze można zrobić literówkę dlatego lepiej skopiować :D 

## Setup aplikacji
Przy pomocy strony: 
"https://create-react-app.dev/docs/getting-started/"

wpisane komendy: 
npx create-react-app my-app
cd my-app
npm start 
ostatnią komendą uruchamia się aplikacja na porcie "http://localhost:3000/"

## Instalacja react-router-dom i redux

npm install @reduxjs/toolkit react-redux react-router-dom

domumentacja: 
https://redux.js.org/tutorials/quick-start
 
## Instalacja Styli picocss 
(tutaj raczej z niej nie korzytam ale czasem potrzebuje i przyda się)

w terminalu:
npm install @picocss/pico

w index.js
import "@picocss/pico";

## Setup react-router-dom react-redux 

W index.js dodatkowo trzeba zrobić 
Setup react-router-dom dlatego naleczy otoczyć komponent App 
<BrowserRouter>
        <App />
</BrowserRouter>

Setup reduxa w pliku index.js import Provider i otoczenie komponentów
<BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
Provider posiada propsa którym jest store dlatego trzeba go stworzyć
### CDN ...