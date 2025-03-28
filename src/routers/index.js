import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

// Import các màn hình
import HomeScreen from '../../src/screens/Home/HomeScreen';
import OrderScreen from '../../src/screens/Order/OrderScreen';
import InboxScreen from '../../src/screens/Indox/IndoxScreen';
import ProfileScreen from '../../src/screens/Profile/ProfileScreen';
import OrderDetailScreen from '../../src/screens/OrderDetail/OrderDetailScreen'; // Đường dẫn chính xác

// Stack Navigator cho Home
const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{ 
        title: 'Trang chủ', 
        headerShown: true 
      }} 
    />
<HomeStack.Screen 
  name="OrderDetailScreen" 
  component={OrderDetailScreen} 
  options={({ navigation }) => ({
    title: 'Shopping Cart', 
    headerShown: true,
    headerLeft: () => (
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        style={{ marginLeft: 15 }}
        onPress={() => navigation.goBack()} // Nút quay lại
      />
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 15 }}
        onPress={() => alert('Trash icon clicked!')} // Hành động khi bấm vào thùng rác
      >
        <Ionicons 
          name="trash-outline" // Icon thùng rác
          size={24} 
          color="black" 
        />
      </TouchableOpacity>
        ),
      })} 
    />
  </HomeStack.Navigator>
);

// Stack Navigator cho Profile (với nút quay lại Home)
const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={({ navigation }) => ({
        title: 'Profile', // Tiêu đề trên header
        headerShown: true,
        headerLeft: () => (
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color="black" 
            style={{ marginLeft: 15 }} 
            onPress={() => navigation.goBack()} // Nút quay lại
          />
        ),
      })} 
    />
  </ProfileStack.Navigator>
);

// Main Tab Navigator
const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <MainTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline'; // Biểu tượng Home
        } else if (route.name === 'Order') {
          iconName = focused ? 'bag' : 'bag-outline'; // Biểu tượng Order
        } else if (route.name === 'Inbox') {
          iconName = focused ? 'chatbubble' : 'chatbubble-outline'; // Biểu tượng Inbox
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline'; // Biểu tượng Profile
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007bff', // Màu khi tab được chọn
      tabBarInactiveTintColor: '#666', // Màu khi tab không được chọn
      tabBarStyle: styles.tabBar, // Tùy chỉnh thanh tab
      tabBarLabelStyle: styles.tabLabel, // Tùy chỉnh chữ của tab
    })}
  >
    <MainTab.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{
        title: 'HOME', // Label tab
        headerShown: false, // Ẩn header của Tab Navigator
      }}
    />
    <MainTab.Screen
      name="Order"
      component={OrderScreen}
      options={{ title: 'ORDER' }} // Label tab
    />
    <MainTab.Screen
      name="Inbox"
      component={InboxScreen}
      options={{ title: 'INDOX' }} // Label tab
    />
    <MainTab.Screen
      name="Profile"
      component={ProfileStackNavigator}
      options={{
        title: 'PROFILE', // Label tab
        headerShown: false, // Ẩn header của Tab Navigator
      }}
    />
  </MainTab.Navigator>
);

const AppRouter = () => (
  <NavigationContainer>
    <MainTabNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff', // Màu nền của thanh tab
    height: 60, // Chiều cao thanh tab
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  tabLabel: {
    fontSize: 12, // Kích thước chữ
    fontWeight: 'bold', // Chữ đậm
  },
});

export default AppRouter;
