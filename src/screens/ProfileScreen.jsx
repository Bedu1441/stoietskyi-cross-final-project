import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SavedSessionItem from '../components/SavedSessionItem';
import { removeSavedSession, updateQuantity } from '../redux/slices/savedSessionsSlice';
import { useTheme } from '../context/ThemeContext';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const savedSessions = useSelector((state) => state.savedSessions.items);
  const { theme, colors, toggleTheme } = useTheme();

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>Profile</Text>

        <TouchableOpacity
          style={[styles.themeButton, { backgroundColor: colors.primary }]}
          onPress={toggleTheme}
        >
          <Text style={[styles.themeButtonText, { color: colors.primaryText }]}>
            Toggle Theme ({theme})
          </Text>
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Saved Sessions (Redux)
        </Text>

        {savedSessions.length === 0 ? (
          <Text style={[styles.emptyText, { color: colors.subtext }]}>
            No saved sessions yet. Add some from the Sessions screen.
          </Text>
        ) : (
          savedSessions.map((item) => (
            <SavedSessionItem
              key={item.id}
              title={item.title}
              quantity={item.quantity}
              onDecrease={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1,
                  })
                )
              }
              onIncrease={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1,
                  })
                )
              }
              onRemove={() => dispatch(removeSavedSession(item.id))}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  themeButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 999,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  themeButtonText: {
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
  },
});