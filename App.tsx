import 'react-native-gesture-handler';
import React from 'react';
import { useCallback, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

// Screens (placeholders)
function HomeScreen() {
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
      <Image source={require('./assets/logo.png')} style={styles.logoImage} resizeMode="contain" />

    

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


function LiveScoresScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Live Scores</Text>
    </View>
  );
}

function CourtsideScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Courtside</Text>
    </View>
  );
}

function WinnersScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Winners & Whiffs</Text>
    </View>
  );
}

function PracticeCourtScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>The Practice Court</Text>
    </View>
  );
}

// Tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarStyle: { backgroundColor: '#2A1A40' },
    tabBarActiveTintColor: '#F9B233',
    tabBarInactiveTintColor: '#D9D3C6',
    tabBarLabelStyle: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
    },
    tabBarIcon: ({ color, size }) => {
      let iconName: keyof typeof MaterialCommunityIcons.glyphMap;

      switch (route.name) {
        case 'Home':
          iconName = 'home-variant';
          break;
        case 'Live Scores':
          iconName = 'scoreboard-outline';
          break;
        case 'Courtside':
          iconName = 'tennis-ball';
          break;
        case 'Winners & Whiffs':
          iconName = 'check';
          break;
        case 'Practice Court':
          iconName = 'gamepad-square';
          break;
        default:
          iconName = 'circle-outline';
      }

      return (
        <MaterialCommunityIcons
          name={iconName}
          size={size}
          color={color}
        />
      );
    },
  })}
>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Live Scores" component={LiveScoresScreen} />
        <Tab.Screen name="Courtside" component={CourtsideScreen} />
        <Tab.Screen name="Winners & Whiffs" component={WinnersScreen} />
        <Tab.Screen name="Practice Court" component={PracticeCourtScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logo: {
    fontSize: 48,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: '#FDF6ED',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#FDF6ED',
    marginBottom: 30,
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
  screen: {
    flex: 1,
    backgroundColor: '#2A1A40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FDF6ED',
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 22,
  },
});
