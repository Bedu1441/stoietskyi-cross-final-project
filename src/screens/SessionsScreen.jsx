import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import SessionListCard from '../components/SessionListCard';
import { fetchSessions } from '../api/api';

const SessionsScreen = ({ navigation }) => {
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

  if (loading) {
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
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Sessions</Text>

      <FlatList
        data={sessions}
        renderItem={({ item }) => (
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
          />
        )}
        keyExtractor={(item) => item.id.toString()}
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
  },
  errorText: {
    color: '#B00020',
    fontSize: 15,
    textAlign: 'center',
  },
});