async function ExampleMessage(client, chat) {
    await client.sendMessage(chat, {
        message: "Example message sent via ExampleMessage()"
    })
}

/**
 * @example
 * ```js
 * request: "e.2.msg_text"
 * 
 * response: `msg_text
 * msg_text
 *`
 * ```
 */
async function EchoMessage(client, chat, command) {
    try {
        const sourceArr = command.split(".")
        console.log(sourceArr)

    const targetText = sourceArr[2]
    let times = sourceArr[1]
    let response = ""

    while(times != 0) {
        response += targetText + "\n"
        times -= 1
    }
    
    await client.sendMessage(chat, {
        message: response
    })

    } catch(e) {
        console.log(e)
    }
}

async function DeleteMyMessages(client, chat) {
    const msgs = await client.getMessages(chat, {
        limit: 300,
        //fromUser: process.env.MY_ID
        })
    await client.deleteMessages(chat, msgs, {revoke: true})
}

module.exports = {
    ExampleMessage,
    EchoMessage,
    DeleteMyMessages
}