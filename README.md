


# WDP Projekt Zespołowy

## Opis projektu

DO UZUPEŁNIENIA

## Demo

https://wdp-2001-01.netlify.com/

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Konwencje i dobre praktyki


1. Zadania przydzielamy sobie sami
2. Każdy może mieć przypisane do siebie maks dwa zadania
3. **W trakcie realizacji może być jedno zadanie**
4. Na koniec dnia piszemy daily
5. **Nazewnictwo brancha** - to numer taska z jiry
6. Pull Request (PR) powinien zawierać opis czego dotyczy PR i co zostało wykonane oraz link do zadania w JIRA, nazwa PR to numer zadania
7. Nowego brancha zawsze tworzymy z aktualnego mastera -- należy najpierw zaktualizować mastera a następnie stworzyć brancha
   ```
   git checkout master
   git pull
   git checkout -b nazwa_nowego_brancha
   ```
8. **Korzystamy z merga a nie z rebase**
9. Każdy merge do brancha master automatycznie odpali nowy build i 'deploy link' do podglądu strony będzie dostępny z poziomu PR
10. **Przed commit-em zmian, upewnij się czy dodajesz tylko pliki na których pracowałeś w ramach zadania (`git status`)**
11. **Używamy języka polskiego w opisach i podczas review**
12. **Commit zapisujemy po angielsku** - opis commit-a powinien odpowiadać wprowadzonej zmianie
13. Używamy ES6 przy pisaniu JavaScript

## Praca w zespole

1. Projekt jest zespołowy a nie indywidualny
   - jeżeli chcemy wprowadzić jakąś zmianę w projekcie, konsultujemy to z całym zespołem
   - odnosimy się do siebie z szacunkiem
   - staramy się pomagać sobie nawzajem

