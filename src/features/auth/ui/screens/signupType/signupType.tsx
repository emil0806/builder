import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import BackButton from '@shared/ui/components/BackButton';
import Building from '@assets/icons/building.svg';
import Person from '@assets/icons/person.svg';
import { useTheme } from '@shared/ui/theme/ThemeProvider';
import IconTile from '@shared/ui/components/IconTile';
import makeStyles from './signupType.styles';


const SignupTypeScreen: React.FC = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  return (
    <View style={styles.container}>
  <BackButton />
      <View style={{ height: theme.spacing['3xl'] }} />

      <Link href="/auth/signupCompany" asChild>
        <Pressable style={styles.option}>
          <IconTile>
            <Building width={24} height={24} stroke={theme.colors.text} />
          </IconTile>
          <Text style={styles.optionText}>Virksomhed</Text>
        </Pressable>
      </Link>

      <Link href="/auth/signupPrivate" asChild>
        <Pressable style={styles.option}>
          <IconTile>
            <Person width={24} height={24} stroke={theme.colors.text} />
          </IconTile>
          <Text style={styles.optionText}>Person</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default SignupTypeScreen;
