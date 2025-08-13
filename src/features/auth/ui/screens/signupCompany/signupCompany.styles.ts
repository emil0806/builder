import { StyleSheet } from 'react-native';
import type { Theme } from '@theme/types';

export const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: theme.spacing.xl,
    },
    form: {
      gap: theme.spacing.md,
      marginTop: theme.spacing['3xl'],
    },
    titleSpacer: {
      height: theme.spacing['3xl'],
    },
  });

export default makeStyles;
