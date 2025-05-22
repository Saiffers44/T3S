// THE THIRD SET - FULL APP CODE WITH MINI PROFILE IN DRAWER (Rijepard)

import 'react-native-gesture-handler';
import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/* ---------- Screens ---------- */
function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({ PlayfairDisplay_700Bold, Inter_400Regular });

  useEffect(() => { SplashScreen.preventAutoHideAsync(); }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container} onLayout={onLayoutRootView}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.profileIcon}>
        <MaterialCommunityIcons name="account-circle-outline" size={26} color="#F9B233" />
      </TouchableOpacity>
      <Image source={require('./assets/logo.png')} style={styles.logoImage} resizeMode="contain" />

      <View style={styles.featured}><Text style={styles.featuredLabel}>Featured</Text><Text style={styles.featuredHeadline}>Who Will Rule the Summer Swing?</Text></View>
      <View style={styles.section}><Text style={styles.sectionTitle}>Live Scores</Text><Text style={styles.placeholder}>Match data coming soon...</Text></View>
      <View style={styles.section}><Text style={styles.sectionTitle}>Sharp Takes</Text><Text style={styles.placeholder}>Sinner’s serve is still a problem — even on clay.</Text></View>
      <View style={styles.section}><Text style={styles.sectionTitle}>Winners & Whiffs</Text><Text style={styles.placeholder}>3 underdogs you don’t want to overlook this week.</Text></View>
      <View style={styles.section}><Text style={styles.sectionTitle}>The Practice Court</Text><Text style={styles.placeholder}>Test your tennis IQ. Weekly quizzes and prediction games.</Text></View>

      <View style={styles.proUpsell}><Text style={styles.proTitle}>Unlock PRO Access</Text><Text style={styles.proText}>More picks. More edge. More third-set wins.</Text></View>
      <Text style={styles.footer}>v0.1 • Built with sweat, stats, and spin.</Text>
    </ScrollView>
  );
}

const ScreenWithTitle = (title, tagline) => ({ navigation }) => (
  <View style={styles.screen}>
    <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.profileIcon}>
      <MaterialCommunityIcons name="account-circle-outline" size={26} color="#F9B233" />
    </TouchableOpacity>
    <Text style={styles.pageTitle}>{title}</Text>
    <Text style={styles.pageTagline}>{tagline}</Text>
  </View>
);

const LiveScoresScreen = ScreenWithTitle('Live Scores', 'Real-time updates. No delays.');
const CourtsideScreen = ScreenWithTitle('Courtside', 'Debate the points that mattered.');
const WinnersScreen = ScreenWithTitle('Winners & Whiffs', 'Smart bets, bold predictions.');
const PracticeCourtScreen = ScreenWithTitle('The Practice Court', 'Play. Predict. Prove yourself.');
const PodcastScreen = ScreenWithTitle('First Serve, Last Word', 'Voices, opinions, and rants—served weekly.');

const BookmarksScreen = ScreenWithTitle('Bookmarks', 'Your saved reads and picks.');
const SettingsScreen = ScreenWithTitle('Settings', 'Customize your experience.');
const PreferencesScreen = ScreenWithTitle('Preferences', 'Tune your tennis universe.');
const ManageMembershipScreen = ScreenWithTitle('Manage Membership', 'Upgrade. Downgrade. Own your journey.');

/* ---------- Drawer Content ---------- */
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerFull}>
      <View style={styles.drawerProfile}>
  <Image source={require('./assets/rije.jpeg')} style={styles.avatar} />
  <Text style={styles.rijeName}>Rije Baby <Text style={styles.crown}>💋</Text></Text>
  <Text style={styles.rijeTier}>Champion</Text>
  <Text style={styles.rijeQuote}>Queen of the Third Set</Text>
  <Text style={styles.rijeInfo}>Favorite Player: Jack Draper</Text>
  <Text style={styles.rijeInfo}>Country: South Korea 🇰🇷</Text>
  <Text style={styles.rijeInfo}> T3Ser Since: May 2025</Text>
</View>


      <View style={styles.divider} />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

/* ---------- Tabs ---------- */
function TabsWithProfile() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#2A1A40' },
        tabBarActiveTintColor: '#F9B233',
        tabBarInactiveTintColor: '#D9D3C6',
        tabBarLabelStyle: { fontFamily: 'Inter_400Regular', fontSize: 12 },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'circle-outline';
          switch (route.name) {
            case 'Home': iconName = 'home-variant'; break;
            case 'Live Scores': iconName = 'scoreboard-outline'; break;
            case 'Courtside': iconName = 'tennis-ball'; break;
            case 'Winners & Whiffs': iconName = 'trending-up'; break;
            case 'Practice Court': iconName = 'gamepad-square'; break;
            case 'First Serve, Last Word': iconName = 'microphone'; break;
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Live Scores" component={LiveScoresScreen} />
      <Tab.Screen name="Courtside" component={CourtsideScreen} />
      <Tab.Screen name="Winners & Whiffs" component={WinnersScreen} />
      <Tab.Screen name="Practice Court" component={PracticeCourtScreen} />
      <Tab.Screen name="First Serve, Last Word" component={PodcastScreen} />
    </Tab.Navigator>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
  drawerContent={(props) => <CustomDrawerContent {...props} />}
  screenOptions={{
    headerShown: false,
    drawerStyle: { backgroundColor: '#2A1A40' },
    drawerInactiveTintColor: '#D9D3C6',
    drawerActiveTintColor: '#FDF6ED',
    drawerActiveBackgroundColor: '#4CAF50',
    drawerLabelStyle: { fontFamily: 'Inter_400Regular', fontSize: 14 },
  }}
>
  <Drawer.Screen name="Home" component={TabsWithProfile} />
  <Drawer.Screen name="Manage Membership" component={ManageMembershipScreen} />
  <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
  <Drawer.Screen name="Preferences" component={PreferencesScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
</Drawer.Navigator>
    </NavigationContainer>
  );
}

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  profileIcon: { position: 'absolute', top: 40, left: 16, zIndex: 10 },
  logoImage: { width: 100, height: 100, marginTop: 20 },
  scroll: { backgroundColor: '#2A1A40' },
  container: { flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 10, paddingHorizontal: 20, paddingBottom: 20 },
  featured: { backgroundColor: '#3B2C50', width: '100%', borderRadius: 12, padding: 20, marginTop: 20 },
  featuredLabel: { fontSize: 12, color: '#F9B233', marginBottom: 4, fontFamily: 'Inter_400Regular' },
  featuredHeadline: { fontSize: 20, color: '#FDF6ED', fontFamily: 'PlayfairDisplay_700Bold' },
  section: { width: '100%', backgroundColor: '#3B2C50', borderRadius: 12, padding: 20, marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#FDF6ED', marginBottom: 10, fontFamily: 'PlayfairDisplay_700Bold' },
  placeholder: { fontSize: 14, color: '#D9D3C6', fontFamily: 'Inter_400Regular' },
  proUpsell: { width: '100%', backgroundColor: '#F9B233', padding: 20, borderRadius: 12, alignItems: 'center', marginTop: 30, marginBottom: 20 },
  proTitle: { fontSize: 16, fontWeight: 'bold', color: '#2A1A40', fontFamily: 'PlayfairDisplay_700Bold', marginBottom: 4 },
  proText: { fontSize: 14, color: '#2A1A40', fontFamily: 'Inter_400Regular' },
  footer: { fontSize: 12, color: '#D9D3C6', fontFamily: 'Inter_400Regular', textAlign: 'center', marginTop: 20 },
  screen: { flex: 1, backgroundColor: '#2A1A40', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 80 },
  pageTitle: { fontSize: 28, fontFamily: 'PlayfairDisplay_700Bold', color: '#FDF6ED', textAlign: 'center' },
  pageTagline: { fontSize: 16, fontFamily: 'Inter_400Regular', color: '#D9D3C6', textAlign: 'center', marginTop: 4 },
  drawerFull: { flex: 1, backgroundColor: '#2A1A40' },
  drawerProfile: { alignItems: 'center', paddingTop: 60 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  rijeName: { fontSize: 20, color: '#FDF6ED', fontFamily: 'PlayfairDisplay_700Bold' },
  crown: { fontSize: 20 },
  rijeTier: { fontSize: 16, color: '#F9B233', fontFamily: 'Inter_400Regular' },
  rijeInfo: { fontSize: 14, color: '#D9D3C6', fontFamily: 'Inter_400Regular' },
  divider: { height: 1, backgroundColor: '#D9D3C6', marginVertical: 20, width: '80%', alignSelf: 'center' },
  drawerLinks: { flex: 1 },
  rijeQuote: {
  fontSize: 14,
  color: '#FDF6ED',
  fontFamily: 'PlayfairDisplay_700Bold',
  marginTop: 4,
  marginBottom: 4,
},

});
