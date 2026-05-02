import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import SessionListCard from '../components/SessionListCard';
import { useSessions } from '../hooks/useSessions';
import { API_CONFIG, FLAT_LIST_CONFIG } from '../constants/apiConfig';
import { addSavedSession } from '../redux/slices/savedSessionsSlice';

const SessionsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const {
    sessions,
    loading,
    errorText,
    reloadSessions,
  } = useSessions(API_CONFIG.DEFAULT_SESSIONS_LIMIT);

  const renderSession = ({ item }) => (
    <SessionListCard
      title={item.title}
      body={item.body}
      onPress={() =>
        navigation.navigate('SessionDetails', {
          itemId: item.id,
          title: item.title,
          body: item.body,
        })
      }
      onSave={() =>
        dispatch(
          addSavedSession({
            id: item.id,
            title: item.title,
            body: item.body,
          })
        )
      }
    />
  );

  if (loading && sessions.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2F7A55" />
        <Text style={styles.infoText}>Loading sessions...</Text>
      </View>
    );
  }

  if (errorText) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorTitle}>Something went wrong</Text>
        <Text style={styles.errorText}>{errorText}</Text>

        <TouchableOpacity style={styles.retryButton} onPress={reloadSessions} activeOpacity={0.7}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (sessions.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.emptyTitle}>No sessions found</Text>
        <Text style={styles.infoText}>
          There are no learning sessions available right now.
        </Text>

        <TouchableOpacity style={styles.retryButton} onPress={reloadSessions} activeOpacity={0.7}>
          <Text style={styles.retryButtonText}>Reload</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Sessions</Text>
      <Text style={styles.subtitle}>
        Data loaded from public REST API. Pull down to refresh or save sessions.
      </Text>

      <FlatList
        data={sessions}
        renderItem={renderSession}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        initialNumToRender={FLAT_LIST_CONFIG.initialNumToRender}
        maxToRenderPerBatch={FLAT_LIST_CONFIG.maxToRenderPerBatch}
        windowSize={FLAT_LIST_CONFIG.windowSize}
        removeClippedSubviews
        refreshing={loading}
        onRefresh={reloadSessions}
      />
    </View>
  );
};

export default SessionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
    padding: 20,
  },
  listContent: {
    paddingBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2A24',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#6E756F',
    marginBottom: 16,
  },
  centered: {
    flex: 1,
    backgroundColor: '#F5F0E8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  infoText: {
    marginTop: 12,
    color: '#6E756F',
    textAlign: 'center',
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2A24',
    marginBottom: 8,
  },
  errorText: {
    color: '#B00020',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2A24',
  },
  retryButton: {
    marginTop: 16,
    backgroundColor: '#2F7A55',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});