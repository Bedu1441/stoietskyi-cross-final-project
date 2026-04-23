import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const SavedSessionItem = ({
  title,
  quantity,
  expanded,
  onToggleExpand,
  onDecrease,
  onIncrease,
  onRemove,
}) => {
  const { colors } = useTheme();

  console.log('Render AFTER:', title);

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <TouchableOpacity onPress={onToggleExpand} activeOpacity={0.8}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.hint, { color: colors.subtext }]}>
          Tap to {expanded ? 'collapse' : 'expand'}
        </Text>
      </TouchableOpacity>

      {expanded ? (
        <View style={styles.expandedContent}>
          <Text style={[styles.description, { color: colors.subtext }]}>
            This saved session is managed by Redux. Quantity changes and removal
            are animated with LayoutAnimation.
          </Text>
        </View>
      ) : null}

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
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  hint: {
    fontSize: 12,
    marginBottom: 10,
  },
  expandedContent: {
    marginBottom: 12,
  },
  description: {
    fontSize: 13,
    lineHeight: 19,
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

export default memo(SavedSessionItem);