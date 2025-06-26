import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, Users, BookOpen, Globe } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      
      {/* Header */}
      <View style={styles.header}>
        <Heart size={28} color="#ffffff" />
        <Text style={styles.headerTitle}>About Our Ministry</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/5206040/pexels-photo-5206040.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Spreading God's Love</Text>
            <Text style={styles.heroSubtitle}>Through 24/7 Broadcasting</Text>
          </View>
        </View>

        {/* Mission Statement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            KingJesusTV is dedicated to spreading the Gospel of Jesus Christ through continuous broadcasting, 
            reaching souls around the world with the message of hope, love, and salvation. We believe in the 
            transformative power of God's Word and strive to create a platform where believers can gather, 
            worship, and grow in their faith journey.
          </Text>
        </View>

        {/* Core Values */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Core Values</Text>
          
          <View style={styles.valueCard}>
            <View style={styles.valueIcon}>
              <BookOpen size={24} color="#1e3a8a" />
            </View>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Biblical Truth</Text>
              <Text style={styles.valueDescription}>
                We are committed to teaching the uncompromised Word of God with accuracy and clarity.
              </Text>
            </View>
          </View>

          <View style={styles.valueCard}>
            <View style={styles.valueIcon}>
              <Users size={24} color="#1e3a8a" />
            </View>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Community</Text>
              <Text style={styles.valueDescription}>
                Building a strong, supportive community of believers who encourage one another in faith.
              </Text>
            </View>
          </View>

          <View style={styles.valueCard}>
            <View style={styles.valueIcon}>
              <Globe size={24} color="#1e3a8a" />
            </View>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Global Outreach</Text>
              <Text style={styles.valueDescription}>
                Reaching people from all nations with the Gospel through our 24/7 broadcasting platform.
              </Text>
            </View>
          </View>
        </View>

        {/* Our Story */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Story</Text>
          <Text style={styles.storyText}>
            Founded with a vision to reach the world with the Gospel, KingJesusTV began as a small ministry 
            with a big dream. Through God's faithfulness and the support of believers worldwide, we have grown 
            into a 24/7 broadcasting network that reaches thousands of viewers daily.
          </Text>
          <Text style={styles.storyText}>
            Our journey has been marked by miraculous testimonies, lives transformed, and communities touched 
            by the power of God. We continue to expand our reach, always keeping Christ at the center of 
            everything we do.
          </Text>
        </View>

        {/* Leadership */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Leadership Team</Text>
          <Text style={styles.leadershipText}>
            Our ministry is led by a dedicated team of pastors, teachers, and ministry leaders who are 
            passionate about serving God and His people. Each member brings unique gifts and experiences 
            that contribute to the overall vision of spreading the Gospel worldwide.
          </Text>
        </View>

        {/* Vision */}
        <View style={styles.visionSection}>
          <Text style={styles.visionTitle}>Our Vision</Text>
          <Text style={styles.visionText}>
            "To see every nation, tribe, and tongue come to know Jesus Christ as Lord and Savior through 
            the power of continuous broadcasting and faithful discipleship."
          </Text>
        </View>
      </ScrollView>
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
  },
  content: {
    flex: 1,
  },
  heroSection: {
    position: 'relative',
    height: 200,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(30, 58, 138, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#f1f5f9',
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  missionText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#374151',
    lineHeight: 24,
  },
  valueCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  valueIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  valueContent: {
    flex: 1,
  },
  valueTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 4,
  },
  valueDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    lineHeight: 20,
  },
  storyText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#374151',
    lineHeight: 24,
    marginBottom: 16,
  },
  leadershipText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#374151',
    lineHeight: 24,
  },
  visionSection: {
    backgroundColor: '#1e3a8a',
    margin: 20,
    padding: 24,
    borderRadius: 16,
    marginBottom: 40,
  },
  visionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  visionText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#e2e8f0',
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});