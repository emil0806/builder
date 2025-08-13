import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@shared/ui/theme/ThemeProvider';
import { ThemedTextField } from '@shared/ui/components/TextField';
import { ThemedButton } from '@shared/ui/components/Button';
import makeStyles from './signup.styles';

const SignupScreen: React.FC = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.titleSpacer} />
      <View style={styles.form}>
        <ThemedTextField placeholder="Navn" value={name} onChangeText={setName} />
        <ThemedTextField placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <ThemedTextField placeholder="Adgangskode" value={password} onChangeText={setPassword} secureTextEntry />
        <ThemedButton title="Opret" onPress={() => { /* TODO: hook up */ }} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.info}>Ved at fortsætte accepterer du vores vilkår og betingelser.</Text>
      </View>
    </View>
  );
};

export default SignupScreen;
