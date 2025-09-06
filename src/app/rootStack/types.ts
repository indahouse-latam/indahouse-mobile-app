import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum RootStackScreen {
  HOME = 'home',
  VERIFICATION_CODE = 'verification_code',
  EXAMPLE_1 = 'example_1',
  EXAMPLE_2 = 'example_2',
}

export type RootStackParamList = {
  [RootStackScreen.HOME]: undefined;
  [RootStackScreen.VERIFICATION_CODE]: undefined;
  [RootStackScreen.EXAMPLE_1]: undefined;
  [RootStackScreen.EXAMPLE_2]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
