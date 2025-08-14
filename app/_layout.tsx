import React from 'react';
import { Stack, usePathname } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import ThemeProvider from '../src/shared/ui/theme/ThemeProvider';
import BottomNav from '../src/shared/ui/components/BottomNav';

export default function RootLayout() {
  const pathname = usePathname();
  const hideBottom = pathname?.startsWith('/auth');
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }} />
          <BottomNav hidden={hideBottom} />
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
