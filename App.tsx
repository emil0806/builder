import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import ThemeProvider, { useTheme } from './src/shared/ui/theme/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <ThemedRoot />
    </ThemeProvider>
  );
}

function ThemedRoot() {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing.xl }}
    >
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.sizes.xl,
          fontWeight: theme.typography.weights.bold,
        }}
      >
        Builder
      </Text>
      <Text style={{ color: theme.colors.textMuted, fontSize: theme.typography.sizes.md }}>
        App root for tests
      </Text>
    </SafeAreaView>
  );
}
 
