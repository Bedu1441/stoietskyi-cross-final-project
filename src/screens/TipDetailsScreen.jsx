import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FINAL_COLORS } from '../constants/finalConfig';

const TipDetailsScreen = ({ route, navigation }) => {
  const tipId = route?.params?.tipId;
  const title = route?.params?.title;
  const body = route?.params?.body;
  const email = route?.params?.email;

  const hasRequiredData = tipId && title && body;

  if (!hasRequiredData) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Family Tip Details</Text>
        <Text style={styles.title}>Tip not found</Text>

        <Text style={styles.body}>
          Required navigation parameters were not provided.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Family Tip Details</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.meta}>Tip ID: {tipId}</Text>

      <Text style={styles.body}>{body}</Text>

      <Text style={styles.email}>Source: {email}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Tips</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TipDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FINAL_COLORS.background,
    padding: 24,
  },
  label: {
    color: FINAL_COLORS.primary,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
  },
  title: {
    color: FINAL_COLORS.text,
    fontSize: 22,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginBottom: 12,
  },
  meta: {
    color: FINAL_COLORS.subtext,
    marginBottom: 16,
  },
  body: {
    color: FINAL_COLORS.text,
    fontSize: 16,
    lineHeight: 24,
  },
  email: {
    color: FINAL_COLORS.primary,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 18,
  },
  button: {
    marginTop: 28,
    backgroundColor: FINAL_COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: FINAL_COLORS.white,
    fontWeight: '700',
  },
});