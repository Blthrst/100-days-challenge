const _ = require("lodash")

async function ExampleMessage(client, chat) {
  await client.sendMessage(chat, {
    message: "Example message sent via ExampleMessage()",
  });
}

/**
 * @example
 * ```js
 * request: "e.2.msg_text"
 *
 * response: `msg_text
 *            msg_text
 *`
 * ```
 */
async function EchoMessageEdit(client, chat, msg) {
  try {
    const sourceArr = msg?.message.toString().split(".");
    console.log(sourceArr);

    const targetText = sourceArr[2];
    let times = sourceArr[1];
    let response = "";

    while (times != 0) {
      response += targetText + "\n";
      times -= 1;
    }

    await client.editMessage(chat, {
      message: msg.id,
      text: response,
    });
  } catch (e) {
    console.log(e);
  }
}

/**
 * @example
 * ```js
 * request: "s.2.2000.msg_text"
 *
 * response: `msg_text`
 *           `msg_text`
 * ```
 */
async function EchoMessageSend(client, chat, msg) {
  try {
    await client.deleteMessages(chat, [msg], { revoke: true });
    const sourceArr = msg?.message.toString().split(".");
    console.log(sourceArr);

    const delay = sourceArr[2]
    const targetText = sourceArr[3];
    let times = sourceArr[1];

    for (let i = 0; i < times; i++) {
      await new Promise((resolve) =>
        setTimeout(async () => {
          await client.sendMessage(chat, { message: targetText });
          resolve();
        }, delay)
      ); // Multiply the index by the delay to send messages at 2-second intervals
    }

    // while(times != 0) {
    //     setTimeout(async () => {
    //         await client.sendMessage(chat, {
    //             message: targetText
    //         })
    //     }, 2000)
    //     times -= 1
    // }
  } catch (e) {
    console.log(e);
  }
}

async function DeleteMyMessages(client, chat, msg) {
  console.log(msg);
  const msgs = await client.getMessages(chat, {
    limit: 300,
    fromUser: msg.fromId,
  });

  const chunkedMsgs = _.chunk(msgs, 100)

  for (let i = 0; i < chunkedMsgs.length; i++) {
      await new Promise((resolve) =>
        setTimeout(async () => {
                await client.deleteMessages(chat, chunkedMsgs[i], {revoke: true});
                resolve();
            }, 2000)
        )
  }
}

module.exports = {
  ExampleMessage,
  EchoMessageEdit,
  EchoMessageSend,
  DeleteMyMessages,
};
