import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const SessionListCard = ({ title, body, onPress, onSave }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.75}>
      <View>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.body} numberOfLines={2}>
          {body}
        </Text>

        <View style={styles.actionsRow}>
          <Text style={styles.link}>Tap to open details</Text>

          {onSave ? (
            <TouchableOpacity
              style={styles.saveButton}
              onPress={(event) => {
                event.stopPropagation();
                onSave();
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8E0D5',
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2A24',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  body: {
    fontSize: 14,
    color: '#6E756F',
    lineHeight: 20,
  },
  actionsRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2F7A55',
  },
  saveButton: {
    backgroundColor: '#2F7A55',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});

export default SessionListCard;