import { memo } from "react";
import { useViewer } from "@/entities";
import { useContactSelect } from "@/features/chat/chat-user-list";
import { useSendMessageAction } from "../../model";

interface SendMessageSvgProps {
  active: boolean;
  sendMessage: Function;
}

const SendMessageSvg = memo(({ active, sendMessage }: SendMessageSvgProps) => {
  const { fetchSendMessage } = useSendMessageAction();
  const { activeContact } = useContactSelect();
  const { ApiTokenInstance, IdInstance } = useViewer();

  if (!active) {
    return null;
  }

  const handleSendMessage = () => {
    if (!activeContact || !IdInstance || !ApiTokenInstance) {
      return;
    }

    sendMessage((value: string) => {
      fetchSendMessage({
        instance: IdInstance,
        token: ApiTokenInstance,
        body: {
          chatId: activeContact.chatId,
          message: value,
        },
      });
    });
  };

  return (
    <svg
      onClick={handleSendMessage}
      style={{
        rotate: "45deg",
        cursor: "pointer",
        marginLeft: 20,
        opacity: active ? 1 : 0,
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-send"
      viewBox="0 0 16 16"
    >
      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
    </svg>
  );
});

SendMessageSvg.displayName = "SendMessageSvg";

export { SendMessageSvg };
