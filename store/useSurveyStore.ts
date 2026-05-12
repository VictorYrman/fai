// External Dependencies
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

export type SurveyObject = {
  gender: string;
  age: number;
  height: number;
  weight: number;
  goal: string;
  level: string;
};

type SurveyField = keyof SurveyObject;

type SurveyState = {
  survey: SurveyObject;
  setField: (field: SurveyField, value: string | number) => void;
  resetSurvey: () => void;
};

const DefaultSurvey: SurveyObject = {
  gender: "",
  age: 20,
  height: 150,
  weight: 60,
  goal: "",
  level: "",
};

export const useSurveyStore = create<SurveyState>()(
  persist(
    (set): SurveyState => ({
      survey: DefaultSurvey,
      setField: (field: SurveyField, value: string | number) =>
        set((state: any) => ({
          survey: { ...state.survey, [field]: value },
        })),
      resetSurvey: () => set({ survey: DefaultSurvey }),
    }),
    {
      name: "survey",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
