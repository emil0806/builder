import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { useTheme } from '@shared/ui/theme/ThemeProvider';
import { useProjectList } from '@features/projects/hooks/useProjectList';
import IconTile from '@shared/ui/components/IconTile';
import AddButton from '@shared/ui/components/AddButton';
import FolderIcon from '@assets/icons/folder.svg';
import ChevronDownIcon from '@assets/icons/chevron-down.svg';

const SearchBar: React.FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => {
  const { theme } = useTheme();
  const inputStyle = useMemo(() => ({
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.lg,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    color: theme.colors.text,
    flex: 1,
  }), [theme]);
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder="Søg projekter"
      placeholderTextColor={theme.colors.textMuted}
      style={inputStyle}
    />
  );
};

const Chip: React.FC<{ label: string; onPress?: () => void }> = ({ label, onPress }) => {
  const { theme } = useTheme();
  return (
    <Pressable onPress={onPress} style={{
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radii.pill,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6
    }}>
      <Text style={{ color: theme.colors.text, fontWeight: theme.typography.weights.medium }}>{label}</Text>
      <ChevronDownIcon stroke={theme.colors.text} width={16} height={16} />
    </Pressable>
  );
};

const ProjectRow: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const { theme } = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md, marginBottom: theme.spacing.xl }}>
      <IconTile>
        <FolderIcon stroke={theme.colors.text} width={22} height={22} />
      </IconTile>
      <View>
        <Text style={{ color: theme.colors.text, fontWeight: theme.typography.weights.bold }}>{title}</Text>
        <Text style={{ color: theme.colors.textMuted }}>{subtitle}</Text>
      </View>
    </View>
  );
};

const ProjectsScreen: React.FC = () => {
  const { theme } = useTheme();
  const companyId = 'company_1';
  const { data } = useProjectList(companyId);
  const [q, setQ] = useState('');

  const container = useMemo(() => ({ flex: 1, paddingHorizontal: theme.spacing.xl, paddingTop: theme.spacing.xl, backgroundColor: theme.colors.background }), [theme]);

  return (
    <View style={container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md }}>
        <SearchBar value={q} onChange={setQ} />
        <AddButton inline size={30} onPress={() => { /* TODO: open create project */ }} />
      </View>
      <View style={{ height: theme.spacing.lg }} />
      <View style={{ flexDirection: 'row', gap: theme.spacing.md }}>
        <Chip label="Status" />
        <Chip label="Filter" />
      </View>
      <View style={{ height: theme.spacing.xl }} />
      <ScrollView>
        {data.map((p) => (
          <ProjectRow key={p.id} title={p.caseNo ?? p.id} subtitle={p.name} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProjectsScreen;
