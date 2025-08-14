import React, { useMemo } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { useTheme } from '@shared/ui/theme/ThemeProvider';
import IconTile from '@shared/ui/components/IconTile';
import CalendarIcon from '@assets/icons/calendar.svg';

export type Task = { id: string; title: string; time: string };

const TaskRow: React.FC<{ task: Task }> = ({ task }) => {
  const { theme } = useTheme();
  const row = useMemo<ViewStyle>(() => ({ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.lg, marginBottom: theme.spacing.lg }), [theme]);
  const title = useMemo(() => ({ color: theme.colors.text, fontSize: theme.typography.sizes.md, fontWeight: theme.typography.weights.medium }), [theme]);
  const time = useMemo(() => ({ color: theme.colors.textMuted, fontSize: theme.typography.sizes.sm }), [theme]);
  return (
    <View style={row}>
      <IconTile>
        <CalendarIcon width={22} height={22} stroke={theme.colors.text} />
      </IconTile>
      <View>
        <Text style={title}>{task.title}</Text>
        <Text style={time}>{task.time}</Text>
      </View>
    </View>
  );
};

const TasksWidget: React.FC<{ data: Task[] }> = ({ data }) => {
  const { theme } = useTheme();
  if (!data?.length) return <Text style={{ color: theme.colors.textMuted }}>Ingen opgaver i dag</Text>;
  return (
    <View>
      {data.map((t) => (
        <TaskRow key={t.id} task={t} />
      ))}
    </View>
  );
};

export default TasksWidget;
