const {
    ExampleMessage,
    EchoMessage,
    DeleteMyMessages
} = require("./functions.js")

async function MyCommandsRouter(client, chat, command) {
        if (command === "ex")
            ExampleMessage(client, chat)

        if (command.startsWith("e."))
            EchoMessage(client, chat, command)

        if (command === "clear")
            DeleteMyMessages(client, chat)

}

module.exports = MyCommandsRouter