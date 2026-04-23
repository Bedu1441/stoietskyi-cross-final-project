import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import dayjs from 'dayjs';
import { useTheme } from '../context/ThemeContext';

const SessionListCard = ({ title, body, onPress, onSave }) => {
  const { colors } = useTheme();

  console.log('Render AFTER:', title);

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>

      <Text style={[styles.body, { color: colors.subtext }]} numberOfLines={2}>
        {body}
      </Text>

      <Text style={[styles.date, { color: colors.subtext }]}>
        Updated: {dayjs().format('DD MMM YYYY')}
      </Text>

      <View style={styles.actionsRow}>
        <Text style={[styles.linkText, { color: colors.primary }]}>Open details</Text>

        <TouchableOpacity
          style={[styles.saveButton, { backgroundColor: colors.primary }]}
          onPress={onSave}
          activeOpacity={0.85}
        >
          <Text style={[styles.saveButtonText, { color: colors.primaryText }]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
  },
  date: {
    marginTop: 8,
    fontSize: 12,
  },
  actionsRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linkText: {
    fontSize: 13,
    fontWeight: '600',
  },
  saveButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  saveButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },
});

export default memo(SessionListCard);