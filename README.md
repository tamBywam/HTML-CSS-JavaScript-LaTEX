# Całka Oznaczona

## Opis Projektu

Stworzenie aplikacji internetowej do obliczania całki oznaczonej, która umożliwia użytkownikowi wprowadzanie parametrów matematycznych i prezentowanie wyników w postaci krok po kroku, z obliczeniami w LaTeX.

### Technologie

- **HTML**: struktura strony
- **CSS**: stylizacja strony
- **JavaScript**: obliczenia matematyczne i interaktywność
- **LaTeX**: formatowanie wzorów matematycznych
- **MathJax**: renderowanie wzorów LaTeX w JavaScript
- **Math.js** oraz **Algebrite**: biblioteki do obliczeń matematycznych

## Funkcjonalności

1. **Wprowadzenie parametrów**:
   - Funkcja matematyczna: `f(x)`
   - Dolna granica: `a`
   - Górna granica: `b`
   - Metoda obliczeń: **numeryczna** (metoda trapezów) lub **symboliczna** (funkcja pierwotna)

2. **Obliczenie całki**:
   - **Metoda Symboliczna**:
     - Oblicz funkcję pierwotną
     - Oblicz różnicę wartości funkcji pierwotnej w granicach
   - **Metoda Numeryczna**:
     - Stosowanie metody trapezów do obliczeń numerycznych

3. **Prezentacja rozwiązania**:
   - Wyniki obliczeń prezentowane są krok po kroku, z obliczeniami w formie LaTeX, które są renderowane przez MathJax.

## Instalacja

1. **Pobierz pliki**:
   - `index.html`
   - `style.css`
   - `script.js`

2. **Otwórz plik `index.html`** w przeglądarce (np. Chrome, Firefox, Safari).

## Użycie

1. **Wprowadź funkcję matematyczną** (np. `sin(x) + x^2`).
2. **Określ granice całkowania**:
   - Dolna granica: `a`
   - Górna granica: `b`
3. **Wybierz metodę obliczeń**:
   - **Metoda Symboliczna**: Obliczanie za pomocą funkcji pierwotnej.
   - **Metoda Numeryczna**: Obliczanie za pomocą metody trapezów.
4. **Naciśnij przycisk "Oblicz"** – aplikacja pokaże rozwiązanie z obliczeniami w LaTeX.

## Przykład:

**Funkcja**: `sin(x) + x^2`  
**Granice**:
- Dolna granica: `0`
- Górna granica: `3.1416`
**Metoda**: **Symboliczna**

**Wynik**:
1. Oblicz funkcję pierwotną: \( F(x) = -\cos(x) + \frac{x^3}{3} \)
2. Oblicz wartość funkcji w granicach: \( F(3.1416) - F(0) \)
3. Ostateczny wynik: \( \int_{0}^{\pi} \left( \sin(x) + x^2 \right) \, dx = 3.8696 \)

## Struktura Plików

- `index.html` – główny plik HTML aplikacji
- `style.css` – plik z definicją stylów
- `script.js` – plik JavaScript z logiką obliczeń i interakcji

## Wykorzystane Biblioteki

- **MathJax** – renderowanie wzorów matematycznych LaTeX
- **Algebrite** – obliczenia symboliczne w JavaScript
- **Math.js** – obliczenia numeryczne w JavaScript

## Licencja

Projekt dostępny na licencji [MIT](https://opensource.org/licenses/MIT).