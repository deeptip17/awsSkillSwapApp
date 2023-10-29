import { Text, View } from 'react-native';
import {
    useTheme,
} from '@aws-amplify/ui-react-native';

const MyAppFooter = () => {
    const {
        tokens: { space, fontSizes },
    } = useTheme();
    return (
        <View>
            <Text
                style={{
                    fontSize: fontSizes.xl,
                    paddingTop: space.xxl,
                    textAlign: 'center'
                }}
            > Fun way to learn
                
            </Text>
        </View>
    );
};
export default MyAppFooter