// Store
import { ProfileType } from "@/store/useProfileStore";

export const isGenderValid = (gender: string) => {
    if (!gender) {
        return false;
    }

    return true;
};

export const isAgeValid = (age: number) => {
    if (!age || age < 0 || age > 80) {
        return false;
    }

    return true;
};

export const isHeightValid = (height: number) => {
    if (!height || height < 100 || height > 240) {
        return false;
    }

    return true;
};

export const isWeightValid = (weight: number) => {
    if (!weight || weight < 20 || weight > 140) {
        return false;
    }

    return true;
};

export const isGoalValid = (goal: string) => {
    if (!goal || goal !== "weight-loss" && goal !== "muscle-building" && goal !== "keeping-fit") {
        return false;
    }

    return true;
};

export const isLevelValid = (level: string) => {
    if (!level || level !== "beginner" && level !== "intermediate" && level !== "advanced") {
        return false;
    }

    return true;
};

export const areAllSurveyFieldsValid = (profile: ProfileType) => {
    if (isGenderValid(profile.gender) && isAgeValid(profile.age) && isHeightValid(profile.height) && isWeightValid(profile.weight) && isGoalValid(profile.goal) && isLevelValid(profile.level)) {
        return true;
    }

    return false;
}