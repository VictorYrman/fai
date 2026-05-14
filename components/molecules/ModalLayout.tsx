// Atoms Components
import Icon from "../atoms/Icon";

// External Dependencies
import { Modal, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Constants
import { Colors, IconSize } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { ModalLayoutStyles } from "@/styles/components/molecules/ModalLayout.styles";

// Props Type
type ModalLayoutProps = {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const ModalLayout = ({ visible, children, onClose }: ModalLayoutProps) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
      transparent={false}
    >
      <SafeAreaView style={GlobalStyles.modal}>
        <Pressable onPress={onClose} style={ModalLayoutStyles.modalCloseIcon}>
          <Icon
            icon="close"
            width={IconSize.medium}
            height={IconSize.medium}
            color={Colors.light}
          />
        </Pressable>

        {children}
      </SafeAreaView>
    </Modal>
  );
};

export default ModalLayout;
