import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Phone, Mail, MapPin, Clock, MessageCircle, Globe } from 'lucide-react-native';

const CONTACT_INFO = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    action: () => Linking.openURL('tel:+15551234567'),
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@kingjesustv.org',
    action: () => Linking.openURL('mailto:info@kingjesustv.org'),
  },
  {
    icon: Globe,
    title: 'Website',
    details: 'www.kingjesustv.org',
    action: () => Linking.openURL('https://www.kingjesustv.org'),
  },
  {
    icon: MapPin,
    title: 'Address',
    details: '123 Ministry Way\nFaith City, FC 12345\nUnited States',
    action: () => Linking.openURL('https://maps.google.com/?q=123+Ministry+Way+Faith+City+FC+12345'),
  },
];

const OFFICE_HOURS = [
  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM EST' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
  { day: 'Sunday', hours: 'Closed (Services Only)' },
];

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      
      {/* Header */}
      <View style={styles.header}>
        <MessageCircle size={28} color="#ffffff" />
        <Text style={styles.headerTitle}>Contact Us</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>
          We'd love to hear from you! Reach out to us with questions, prayer requests, or just to say hello.
        </Text>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get In Touch</Text>
          
          {CONTACT_INFO.map((contact, index) => (
            <TouchableOpacity
              key={index}
              style={styles.contactCard}
              onPress={contact.action}
              activeOpacity={0.7}
            >
              <View style={styles.contactIcon}>
                <contact.icon size={24} color="#1e3a8a" />
              </View>
              <View style={styles.contactContent}>
                <Text style={styles.contactTitle}>{contact.title}</Text>
                <Text style={styles.contactDetails}>{contact.details}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Office Hours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Office Hours</Text>
          <View style={styles.hoursCard}>
            <View style={styles.hoursHeader}>
              <Clock size={20} color="#f59e0b" />
              <Text style={styles.hoursTitle}>Ministry Office</Text>
            </View>
            
            {OFFICE_HOURS.map((schedule, index) => (
              <View key={index} style={styles.hoursRow}>
                <Text style={styles.hoursDay}>{schedule.day}</Text>
                <Text style={styles.hoursTime}>{schedule.hours}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Prayer Requests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prayer Requests</Text>
          <View style={styles.prayerCard}>
            <Text style={styles.prayerTitle}>Submit a Prayer Request</Text>
            <Text style={styles.prayerDescription}>
              Our ministry team is committed to praying for you and your needs. Submit your prayer 
              requests through any of our contact methods, and know that we are standing with you in faith.
            </Text>
            <View style={styles.prayerFeatures}>
              <View style={styles.prayerFeature}>
                <View style={styles.prayerDot} />
                <Text style={styles.prayerFeatureText}>Confidential prayer support</Text>
              </View>
              <View style={styles.prayerFeature}>
                <View style={styles.prayerDot} />
                <Text style={styles.prayerFeatureText}>Dedicated prayer team</Text>
              </View>
              <View style={styles.prayerFeature}>
                <View style={styles.prayerDot} />
                <Text style={styles.prayerFeatureText}>24/7 prayer coverage</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Social Media */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect With Us</Text>
          <View style={styles.socialCard}>
            <Text style={styles.socialTitle}>Follow Our Ministry</Text>
            <Text style={styles.socialDescription}>
              Stay connected with our ministry through social media for daily inspiration, 
              live updates, and community fellowship.
            </Text>
            <View style={styles.socialPlatforms}>
              <Text style={styles.socialPlatform}>📘 Facebook: @KingJesusTV</Text>
              <Text style={styles.socialPlatform}>📸 Instagram: @kingjesustv_official</Text>
              <Text style={styles.socialPlatform}>🐦 Twitter: @KingJesusTV</Text>
              <Text style={styles.socialPlatform}>📺 YouTube: KingJesusTV Ministry</Text>
            </View>
          </View>
        </View>

        {/* Emergency Contact */}
        <View style={styles.emergencySection}>
          <Text style={styles.emergencyTitle}>Emergency Pastoral Care</Text>
          <Text style={styles.emergencyText}>
            For urgent pastoral care or emergency prayer needs, please call our emergency line 
            at (555) 911-PRAY. Available 24/7 for immediate spiritual support.
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
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  contactCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactContent: {
    flex: 1,
    justifyContent: 'center',
  },
  contactTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 4,
  },
  contactDetails: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    lineHeight: 20,
  },
  hoursCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hoursHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  hoursTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  hoursDay: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
  hoursTime: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
  prayerCard: {
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  prayerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#92400e',
    marginBottom: 8,
  },
  prayerDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#78350f',
    lineHeight: 20,
    marginBottom: 16,
  },
  prayerFeatures: {
    gap: 8,
  },
  prayerFeature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prayerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#f59e0b',
    marginRight: 8,
  },
  prayerFeatureText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#78350f',
  },
  socialCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  socialTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginBottom: 8,
  },
  socialDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 16,
  },
  socialPlatforms: {
    gap: 8,
  },
  socialPlatform: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
  emergencySection: {
    backgroundColor: '#dc2626',
    borderRadius: 12,
    padding: 20,
    marginBottom: 40,
  },
  emergencyTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#fecaca',
    lineHeight: 20,
  },
});