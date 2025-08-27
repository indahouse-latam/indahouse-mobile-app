import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum RootStackScreen {
  EXAMPLE_1 = 'example_1',
  EXAMPLE_2 = 'example_2',
}

export type RootStackParamList = {
  [RootStackScreen.EXAMPLE_1]: undefined;
  [RootStackScreen.EXAMPLE_2]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
