import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SessionDetailsScreen = ({ route }) => {
  const itemId = route?.params?.itemId;
  const title = route?.params?.title;
  const body = route?.params?.body;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Session Details</Text>

      <Text style={styles.title}>{title || 'Session not found'}</Text>

      <Text style={styles.meta}>
        Item ID: {itemId ?? 'Not provided'}
      </Text>

      <Text style={styles.body}>
        {body || 'No description available.'}
      </Text>
    </View>
  );
};

export default SessionDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
    padding: 24,
  },
  label: {
    fontSize: 14,
    color: '#2F7A55',
    fontWeight: '600',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2A24',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
  meta: {
    fontSize: 14,
    color: '#6E756F',
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    color: '#1F2A24',
    lineHeight: 24,
  },
});