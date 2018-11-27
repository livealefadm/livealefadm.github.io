let userScore = 0;
let computerScore = 0;
//caching the DOM
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result>p");
//Selecionar botões
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Seleciona a escolha do computador
const getComputerChoice = () => {
    const choices = ["r", "p", "s"];
    let compChoiceNumber = Math.floor(Math.random() * 3);
    return choices[compChoiceNumber];
}

const convertChoice = choice => {
    if (choice === "r") return "Pedra";
    if (choice === "p") return "Papel";
    if (choice === "s") return "Tesousa";
}

const userWins = (userChoice, compChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    const message = `Player(${convertChoice(userChoice)}) Vence Computador(${convertChoice(compChoice)})`;
    result_p.innerHTML = message;
}
const computerWins = (userChoice, compChoice) => {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const message = `Player(${convertChoice(userChoice)}) Perde para Computador(${convertChoice(compChoice)})`;
    result_p.innerHTML = message;
}

const draw = (userChoice, compChoice) =>{
    const message = `Empate: Player(${convertChoice(userChoice)}) - Computador(${convertChoice(compChoice)})`;
    result_p.innerHTML = message;
}
const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        //user vence computer
        case "rs":
        case "pr":
        case "sp":
            userWins(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            computerWins(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
    }
}

const main = () => {
    //Adicionar botão às imagens selecionadas.
    rock_div.addEventListener("click", () => {
        game("r");
    });

    paper_div.addEventListener("click", () => {
        game("p");
    });

    scissors_div.addEventListener("click", () => {
        game("s");
    });
}
//Função principal
main();