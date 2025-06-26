import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StreamPlayer from '@/components/StreamPlayer';
import LoadingScreen from '@/components/LoadingScreen';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function LiveStreamScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [streamStatus, setStreamStatus] = useState<'connecting' | 'live' | 'offline'>('connecting');

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setStreamStatus('live');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>KingJesusTV</Text>
          <View style={styles.statusContainer}>
            <View style={[styles.statusDot, { backgroundColor: streamStatus === 'live' ? '#10b981' : '#ef4444' }]} />
            <Text style={styles.statusText}>
              {streamStatus === 'live' ? 'LIVE' : streamStatus === 'connecting' ? 'Connecting...' : 'Offline'}
            </Text>
          </View>
        </View>
      </View>

      {/* Stream Player */}
      <View style={styles.playerContainer}>
        <StreamPlayer 
          streamUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          onStatusChange={setStreamStatus}
        />
      </View>

      {/* Stream Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>24/7 Continuous Stream</Text>
        <Text style={styles.infoDescription}>
          Join us for continuous worship, teaching, and fellowship. Broadcasting live from our ministry headquarters.
        </Text>
        
        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>Live Worship Services</Text>
          </View>
          <View style={styles.feature}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>Biblical Teachings</Text>
          </View>
          <View style={styles.feature}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>Prayer & Fellowship</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
  },
  playerContainer: {
    backgroundColor: '#000000',
    aspectRatio: 16 / 9,
    width: '100%',
  },
  infoContainer: {
    flex: 1,
    padding: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  infoDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    lineHeight: 24,
    marginBottom: 24,
  },
  featuresContainer: {
    gap: 16,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#f59e0b',
    marginRight: 12,
  },
  featureText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
});