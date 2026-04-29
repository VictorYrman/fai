// Atoms Components
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// Molecules Components
import SurveyManager from "@/components/molecules/SurveyManager";

// Organisms Components
import GenderPicker from "@/components/organisms/GenderPicker";
import AgePicker from "@/components/organisms/AgePicker";
import HeightPicker from "@/components/organisms/HeightPicker";
import WeightPicker from "@/components/organisms/WeightPicker";
import GoalPicker from "@/components/organisms/GoalPicker";
import LevelPicker from "@/components/organisms/LevelPicker";

// External Dependencies
import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Alert, View } from "react-native";
import PagerView from "react-native-pager-view";

// Storage
import { useSurveyStore } from "@/store/useSurveyStore";

// Services
import { areAllFieldsValid, isAgeValid, isGenderValid, isGoalValid, isHeightValid, isLevelValid, isWeightValid } from "@/services/ValidationService";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { SurveyStyles } from "@/styles/screens/Survey.styles";

export default function Survey() {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const { survey, setField } = useSurveyStore();
    const router = useRouter();
    const HeaderHeight = useHeaderHeight();

    const pagerRef = useRef<PagerView>(null);
    const totalPages = 6;

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

    const onClickCreateTrainingProgram = () => {
        let errorMessage = "Empty fields:";

        if (!isGenderValid(survey.gender)) {
            errorMessage += " gender;";
        } 
        
        if (!isAgeValid(survey.age)) {
            errorMessage += " age;";
        } 
        
        if (!isHeightValid(survey.height)) {
            errorMessage += " height;";
        } 
        
        if (!isWeightValid(survey.weight)) {
            errorMessage += " weight;";
        } 
        
        if (!isGoalValid(survey.goal)) {
            errorMessage += " goal;";
        } 
        
        if (!isLevelValid(survey.level)) {
            errorMessage += " level;";
        }

        if (areAllFieldsValid(survey)) {
            errorMessage = "";
        }

        if (errorMessage) {
            errorMessage = errorMessage.slice(0, -1) + "!";
            Alert.alert("Survey", errorMessage);
        } else {
            router.navigate("/demo");
        }
    };

    return (
        <GradientBackground style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}>
            <Typography type="title" style={GlobalStyles.textCenter}>TELL US ABOUT YOU</Typography>

            <PagerView ref={pagerRef} style={{ flex: 1 }} initialPage={0} onPageSelected={(event) => setCurrentPage(event.nativeEvent.position)}>
                <View key={"gender"} style={SurveyStyles.surveyContent}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your gender?</Typography>

                    <GenderPicker value={survey.gender} onSelect={(gender: string) => setField("gender", gender)} />
                </View>

                <View key={"age"} style={SurveyStyles.surveyContent}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your age?</Typography>

                    <AgePicker value={survey.age} onSelect={(age: number) => setField("age", age)} />
                </View>

                <View key={"height"} style={SurveyStyles.surveyContent}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your height?</Typography>

                    <HeightPicker value={survey.height} onSelect={(height: number) => setField("height", height)} />
                </View>

                <View key={"weight"} style={SurveyStyles.surveyContent}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your weight?</Typography>

                    <WeightPicker value={survey.weight} onSelect={(weight: number) => setField("weight", weight)} />
                </View>
                
                <View key={"goal"} style={SurveyStyles.surveyContent}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your goal?</Typography>

                    <GoalPicker value={survey.goal} onSelect={(goal: string) => setField("goal", goal)} />
                </View>

                <View key={"level"} style={SurveyStyles.surveyContent}>
                    <Typography type="paragraph" style={GlobalStyles.textCenter}>What is your level?</Typography>

                    <LevelPicker value={survey.level} onSelect={(level: string) => setField("level", level)} />
                </View>
            </PagerView>

            {currentPage !== totalPages - 1 ? (
                <SurveyManager currentPage={currentPage} totalPages={totalPages} onPrevious={onPrevious} onNext={onNext} />
            ) : (
                <Button type="gradient" onPress={onClickCreateTrainingProgram}>
                    <Typography type="key" style={GlobalStyles.textDark}>CREATE A TRAINING PROGRAM!</Typography>
                </Button>
            )}
        </GradientBackground>
    );
};