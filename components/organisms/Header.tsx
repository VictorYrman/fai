// Atoms Components
import Icon from '../atoms/Icon';

// External Dependencies
import { SafeAreaView } from 'react-native-safe-area-context';

// Styles
import { HeaderStyles } from '@/styles/components/organisms/Header.styles';

const Header = () => {
    return (
        <SafeAreaView style={HeaderStyles.header}>
            <Icon icon="logo" width={100} height={40} />
        </SafeAreaView>
    );
};

export default Header;