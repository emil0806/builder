import React from 'react';
import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect root to /auth (app/auth/index.tsx)
  return <Redirect href="/auth" />;
}
