// Funkcja do obliczania całki metodą symboliczną
function symbolicIntegral(fStr, a, b) {

    try {
        const integral = Algebrite.integral(fStr).toString(); // Funkcja pierwotna

        const Fa = Algebrite.run(`${integral}`).toString().replace(/x/g, `(${a})`); // Wartość w dolnej granicy
        const Fb = Algebrite.run(`${integral}`).toString().replace(/x/g, `(${b})`); // Wartość w górnej granicy

        // Obliczamy różnicę
        const result = Algebrite.run(`${Fb} - (${Fa})`).toString();

        return { integral, result };
    } catch (error) {
        console.error("Błąd przy obliczaniu całki symbolicznej:", error);
        return null;
    }
}

function solveIntegral() {
    const fStr = document.getElementById("functionInput").value;
    const a = parseFloat(document.getElementById("aInput").value);
    const b = parseFloat(document.getElementById("bInput").value);
    const method = document.getElementById("methodSelect").value;

    let solutionText = "";

    if (method === "symboliczna") {
        solutionText += "<p>Krok 1: Rozważmy całkę:</p>";
        solutionText += `\\[ \\int_{${a}}^{${b}} ${fStr}\\,dx \\]`;

        const result = symbolicIntegral(fStr, a, b);

        if (result) {
            solutionText += "<p>Krok 2: Obliczamy funkcję pierwotną:</p>";
            solutionText += `\\[ F(x) = ${result.integral} \\]`;
            solutionText += "<p>Krok 3: Obliczamy wartość funkcji pierwotnej w granicach:</p>";
            solutionText += `\\[ \\int ${fStr}\\,dx = ${result.integral} \\]`;

            solutionText += "<p>Krok 4: Wynik całki oznaczonej:</p>";
            solutionText += `\\[ \\int_{${a}}^{${b}} ${fStr}\\,dx = ${result.result} \\]`;
        } else {
            solutionText += "<p style='color:red;'>Błąd w obliczaniu całki symbolicznej.</p>";
        }
    } else {
        solutionText += "<p>Krok 1: Rozważmy całkę:</p>";
        solutionText += `\\[ \\int_{${a}}^{${b}} ${fStr}\\,dx \\]`;

        const integral = calculateIntegral(fStr, a, b);
        solutionText += "<p>Krok 2: Obliczamy całkę numerycznie:</p>";
        solutionText += `\\[ \\int_{${a}}^{${b}} ${fStr}\\,dx = ${integral.toFixed(4)} \\]`;
    }

    // Wyświetlamy rozwiązanie
    document.getElementById("solution").innerHTML = solutionText;
    MathJax.typeset();
}

// Funkcja do numerycznego obliczania całki metodą trapezów
function calculateIntegral(fStr, a, b, n = 1000) {
    const f = math.compile(fStr); // Kompilacja funkcji w Math.js
    const h = (b - a) / n;
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        const x = a + i * h;
        const weight = (i === 0 || i === n) ? 0.5 : 1;
        sum += weight * f.evaluate({ x });
    }

    return sum * h;
}