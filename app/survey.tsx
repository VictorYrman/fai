// Atoms Components
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// Molecules Components
import SurveyManager from "@/components/molecules/SurveyManager";

// External Dependencies
import { useRef, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import PagerView from "react-native-pager-view";
import { useHeaderHeight } from "@react-navigation/elements";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { SurveyStyles } from "@/styles/screens/Survey.styles";

export default function Survey() {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const pagerRef = useRef<PagerView>(null);
    const totalPages = 6;

    const router = useRouter();
    const HeaderHeight = useHeaderHeight();

    const PaddingTop = HeaderHeight + Spacing.long;

    const onPrevious = () => {
        if (currentPage > 0) {
            pagerRef.current?.setPage(currentPage - 1);
        }
    };

    const onNext = () => {
        if (currentPage < totalPages - 1) {
            pagerRef.current?.setPage(currentPage + 1);
        }
    };

    return (
        <GradientBackground style={[SurveyStyles.survey, { paddingTop: PaddingTop }]}>
            <Typography type="title" style={GlobalStyles.textCenter}>TELL US ABOUT YOU</Typography>

            <PagerView ref={pagerRef} style={{ flex: 1 }} initialPage={0} onPageSelected={(event) => setCurrentPage(event.nativeEvent.position)}>
                <View key={1}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your gender?</Typography>
                </View>

                <View key={2}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your age?</Typography>
                </View>

                <View key={3}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your height?</Typography>
                </View>

                <View key={4}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your weight?</Typography>
                </View>
                
                <View key={5}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your goal?</Typography>
                </View>

                <View key={6} style={[GlobalStyles.contentGap, { justifyContent: "space-between" }]}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your level?</Typography>
                </View>
            </PagerView>

            {currentPage !== totalPages - 1 ? (
                <SurveyManager currentPage={currentPage} totalPages={totalPages} onPrevious={onPrevious} onNext={onNext} />
            ) : (
                <Button type="gradient" onPress={() => router.navigate("/(tabs)")}>
                    <Typography type="key" style={GlobalStyles.textDark}>CREATE A TRAINING PROGRAM!</Typography>
                </Button>
            )}
        </GradientBackground>
    );
};