import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import BackButton from '@shared/ui/components/BackButton';
import { useTheme } from '@shared/ui/theme/ThemeProvider';
import { ThemedTextField } from '@shared/ui/components/TextField';
import { ThemedButton } from '@shared/ui/components/Button';
import makeStyles from './signupCompany.styles';

const SignupCompanyScreen: React.FC = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  const [company, setCompany] = useState('');
  const [cvr, setCvr] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <View style={styles.container}>
  <BackButton />
      <View style={styles.titleSpacer} />
      <View style={styles.form}>
        <ThemedTextField placeholder="Virksomhed" value={company} onChangeText={setCompany} />
        <ThemedTextField placeholder="CVR" value={cvr} onChangeText={setCvr} keyboardType="number-pad" />
        <ThemedTextField placeholder="Navn" value={name} onChangeText={setName} />
        <ThemedTextField placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <ThemedTextField placeholder="Adgangskode" value={password} onChangeText={setPassword} secureTextEntry />
        <ThemedTextField placeholder="Bekræft adgangskode" value={password2} onChangeText={setPassword2} secureTextEntry />
        <ThemedButton title="Opret bruger" onPress={() => { /* TODO: hook up */ }} />
      </View>
    </View>
  );
};

export default SignupCompanyScreen;
