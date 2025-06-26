import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, Calendar as CalendarIcon } from 'lucide-react-native';

const SCHEDULE_DATA = [
  {
    day: 'Sunday',
    programs: [
      { time: '9:00 AM', title: 'Morning Worship', description: 'Traditional worship service with choir' },
      { time: '11:00 AM', title: 'Main Service', description: 'Primary worship and teaching service' },
      { time: '6:00 PM', title: 'Evening Service', description: 'Contemporary worship and fellowship' },
    ],
  },
  {
    day: 'Monday',
    programs: [
      { time: '7:00 AM', title: 'Morning Prayer', description: 'Start your week with prayer' },
      { time: '7:00 PM', title: 'Bible Study', description: 'Deep dive into scripture' },
    ],
  },
  {
    day: 'Tuesday',
    programs: [
      { time: '7:00 AM', title: 'Morning Prayer', description: 'Daily prayer and devotion' },
      { time: '7:00 PM', title: 'Youth Service', description: 'Service designed for young people' },
    ],
  },
  {
    day: 'Wednesday',
    programs: [
      { time: '7:00 AM', title: 'Morning Prayer', description: 'Midweek prayer time' },
      { time: '7:00 PM', title: 'Prayer Meeting', description: 'Powerful prayer and intercession' },
    ],
  },
  {
    day: 'Thursday',
    programs: [
      { time: '7:00 AM', title: 'Morning Prayer', description: 'Daily prayer and devotion' },
      { time: '7:00 PM', title: 'Teaching Service', description: 'In-depth biblical teaching' },
    ],
  },
  {
    day: 'Friday',
    programs: [
      { time: '7:00 AM', title: 'Morning Prayer', description: 'End your week with prayer' },
      { time: '7:00 PM', title: 'Worship Night', description: 'Night of praise and worship' },
    ],
  },
  {
    day: 'Saturday',
    programs: [
      { time: '10:00 AM', title: 'Family Service', description: 'Service for the whole family' },
      { time: '7:00 PM', title: 'Special Programs', description: 'Various special events and programs' },
    ],
  },
];

export default function ScheduleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      
      {/* Header */}
      <View style={styles.header}>
        <CalendarIcon size={28} color="#ffffff" />
        <Text style={styles.headerTitle}>Program Schedule</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>
          Join us throughout the week for worship, teaching, and fellowship. All times are in EST.
        </Text>

        {SCHEDULE_DATA.map((daySchedule, index) => (
          <View key={daySchedule.day} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{daySchedule.day}</Text>
            
            {daySchedule.programs.map((program, programIndex) => (
              <View key={programIndex} style={styles.programCard}>
                <View style={styles.programHeader}>
                  <View style={styles.timeContainer}>
                    <Clock size={16} color="#f59e0b" />
                    <Text style={styles.timeText}>{program.time}</Text>
                  </View>
                  <Text style={styles.programTitle}>{program.title}</Text>
                </View>
                <Text style={styles.programDescription}>{program.description}</Text>
              </View>
            ))}
          </View>
        ))}

        <View style={styles.noteContainer}>
          <Text style={styles.noteTitle}>Important Notes</Text>
          <Text style={styles.noteText}>
            • All services are broadcast live on our 24/7 stream{'\n'}
            • Times may vary during special events and holidays{'\n'}
            • Additional programming may be added throughout the week
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
  dayContainer: {
    marginBottom: 32,
  },
  dayTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#f59e0b',
  },
  programCard: {
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
  programHeader: {
    marginBottom: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  timeText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#f59e0b',
  },
  programTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
  },
  programDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    lineHeight: 20,
  },
  noteContainer: {
    backgroundColor: '#fff7ed',
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
    marginBottom: 40,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  noteTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#92400e',
    marginBottom: 8,
  },
  noteText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#78350f',
    lineHeight: 20,
  },
});