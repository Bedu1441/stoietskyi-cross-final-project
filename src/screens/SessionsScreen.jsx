import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import SessionListCard from '../components/SessionListCard';
import { fetchSessions } from '../api/api';
import { addSavedSession } from '../redux/slices/savedSessionsSlice';
import { useTheme } from '../context/ThemeContext';

const SessionsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    try {
      setLoading(true);
      setErrorText('');

      const data = await fetchSessions();
      setSessions(data);
    } catch (error) {
      setErrorText('Failed to load sessions. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const visibleSessions = useMemo(() => {
    console.log('useMemo: preparing visible sessions');
    return sessions.slice(0, 12);
  }, [sessions]);

  const handleOpenDetails = useCallback(
    (item) => {
      navigation.navigate('SessionDetails', {
        itemId: item.id,
        title: item.title,
        body: item.body,
      });
    },
    [navigation]
  );

  const handleSaveSession = useCallback(
    (item) => {
      dispatch(
        addSavedSession({
          id: item.id,
          title: item.title,
          body: item.body,
        })
      );
    },
    [dispatch]
  );

  const renderItem = useCallback(
    ({ item }) => (
      <SessionListCard
        title={item.title}
        body={item.body}
        onPress={() => handleOpenDetails(item)}
        onSave={() => handleSaveSession(item)}
      />
    ),
    [handleOpenDetails, handleSaveSession]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  if (loading) {
    return (
      <View style={[styles.centered, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.infoText, { color: colors.subtext }]}>
          Loading sessions...
        </Text>
      </View>
    );
  }

  if (errorText) {
    return (
      <View style={[styles.centered, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.danger }]}>
          {errorText}
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Explore Sessions
      </Text>

      <Text style={[styles.note, { color: colors.subtext }]}>
        Optimized with React.memo, useMemo and useCallback.
      </Text>

      <FlatList
        data={visibleSessions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SessionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContent: {
    paddingBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  note: {
    fontSize: 13,
    marginBottom: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  infoText: {
    marginTop: 12,
  },
  errorText: {
    fontSize: 15,
    textAlign: 'center',
  },
});