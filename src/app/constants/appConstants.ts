import { appConstantsType } from "../types/appConstantsType";


const appConstants: appConstantsType = {
  URL_GREEN: "https://api.green-api.com/",
  methodApi: {
    getSettings: "getSettings",
    setSettings: "SetSettings",
    sendMessage: "sendMessage",
    receiveNotification: "receiveNotification",
    getContactInfo: "GetContactInfo",
    getChats: 'getChats',
    getAvatar: 'getAvatar',
    getContacts: 'getContacts',
    getContact: 'getContactInfo',
    getChatHistory: 'GetChatHistory',
    lastIncomingMessages: 'lastIncomingMessages',
    deleteNotification: 'DeleteNotification',
  },
};

export { appConstants };
