const { input } = require("@inquirer/prompts");

const eloLimits = {
    Ferro: 1_000,
    Bronze: 2_000,
    Prata: 5_000,
    Ouro: 7_000,
    Platina: 8_000,
    Ascendente: 9_000,
    Imortal: 10_000,
    Radiante: 100_000,
    Viciado: 1_000_000,
    Grande_Viciado: 10_000_000,
};

function eloSearch(exp) {
    if (isNaN(parseInt(exp))) {
        return "Aprendiz";
    }
    for (const chave in eloLimits) {
        if (exp <= eloLimits[chave]) {
            return chave;
        }
    }
    return `Viciado Master`;
}

async function prompts(msg) {
    const answer = await input({ message: msg });
    return answer;
}

async function desafioDioMeInConsole() {
    const nome_heroi = await prompts("Digite o Nome do herói: ");
    const xp = await prompts("Digite a XP atual: ");
    let elo = eloSearch(xp);
    console.log(`O Herói de nome ${nome_heroi} está no nível de ${elo}`);
}

desafioDioMeInConsole();
