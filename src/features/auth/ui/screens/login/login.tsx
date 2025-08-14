import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useTheme } from '@shared/ui/theme/ThemeProvider';
import { ThemedTextField } from '@shared/ui/components/TextField';
import { ThemedButton } from '@shared/ui/components/Button';
import makeStyles from './login.styles';

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.titleSpacer} />
      <View style={styles.form}>
        <ThemedTextField placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <ThemedTextField placeholder="Adgangskode" value={password} onChangeText={setPassword} secureTextEntry />
  <ThemedButton title="Login" onPress={() => router.replace('/home')} />
      </View>
      <View style={styles.footer}>
        <Link href="/auth/signupType">
          <Text style={styles.footerLink}>Opret bruger</Text>
        </Link>
      </View>
    </View>
  );
};

export default LoginScreen;
