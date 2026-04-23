import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const SessionDetailsScreen = ({ route }) => {
  const { colors } = useTheme();

  const itemId = route?.params?.itemId;
  const title = route?.params?.title;
  const body = route?.params?.body;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.label, { color: colors.primary }]}>Session Details</Text>

      <Text style={[styles.title, { color: colors.text }]}>
        {title || 'Session not found'}
      </Text>

      <Text style={[styles.meta, { color: colors.subtext }]}>
        Item ID: {itemId ?? 'Not provided'}
      </Text>

      <Text style={[styles.body, { color: colors.text }]}>
        {body || 'No description available.'}
      </Text>
    </View>
  );
};

export default SessionDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
  meta: {
    fontSize: 14,
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});