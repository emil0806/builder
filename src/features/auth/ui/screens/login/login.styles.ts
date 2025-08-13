import { StyleSheet } from 'react-native';
import type { Theme } from '../../../../../shared/ui/theme/types';

export const loginStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: theme.spacing.xl,
    },
    footer: {
      alignItems: 'center',
      marginTop: theme.spacing['3xl'],
    },
    footerLink: {
      color: theme.colors.text,
      fontSize: theme.typography.sizes.md,
      textDecorationLine: 'underline',
    },
    form: {
      gap: theme.spacing.md,
      marginTop: theme.spacing['3xl'],
    },
    titleSpacer: {
      height: theme.spacing['3xl'],
    },
  });

  export default loginStyles;
