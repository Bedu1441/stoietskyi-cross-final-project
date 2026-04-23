import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const SavedSessionItem = ({ title, quantity, onDecrease, onIncrease, onRemove }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>

      <View style={styles.row}>
        <View style={styles.quantityRow}>
          <TouchableOpacity
            style={[styles.smallButton, { borderColor: colors.border }]}
            onPress={onDecrease}
          >
            <Text style={[styles.smallButtonText, { color: colors.text }]}>-</Text>
          </TouchableOpacity>

          <Text style={[styles.quantityText, { color: colors.text }]}>
            {quantity}
          </Text>

          <TouchableOpacity
            style={[styles.smallButton, { borderColor: colors.border }]}
            onPress={onIncrease}
          >
            <Text style={[styles.smallButtonText, { color: colors.text }]}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.removeButton, { backgroundColor: colors.danger }]}
          onPress={onRemove}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButtonText: {
    fontSize: 18,
    fontWeight: '700',
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 15,
    fontWeight: '700',
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});

export default SavedSessionItem;