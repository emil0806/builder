import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link, usePathname } from 'expo-router';
import { useTheme } from '../theme/ThemeProvider';
import HomeIcon from '@assets/icons/home.svg';
import ProjectsIcon from '@assets/icons/projects.svg';
import ChatIcon from '@assets/icons/chat.svg';
import CalendarIcon from '@assets/icons/calendar.svg';
import PersonIcon from '@assets/icons/person.svg';

export type BottomNavProps = {
  hidden?: boolean;
};

const BottomNav: React.FC<BottomNavProps> = ({ hidden }) => {
  const pathname = usePathname();
  const { theme } = useTheme();
  if (hidden) return null;

  const items = [
    { href: '/home', label: 'Hjem', Icon: HomeIcon },
    { href: '/projects', label: 'Projekter', Icon: ProjectsIcon },
    { href: '/chat', label: 'Chat', Icon: ChatIcon },
    { href: '/calendar', label: 'Kalender', Icon: CalendarIcon },
    { href: '/profile', label: 'Profil', Icon: PersonIcon },
  ];

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        borderTopColor: theme.colors.border,
        borderTopWidth: 1,
        paddingBottom: theme.spacing.lg,
        paddingTop: theme.spacing.md,
        paddingHorizontal: theme.spacing.xl,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {items.map(({ href, label, Icon }) => {
          const active = pathname?.startsWith(href);
          const stroke = theme.colors.text;
          return (
            <Link key={href} href={href} asChild>
              <Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  paddingHorizontal: theme.spacing.sm,
                }}
                accessibilityRole="button"
                accessibilityLabel={label}
              >
                <Icon width={26} height={26} stroke={stroke} />
                <Text
                  style={{
                    color: theme.colors.text,
                    fontSize: theme.typography.sizes.sm,
                    fontWeight: active ? theme.typography.weights.medium : theme.typography.weights.regular,
                  }}
                >
                  {label}
                </Text>
              </Pressable>
            </Link>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNav;
