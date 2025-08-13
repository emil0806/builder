import { StatusBar } from 'expo-status-bar';
import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ThemeProvider, { useTheme } from './src/app/providers/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <ThemedRoot />
    </ThemeProvider>
  );
}

function ThemedRoot() {
  const { theme } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: theme.colors.background,
          flex: 1,
        },
        inner: {
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: theme.spacing.xl,
        },
        subtitle: {
          color: theme.colors.textMuted,
          fontSize: theme.typography.sizes.md,
          textAlign: 'center',
        },
        title: {
          color: theme.colors.text,
          fontSize: theme.typography.sizes['2xl'],
          fontWeight: theme.typography.weights.bold,
          marginBottom: theme.spacing.md,
        },
      }),
    [theme]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Builder 🚀</Text>
        <Text style={styles.subtitle}>Welcome to your new Expo + TypeScript project.</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
 
