import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import StreamControls from './StreamControls';

interface StreamPlayerProps {
  streamUrl: string;
  onStatusChange?: (status: 'connecting' | 'live' | 'offline') => void;
}

export default function StreamPlayer({ streamUrl, onStatusChange }: StreamPlayerProps) {
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1.0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<Video>(null);

  const handlePlaybackStatusUpdate = (playbackStatus: AVPlaybackStatus) => {
    setStatus(playbackStatus);
    
    if (!playbackStatus.isLoaded) {
      if (playbackStatus.error) {
        setError('Stream is currently unavailable');
        onStatusChange?.('offline');
        setIsLoading(false);
      }
      return;
    }

    setIsLoading(false);
    setError(null);
    
    if (playbackStatus.isPlaying) {
      onStatusChange?.('live');
    } else {
      onStatusChange?.('connecting');
    }
    
    setIsPlaying(playbackStatus.isPlaying);
  };

  const handlePlayPause = async () => {
    if (!videoRef.current) return;
    
    try {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
    } catch (err) {
      setError('Unable to control playback');
    }
  };

  const handleVolumeChange = async (newVolume: number) => {
    if (!videoRef.current) return;
    
    try {
      await videoRef.current.setVolumeAsync(newVolume);
      setVolume(newVolume);
    } catch (err) {
      setError('Unable to adjust volume');
    }
  };

  const handleReload = async () => {
    if (!videoRef.current) return;
    
    try {
      setIsLoading(true);
      setError(null);
      await videoRef.current.unloadAsync();
      await videoRef.current.loadAsync({ uri: streamUrl });
      await videoRef.current.playAsync();
    } catch (err) {
      setError('Unable to reload stream');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial load
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, []);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Stream Unavailable</Text>
        <Text style={styles.errorMessage}>{error}</Text>
        <StreamControls
          isPlaying={false}
          volume={volume}
          isLoading={false}
          onPlayPause={handleReload}
          onVolumeChange={handleVolumeChange}
          onReload={handleReload}
          showReloadButton={true}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: streamUrl }}
        useNativeControls={Platform.OS !== 'web'}
        resizeMode={ResizeMode.CONTAIN}
        isLooping={false}
        shouldPlay={true}
        volume={volume}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      
      {Platform.OS === 'web' && (
        <View style={styles.controlsOverlay}>
          <StreamControls
            isPlaying={isPlaying}
            volume={volume}
            isLoading={isLoading}
            onPlayPause={handlePlayPause}
            onVolumeChange={handleVolumeChange}
            onReload={handleReload}
            showReloadButton={!!error}
          />
        </View>
      )}
      
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Connecting to stream...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    position: 'relative',
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  controlsOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 8,
  },
  errorMessage: {
    color: '#d1d5db',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
});