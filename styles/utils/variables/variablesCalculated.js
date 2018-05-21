import { foreground } from '../styleFunctions';
import { basicColors } from './variables';

export const colorsFgCalculated = {
  main: foreground(basicColors.main),
  secondary: foreground(basicColors.secondary),
  alert: foreground(basicColors.red),
  success: foreground(basicColors.green),
  warning: foreground(basicColors.yellow),
  info: foreground(basicColors.lightblue),
};
