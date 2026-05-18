// Atoms Components
import Typography from "../atoms/Typography";

// Molecules Components
import ModalLayout from "../molecules/ModalLayout";
import Input from "../molecules/Input";

// External Dependencies
import { useState } from "react";
import { FlatList, View } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import Button from "../atoms/Button";
import { FAIAssistantModalStyles } from "@/styles/components/organisms/FAIAssistantModal.styles";
import { generateAIResponse } from "@/services/AIService";

type SenderType = "assistant" | "user";

type MessageType = {
  id: string;
  paragraph: string;
  sender: SenderType;
};

// Props Type
type FAIAssistantModalProps = {
  visible: boolean;
  onClose: () => void;
};

const FAIAssistantModal = ({ visible, onClose }: FAIAssistantModalProps) => {
  const [message, setMessage] = useState<string>("");
  const [history, setHistory] = useState<MessageType[]>([]);

  const onClickSendMessage = async () => {
    if (!message.trim()) return;

    const userParagraph = message;
    const userMessageId = `user-${Date.now()}`;

    setMessage("");

    setHistory((previous) => [
      ...previous,
      { id: userMessageId, paragraph: userParagraph, sender: "user" },
    ]);
    try {
      const response = await generateAIResponse(message);

      setHistory((previous) => [
        ...previous,
        {
          id: `assistant-${Date.now()}`,
          paragraph: response,
          sender: "assistant",
        },
      ]);
    } catch (error) {
      setHistory((previous) => [
        ...previous,
        {
          id: `assistant-${Date.now()}`,
          paragraph: "Ошибка связи с ассистентом. Попробуйте позже.",
          sender: "assistant",
        },
      ]);
      console.error(error);
    }
  };

  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <View style={GlobalStyles.contentGap}>
        <Input
          value={message}
          placeholder="Введите сообщение..."
          onChange={(value: string) => setMessage(value)}
        />
        <Button type="gradient" onPress={onClickSendMessage}>
          <Typography type="key" style={GlobalStyles.textDark}>
            ОТПРАВИТЬ СООБЩЕНИЕ
          </Typography>
        </Button>
      </View>

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              FAIAssistantModalStyles.faiAssistantModalValue,
              item.sender === "user" &&
                FAIAssistantModalStyles.faiAssistantModalValueUser,
            ]}
          >
            <Typography
              type="paragraph"
              style={item.sender === "user" && GlobalStyles.textDark}
            >
              {item.paragraph}
            </Typography>
          </View>
        )}
        contentContainerStyle={GlobalStyles.contentGap}
        showsVerticalScrollIndicator={false}
      />
    </ModalLayout>
  );
};

export default FAIAssistantModal;
