module.exports = {
    name: "repo",
    description: "Obter o link do repositório para desenvolvedores",
    execute(message, args) {
        // Verificar se o autor da mensagem tem a permissão necessária, como um desenvolvedor
        // Isso pode ser ajustado de acordo com as suas necessidades
        message.reply(
            "Aqui está o link do repositório para criar pull requests: https://github.com/wesleygurgel/bot_cs_mix"
        );
    },
};
