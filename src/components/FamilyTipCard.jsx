import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FINAL_COLORS } from '../constants/finalConfig';

const FamilyTipCard = ({ title, body, email, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Family Tip</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.body} numberOfLines={3}>
        {body}
      </Text>

      <Text style={styles.email}>{email}</Text>
    </TouchableOpacity>
  );
};

export default FamilyTipCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: FINAL_COLORS.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: FINAL_COLORS.border,
    padding: 16,
    marginBottom: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#DDEEE5',
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  badgeText: {
    color: FINAL_COLORS.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: FINAL_COLORS.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  body: {
    color: FINAL_COLORS.subtext,
    fontSize: 14,
    lineHeight: 20,
  },
  email: {
    marginTop: 10,
    color: FINAL_COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
  },
});