import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import SessionCard from '../components/SessionCard';
import { useTheme } from '../context/ThemeContext';

const HomeScreen = ({ navigation }) => {
  const { theme, colors, toggleTheme } = useTheme();

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader title="OIKEON" rightBadge="👤" />

        <Text style={[styles.greeting, { color: colors.text }]}>
          Good morning, Sarah 👋
        </Text>

        <Text style={[styles.sub, { color: colors.subtext }]}>
          Ready for today’s family activity?
        </Text>

        <SessionCard
          title="Nature Scavenger Hunt"
          subtitle="Weekly Pick"
          age="Age 4-8"
          duration="45 min"
          backgroundColor={colors.primary}
          large
          ctaText="Start"
        />

        <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={toggleTheme}>
          <Text style={[styles.buttonText, { color: colors.primaryText }]}>
            Toggle Theme ({theme})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.secondaryButton, { borderColor: colors.border, backgroundColor: colors.surface }]}
          onPress={() =>
            navigation.navigate('Confirmation', {
              sessionId: 1,
              sessionTitle: 'Nature Scavenger Hunt',
            })
          }
        >
          <Text style={[styles.secondaryButtonText, { color: colors.text }]}>
            Open Confirmation
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 16,
    maxWidth: 420,
    width: '100%',
    alignSelf: 'center',
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
  },
  sub: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    padding: 12,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontWeight: '700',
  },
  secondaryButton: {
    marginTop: 12,
    padding: 12,
    borderRadius: 999,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  secondaryButtonText: {
    fontWeight: '700',
  },
});