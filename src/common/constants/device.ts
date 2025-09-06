import { Dimensions } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

export const { insets } = initialWindowMetrics!;
