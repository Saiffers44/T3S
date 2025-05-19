import { Image } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Inter_400Regular } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    Inter_400Regular,
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" />

      <Image source={require('./assets/logo.png')} style={styles.logoImage} resizeMode="contain" />

      <View style={styles.nav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Courtside</Text>
        <Text style={styles.navItem}>Winners & Whiffs</Text>
      </View>

      <View style={styles.featured}>
        <Text style={styles.featuredLabel}>Featured</Text>
        <Text style={styles.featuredHeadline}>Who Will Rule the Summer Swing?</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Live Scores</Text>
        <Text style={styles.placeholder}>Match data coming soon...</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sharp Takes</Text>
        <Text style={styles.placeholder}>Sinner’s serve is still a problem — even on clay.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Winners & Whiffs</Text>
        <Text style={styles.placeholder}>3 underdogs you don’t want to overlook this week.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>The Practice Court</Text>
        <Text style={styles.placeholder}>Test your tennis IQ. Weekly quizzes and prediction games.</Text>
      </View>

      <View style={styles.proUpsell}>
        <Text style={styles.proTitle}>Unlock PRO Access</Text>
        <Text style={styles.proText}>More picks. More edge. More third-set wins.</Text>
      </View>

      <Text style={styles.footer}>v0.1 • Built with sweat, stats, and spin.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logoImage: {
  width: 100,
  height: 100,
  marginBottom: 0,
},
scroll: {
    backgroundColor: '#2A1A40',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logo: {
    fontSize: 48,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: '#FDF6ED',
    marginBottom: 1,
  },
  tagline: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#FDF6ED',
    marginBottom: 30,
  },
  nav: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: -10, // ⬅️ pull it up toward the logo
  marginBottom: 20,
},

  navItem: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#F9B233',
    fontWeight: '600',
  },
  featured: {
    backgroundColor: '#3B2C50',
    width: '100%',
    borderRadius: 12,
    padding: 20,
    
  },
  featuredLabel: {
    fontSize: 12,
    color: '#F9B233',
    marginBottom: 4,
    fontFamily: 'Inter_400Regular',
  },
  featuredHeadline: {
    fontSize: 20,
    color: '#FDF6ED',
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  section: {
    width: '100%',
    backgroundColor: '#3B2C50',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FDF6ED',
    marginBottom: 10,
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  placeholder: {
    fontSize: 14,
    color: '#D9D3C6',
    fontFamily: 'Inter_400Regular',
  },
  proUpsell: {
    width: '100%',
    backgroundColor: '#F9B233',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  proTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A1A40',
    fontFamily: 'PlayfairDisplay_700Bold',
    marginBottom: 4,
  },
  proText: {
    fontSize: 14,
    color: '#2A1A40',
    fontFamily: 'Inter_400Regular',
  },
  footer: {
    fontSize: 12,
    color: '#D9D3C6',
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    marginTop: 20,
  },
});
