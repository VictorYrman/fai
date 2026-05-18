// Organisms Components
import SettingRow from "./SettingRow";
import MultiSelectModal from "./CheckboxModal";
import { SelectValueType } from "./Filter";
import SelectModal from "./SelectModal";

// External Dependencies
import { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  GoogleAuthProvider,
  linkWithCredential,
} from "@react-native-firebase/auth";

// Config
import { auth } from "@/config/firebase";
import { configureGoogleSignIn } from "@/config/google";

// Store
import { useAuthStore } from "@/store/useAuthStore";
import { useProfileStore } from "@/store/useProfileStore";
import { useReferenceStore } from "@/store/useReferenceStore";
import { useProgramStore } from "@/store/useProgramStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

const UnitsOfMeasurement = [
  { value: "metric", title: "Метрическая (cm, kg)" },
  { value: "imperial", title: "Империческая (ft, lb)" },
];

type ModalType = "none" | "health" | "muscles" | "units";

const Settings = () => {
  const { user, isAnonymous, setUser, signOut } = useAuthStore();
  const { profile, setField, updateProfile, resetProfile } = useProfileStore();
  const { resetProgram } = useProgramStore();
  const { impactPoints, muscleCategories } = useReferenceStore();
  const router = useRouter();

  const [activeModal, setActiveModal] = useState<ModalType>("none");

  const [healthProblems, setHealthProblems] = useState<string[]>(
    profile?.healthProblems,
  );
  const [priorityMuscleCategories, setPriorityMuscleCategories] = useState<
    string[]
  >(profile?.priorityMuscleCategories);
  const [unitsOfMeasurement, setUnitsOfMeasurement] = useState<SelectValueType>(
    profile?.settings.unitsOfMeasurement === "metric"
      ? UnitsOfMeasurement[0]
      : UnitsOfMeasurement[1],
  );
  const [isBotEnabled, setIsBotEnabled] = useState<boolean>(
    profile?.settings.isBotEnabled,
  );

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  useEffect(() => {
    if (!profile) return;

    const saveProfileData = async () => {
      await updateProfile(profile);
    };

    saveProfileData();
  }, [
    healthProblems,
    priorityMuscleCategories,
    unitsOfMeasurement,
    isBotEnabled,
  ]);

  const selectHealthProblems = useMemo(() => {
    if (!impactPoints) return [];
    return impactPoints.map((impactPoint: any) => ({
      value: impactPoint.value,
      title: impactPoint.name,
    }));
  }, [impactPoints]);

  const selectPriorityMuscleCategories = useMemo(() => {
    if (!muscleCategories) return [];
    return muscleCategories.map((muscleCategory: any) => ({
      value: muscleCategory.value,
      title: muscleCategory.name,
    }));
  }, [muscleCategories]);

  const onToggleHealthProblems = (value: string) => {
    setHealthProblems((previous) =>
      previous.includes(value)
        ? previous.filter((item) => item !== value)
        : [...previous, value],
    );
  };

  const onTogglePriorityMuscleCategories = (value: string) => {
    setPriorityMuscleCategories((previous) =>
      previous.includes(value)
        ? previous.filter((item) => item !== value)
        : [...previous, value],
    );
  };

  const onCloseHealthProblemModal = async () => {
    setActiveModal("none");
    setField("healthProblems", healthProblems);
  };

  const onClosePriorityMuscleModal = async () => {
    setActiveModal("none");
    setField("priorityMuscleCategories", priorityMuscleCategories);
  };

  const onCloseUnitsOfMeasurement = async () => {
    setActiveModal("none");
    setField("settings", {
      ...profile.settings,
      unitsOfMeasurement: unitsOfMeasurement.value,
    });
  };

  const onClickSurveyHandler = () => {
    router.navigate("/survey");
  };

  const onClickHealthProblemsHandler = () => {
    setActiveModal("health");
  };

  const onClickPriorityMusclesHandler = () => {
    setActiveModal("muscles");
  };

  const onClickUnitsOfMeasurementHandler = () => {
    setActiveModal("units");
  };

  const onClickGoogleBindingHandler = async () => {
    try {
      const currentUser = auth.currentUser;

      if (!currentUser) return;

      await GoogleSignin.hasPlayServices();
      const { data } = await GoogleSignin.signIn();

      if (!data?.idToken) return;

      const googleCredential = GoogleAuthProvider.credential(data?.idToken);
      const userCredential = await linkWithCredential(
        currentUser,
        googleCredential,
      );
      const user = userCredential.user;

      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickBotHandler = async () => {
    const newIsBotEnabled = !isBotEnabled;
    setIsBotEnabled(newIsBotEnabled);
    setField("settings", {
      ...profile.settings,
      isBotEnabled: newIsBotEnabled,
    });
  };

  const onClickResetHandler = async () => {
    await resetProgram();
    await resetProfile();
  };

  const onClickSignOutHangler = async () => {
    await signOut();
  };

  const settings = [
    {
      icon: "survey",
      title: "Мои параметры",
      show: true,
      action: onClickSurveyHandler,
    },
    {
      icon: "health",
      title: "Ограничения и травмы",
      show: true,
      action: onClickHealthProblemsHandler,
    },
    {
      icon: "muscle",
      title: "Приоритетные группы мышц",
      show: true,
      action: onClickPriorityMusclesHandler,
    },
    {
      icon: "ruler",
      title: "Единицы измерения",
      show: true,
      action: onClickUnitsOfMeasurementHandler,
    },
    {
      icon: "google",
      title: "Привязать Google",
      show: isAnonymous,
      action: onClickGoogleBindingHandler,
    },
    {
      icon: "bot",
      title: "Включить FAI ассистента",
      show: true,
      action: onClickBotHandler,
    },
    {
      icon: "reset",
      title: "Сбросить прогресс",
      show: true,
      action: onClickResetHandler,
    },
    {
      icon: "sign-out",
      title: "Выход",
      show: !!user,
      action: onClickSignOutHangler,
    },
  ];

  return (
    <>
      <View style={GlobalStyles.contentGap}>
        {settings
          .filter((setting: any) => setting.show)
          .map((setting: any) => (
            <SettingRow
              key={setting.icon}
              icon={setting.icon}
              title={setting.title}
              onPress={setting.action}
            />
          ))}
      </View>

      {activeModal === "health" && (
        <MultiSelectModal
          values={healthProblems}
          selectValues={selectHealthProblems}
          visible={activeModal === "health"}
          onClose={onCloseHealthProblemModal}
          onSelect={onToggleHealthProblems}
        />
      )}

      {activeModal === "muscles" && (
        <MultiSelectModal
          values={priorityMuscleCategories}
          selectValues={selectPriorityMuscleCategories}
          visible={activeModal === "muscles"}
          onClose={onClosePriorityMuscleModal}
          onSelect={onTogglePriorityMuscleCategories}
        />
      )}

      {activeModal === "units" && (
        <SelectModal
          values={UnitsOfMeasurement}
          selectedValue={unitsOfMeasurement.value}
          visible={activeModal === "units"}
          onClose={onCloseUnitsOfMeasurement}
          onSelect={async (value: SelectValueType) =>
            setUnitsOfMeasurement(value)
          }
        />
      )}
    </>
  );
};

export default Settings;
