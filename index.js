const { TelegramClient } = require("telegram")
const { StringSession } = require("telegram/sessions")
const input = require("input")
const dotenv = require("dotenv")
const { NewMessage } = require("telegram/events")
dotenv.config()

const MyCommandsRouter = require("./router.js")

const apiId = parseInt(process.env.API_ID_ORIGIN)
const apiHash = process.env.API_HASH_ORIGIN
const stringSession = new StringSession(process.env.SESSION_STR_ORIGIN);

(async () => {
  console.log("Loading interactive example...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });

  client.addEventHandler(async (e) => {
    const sender = await e.message.getSender()
    const sender_id = sender.id.toString().replace("n", "")

    if (sender_id === process.env.MY_ID) {
        const command = e.message.message
        MyCommandsRouter(client, e.message.peerId.channelId.value.toString(), command)
    }
    
    if (!e.isPrivate) {
        if(e.message.peerId.channelId.value.toString().replace("n", "") === process.env.ZP_ID) {

            const badArr = words.split(" ")
            const randomWord = badArr[Math.floor(Math.random() * badArr.length)]

            if (sender_id !== process.env.MY_ID) {
                if (sender_id == process.env.TARGET_ID)
                     await client.sendMessage(process.env.ZP_ID, {
                     message: `Дора ${randomWord}.`
                })
                else 
                    await client.sendMessage(process.env.ZP_ID, {
                     message: `${sender.firstName}, а ты знаешь, что Дора ${randomWord}?`
                    })
            }
               
                console.log(sender_id)
        }
    }

  }, new NewMessage({}))

})();