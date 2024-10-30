const eloLimits = {
    Ferro: 1_000,
    Bronze: 2_000,
    Prata: 5_000,
    Ouro: 7_000,
    Platina: 8_000,
    Ascendente: 9_000,
    Imortal: 10_000
};


function decorator(func, ...args){
    const wrapper = (func, ...args) =>{
        return func(args).replace("_", " ");
    };
    return wrapper(func, args)
}

function eloSearch(exp) {
    if (isNaN(parseInt(exp))) {
        return "Aprendiz";
    }
    for (const chave in eloLimits) {
        if (exp <= eloLimits[chave]) {
            return chave;
        }
    }
    return `Radiante`;
}

function desafioDioMe() {
    const element_nome_heroi = document.getElementById("nome_heroi");
    const element_experience = document.getElementById("experience");
    const element_resultado = document.getElementById("resultado");

    let nome_heroi = element_nome_heroi.value;
    let xp = element_experience.value;

    let elo = decorator(eloSearch, xp);
    console.log(`O Herói de nome ${nome_heroi} está no nível de ${elo}.`);

    element_resultado.innerHTML = `O Herói de nome <b>${nome_heroi}</b> está no nível de <b>${elo}</b>.`;
}

document.getElementById("Forms").addEventListener("submit", (ev) => {
    ev.preventDefault();
    desafioDioMe();
});
