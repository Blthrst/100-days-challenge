const {
    ExampleMessage,
    EchoMessageEdit,
    EchoMessageSend,
    DeleteMyMessages
} = require("./functions.js")

async function MyCommandsRouter(client, chat, msg) {
        if (msg?.message === "ex")
            await ExampleMessage(client, chat)

        if (msg?.message.startsWith("e."))
            await EchoMessageEdit(client, chat, msg)

        if (msg?.message.startsWith("s."))
            await EchoMessageSend(client, chat, msg)

        if (msg?.message === "clear")
            await DeleteMyMessages(client, chat, msg)

}

module.exports = MyCommandsRouter