import React, { useMemo } from 'react';
import { View, Text, Image, Pressable, ViewStyle } from 'react-native';
import { useTheme } from '@shared/ui/theme/ThemeProvider';
import { Link } from 'expo-router';

type Project = { id: string; name: string; imageUrl?: string; caseNo?: string };

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { theme } = useTheme();
  const card = useMemo<ViewStyle>(() => ({
    width: 220,
    height: 130,
    borderRadius: theme.radii.lg,
    backgroundColor: theme.colors.surface,
    overflow: 'hidden',
    ...(theme.shadows.card as ViewStyle),
  }), [theme]);
  const caption = useMemo(() => ({ color: theme.colors.text, marginTop: theme.spacing.sm }), [theme]);
  return (
    <View style={{ marginRight: theme.spacing.lg }}>
      <View style={card}>
        <Image source={{ uri: project.imageUrl || 'https://picsum.photos/400/300' }} style={{ width: '100%', height: '100%' }} />
      </View>
      <Text style={caption}>Sagsnr.: {project.caseNo ?? project.id}</Text>
    </View>
  );
};

const ProjectsWidget: React.FC<{ data: Project[] }> = ({ data }) => {
  const { theme } = useTheme();
  if (!data?.length) return <Text style={{ color: theme.colors.textMuted }}>Ingen aktive projekter</Text>;
  return (
    <View style={{ flexDirection: 'row' }}>
      {data.map((p) => (
        <Link key={p.id} href={`/projects/${p.id}`} asChild>
          <Pressable>
            <ProjectCard project={p} />
          </Pressable>
        </Link>
      ))}
    </View>
  );
};

export default ProjectsWidget;
