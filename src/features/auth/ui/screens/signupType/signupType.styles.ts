import { StyleSheet } from 'react-native';
import type { Theme } from '@theme/types';

export const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: theme.spacing.xl,
    },
    option: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: theme.spacing.lg,
      marginTop: theme.spacing['2xl'],
    },
    optionText: {
      color: theme.colors.text,
      fontSize: theme.typography.sizes.lg,
      fontWeight: theme.typography.weights.medium,
    }
  });

export default makeStyles;

