import React, { useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FamilyTipCard from '../components/FamilyTipCard';
import { useFamilyTips } from '../hooks/useFamilyTips';
import { FINAL_API_CONFIG, FINAL_COLORS } from '../constants/finalConfig';

const FamilyTipsScreen = ({ navigation }) => {
  const {
    tips,
    loading,
    errorText,
    reloadTips,
  } = useFamilyTips(FINAL_API_CONFIG.FAMILY_TIPS_LIMIT);

  const handleOpenTip = useCallback(
    (item) => {
      navigation.navigate('TipDetails', {
        tipId: item.id,
        title: item.name,
        body: item.body,
        email: item.email,
      });
    },
    [navigation]
  );

  const renderTip = ({ item }) => (
    <FamilyTipCard
      title={item.name}
      body={item.body}
      email={item.email}
      onPress={() => handleOpenTip(item)}
    />
  );

  if (loading && tips.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={FINAL_COLORS.primary} />
        <Text style={styles.infoText}>Loading family tips...</Text>
      </View>
    );
  }

  if (errorText) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorTitle}>Something went wrong</Text>
        <Text style={styles.errorText}>{errorText}</Text>

        <TouchableOpacity style={styles.button} onPress={reloadTips} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (tips.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorTitle}>No tips found</Text>
        <Text style={styles.infoText}>
          There are no family learning tips available right now.
        </Text>

        <TouchableOpacity style={styles.button} onPress={reloadTips} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Reload</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Family Tips</Text>

      <Text style={styles.subtitle}>
        New final-project feature. Pull down to refresh learning tips.
      </Text>

      <FlatList
        data={tips}
        renderItem={renderTip}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        windowSize={5}
        removeClippedSubviews
        refreshing={loading}
        onRefresh={reloadTips}
      />
    </View>
  );
};

export default FamilyTipsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FINAL_COLORS.background,
    padding: 20,
  },
  title: {
    color: FINAL_COLORS.text,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: FINAL_COLORS.subtext,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 28,
  },
  centered: {
    flex: 1,
    backgroundColor: FINAL_COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  infoText: {
    color: FINAL_COLORS.subtext,
    textAlign: 'center',
    marginTop: 12,
  },
  errorTitle: {
    color: FINAL_COLORS.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  errorText: {
    color: FINAL_COLORS.danger,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: FINAL_COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  buttonText: {
    color: FINAL_COLORS.white,
    fontWeight: '700',
  },
});