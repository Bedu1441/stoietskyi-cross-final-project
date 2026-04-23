import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SavedSessionItem from '../components/SavedSessionItem';
import {
  removeSavedSession,
  updateQuantity,
} from '../redux/slices/savedSessionsSlice';
import { useTheme } from '../context/ThemeContext';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const savedSessions = useSelector((state) => state.savedSessions.items);
  const { theme, colors, toggleTheme } = useTheme();

  const [expandedId, setExpandedId] = useState(null);

  const animateNextLayout = () => {
    LayoutAnimation.easeInEaseOut();
  };

  const handleToggleExpand = useCallback((id) => {
    animateNextLayout();
    setExpandedId((currentId) => (currentId === id ? null : id));
  }, []);

  const handleDecrease = useCallback(
    (item) => {
      animateNextLayout();
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    },
    [dispatch]
  );

  const handleIncrease = useCallback(
    (item) => {
      animateNextLayout();
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity + 1,
        })
      );
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id) => {
      animateNextLayout();
      dispatch(removeSavedSession(id));
    },
    [dispatch]
  );

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
          Saved Sessions
        </Text>

        <Text style={[styles.note, { color: colors.subtext }]}>
          LayoutAnimation is used when items expand, update quantity, or are removed.
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
              expanded={expandedId === item.id}
              onToggleExpand={() => handleToggleExpand(item.id)}
              onDecrease={() => handleDecrease(item)}
              onIncrease={() => handleIncrease(item)}
              onRemove={() => handleRemove(item.id)}
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
    marginBottom: 8,
  },
  note: {
    fontSize: 13,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
  },
});