import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useTheme } from '@shared/ui/theme/ThemeProvider';
import SendIcon from '@assets/icons/send.svg';

const ChatScreen: React.FC = () => {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');

  const container = useMemo(() => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing['2xl'],
    paddingBottom: theme.spacing['3xl'], // leave room for bottom nav
  }), [theme]);

  const disclaimerStyle = useMemo(() => ({
    color: theme.colors.textMuted,
    textAlign: 'center' as const,
    lineHeight: 22,
  }), [theme]);

  const inputRow = useMemo(() => ({
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.lg,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  }), [theme]);

  const inputStyle = useMemo(() => ({
    flex: 1,
    color: theme.colors.text,
  }), [theme]);

  const onSend = () => {
    // Placeholder: no backend yet
    setMessage('');
  };

  return (
    <View style={container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={disclaimerStyle}>
          AI kan tage fejl. Der anbefales at{"\n"}dobbelt tjekke inden brug.
        </Text>
      </View>

      <View style={inputRow}>
        <TextInput
          style={inputStyle}
          value={message}
          onChangeText={setMessage}
          placeholder="Hvad kan jeg hjælpe dig med?"
          placeholderTextColor={theme.colors.textMuted}
          returnKeyType="send"
          onSubmitEditing={onSend}
        />
        <Pressable accessibilityRole="button" accessibilityLabel="Send" onPress={onSend} hitSlop={8}>
          <SendIcon stroke={theme.colors.text} width={22} height={22} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;
