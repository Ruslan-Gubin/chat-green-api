import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/useAppSelector";
import { fetchSendMessage } from "../slice/sendMessageThunk";
import { selectContacts } from "@/features/ChatUserList";
import { selectAuth } from "@/features/LoginCard";

const useSendMessage = () => {
  const { activeContact } = useAppSelector(selectContacts);
  const { ApiTokenInstance, IdInstance } = useAppSelector(selectAuth);
  const [value, setValue] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!textAreaRef.current) return;
    const texarea = textAreaRef.current;

    texarea.style.height = "0px";
    const scrollHeight = texarea.scrollHeight;

    texarea.style.height = scrollHeight + "px";
  }, [textAreaRef, value]);

  const handleSendMessage = useCallback(() => {
    if (
      !textAreaRef.current ||
      !activeContact ||
      !IdInstance ||
      !ApiTokenInstance
    )
      return;
    if (textAreaRef.current.value.length === 0) return;

    dispatch(
      fetchSendMessage({
        instance: IdInstance,
        token: ApiTokenInstance,
        body: {
          chatId: activeContact.chatId,
          message: textAreaRef.current.value,
        },
      })
    );

    textAreaRef.current.value = "";
    textAreaRef.current.style.height = "40px";
  }, [activeContact, ApiTokenInstance, IdInstance, dispatch, textAreaRef]);

  const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(() => e.target.value);
  };

  return { handleSendMessage, handleChangeValue, textAreaRef, value };
};

export { useSendMessage };
