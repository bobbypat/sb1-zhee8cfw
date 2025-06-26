import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface StreamControlsProps {
  isPlaying: boolean;
  volume: number;
  isLoading: boolean;
  onPlayPause: () => void;
  onVolumeChange: (volume: number) => void;
  onReload: () => void;
  showReloadButton?: boolean;
}

export default function StreamControls({
  isPlaying,
  volume,
  isLoading,
  onPlayPause,
  onVolumeChange,
  onReload,
  showReloadButton = false,
}: StreamControlsProps) {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const slideAnim = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(slideAnim.value, { duration: 200 }),
      transform: [
        {
          translateX: withTiming(slideAnim.value * 0, { duration: 200 }),
        },
      ],
    };
  });

  const toggleVolumeSlider = () => {
    const newValue = showVolumeSlider ? 0 : 1;
    slideAnim.value = newValue;
    setShowVolumeSlider(!showVolumeSlider);
  };

  const handleVolumeSliderChange = (value: number) => {
    onVolumeChange(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlsRow}>
        {/* Play/Pause Button */}
        <TouchableOpacity
          style={[styles.controlButton, styles.playButton]}
          onPress={onPlayPause}
          disabled={isLoading}
          activeOpacity={0.7}
        >
          {isLoading ? (
            <Text style={styles.loadingDot}>●</Text>
          ) : isPlaying ? (
            <Pause size={24} color="#ffffff" />
          ) : (
            <Play size={24} color="#ffffff" />
          )}
        </TouchableOpacity>

        {/* Volume Control */}
        <View style={styles.volumeContainer}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={toggleVolumeSlider}
            activeOpacity={0.7}
          >
            {volume === 0 ? (
              <VolumeX size={20} color="#ffffff" />
            ) : (
              <Volume2 size={20} color="#ffffff" />
            )}
          </TouchableOpacity>

          {showVolumeSlider && (
            <Animated.View style={[styles.volumeSliderContainer, animatedStyle]}>
              <VolumeSlider
                value={volume}
                onValueChange={handleVolumeSliderChange}
              />
            </Animated.View>
          )}
        </View>

        {/* Reload Button */}
        {showReloadButton && (
          <TouchableOpacity
            style={styles.controlButton}
            onPress={onReload}
            activeOpacity={0.7}
          >
            <RotateCcw size={20} color="#ffffff" />
          </TouchableOpacity>
        )}

        {/* Stream Status */}
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, { backgroundColor: isPlaying ? '#10b981' : '#ef4444' }]} />
          <Text style={styles.statusText}>
            {isLoading ? 'Connecting...' : isPlaying ? 'LIVE' : 'Paused'}
          </Text>
        </View>
      </View>
    </View>
  );
}

// Simple Volume Slider Component
function VolumeSlider({ value, onValueChange }: { value: number; onValueChange: (value: number) => void }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <View style={styles.slider}>
      <View style={styles.sliderTrack}>
        <View style={[styles.sliderProgress, { width: `${value * 100}%` }]} />
        <TouchableOpacity
          style={[styles.sliderThumb, { left: `${value * 100}%` }]}
          onPressIn={() => setIsDragging(true)}
          onPressOut={() => setIsDragging(false)}
          activeOpacity={0.7}
        />
      </View>
      <View style={styles.volumeButtons}>
        <TouchableOpacity
          style={styles.volumeButton}
          onPress={() => onValueChange(0)}
          activeOpacity={0.7}
        >
          <Text style={styles.volumeButtonText}>0%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.volumeButton}
          onPress={() => onValueChange(0.5)}
          activeOpacity={0.7}
        >
          <Text style={styles.volumeButtonText}>50%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.volumeButton}
          onPress={() => onValueChange(1)}
          activeOpacity={0.7}
        >
          <Text style={styles.volumeButtonText}>100%</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controlButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  playButton: {
    backgroundColor: '#f59e0b',
  },
  loadingDot: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
  },
  volumeContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  volumeSliderContainer: {
    position: 'absolute',
    left: 48,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 8,
    padding: 12,
    minWidth: 200,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  slider: {
    width: '100%',
  },
  sliderTrack: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    position: 'relative',
    marginBottom: 12,
  },
  sliderProgress: {
    height: '100%',
    backgroundColor: '#f59e0b',
    borderRadius: 2,
  },
  sliderThumb: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    top: -6,
    marginLeft: -8,
  },
  volumeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  volumeButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  volumeButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
});