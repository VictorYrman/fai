import { getFirestore } from "@react-native-firebase/firestore";
import { getAuth } from "@react-native-firebase/auth";
import { getStorage } from "@react-native-firebase/storage";

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();