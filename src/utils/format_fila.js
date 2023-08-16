function format_fila(queuePlayers) {
  let output = "```\n";
  output += "Pos.| Jogador                  | Horário de Chegada     \n";
  output += "----|--------------------------|------------------------\n";

  queuePlayers.forEach((queue, index) => {
    const arrivalTime = new Date(queue.updatedAt).toLocaleString("pt-BR", { timeZone: 'America/Sao_Paulo' });
    output += `${index + 1}.  | ${queue.Player.username.padEnd(25, " ")}| ${arrivalTime}\n`;
  });

  output += "```";
  return output;
}

module.exports = format_fila;
