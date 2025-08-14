import React, { useMemo } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useTheme } from '@shared/ui/theme/ThemeProvider';
import ProjectsWidget from '@features/home/ui/screens/homeScreen/components/ProjectsWidget';
import TasksWidget from '@features/home/ui/screens/homeScreen/components/TasksWidget';
import { useHomeData } from '../../../hooks/useHomeData';

const HomeScreen: React.FC = () => {
  const { theme } = useTheme();
  // TODO: pull from AuthProvider when available
  const companyId = 'company_1';
  const userId = 'user_1';
  const { projects, tasks, isLoading, hasError } = useHomeData({ companyId, userId });

  const container = useMemo(() => ({ flex: 1, paddingHorizontal: theme.spacing.xl, backgroundColor: theme.colors.background }), [theme]);
  const sectionTitle = useMemo(() => ({
    color: theme.colors.text,
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weights.bold,
    marginTop: theme.spacing['2xl'],
    marginBottom: theme.spacing.md,
  }), [theme]);

  if (isLoading) return <View style={container}><Text style={{ color: theme.colors.text }}>Henter data...</Text></View>;
  if (hasError) return <View style={container}><Text style={{ color: theme.colors.text }}>Der opstod en fejl.</Text></View>;

  return (
    <ScrollView style={container} contentContainerStyle={{ paddingTop: theme.spacing.xl, paddingBottom: theme.spacing['3xl'] }}>
      {/* Optional: a notifications button could go here */}

      <Text style={sectionTitle}>Igangværende projekter</Text>
      <ProjectsWidget data={projects.data ?? []} />

      <Text style={sectionTitle}>Dagens opgaver</Text>
      <TasksWidget data={tasks.data ?? []} />

  {/* Recent posts section can be added later */}
    </ScrollView>
  );
};

export default HomeScreen;
