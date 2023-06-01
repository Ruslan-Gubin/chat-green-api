import { IChatHistory, IReceivedBody } from "../../model";

const createNewMessage = (body: IReceivedBody, myWid: string): IChatHistory => {
  return {
    chatId: body.senderData.chatId,
    idMessage: body.idMessage,
    sendByApi: false,
    statusMessage: "",
    textMessage:
      body.messageData.typeMessage === "textMessage"
        ? body.messageData.textMessageData.textMessage
        : "file",
    timestamp: body.timestamp,
    type: myWid === body.senderData.sender ? "outgoing" : "incoming",
    typeMessage: body.messageData.typeMessage,
  };
};

export { createNewMessage };
