import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
// Nếu bạn dùng Expo:
import { LinearGradient } from 'expo-linear-gradient';
// Nếu bạn dùng React Native CLI, thay đổi import thành:
// import LinearGradient from 'react-native-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <LinearGradient
      colors={['#fdfed0', '#fbfcd8', '#ffffff']} // Gradient màu vàng đậm, vàng nhạt, và trắng
      locations={[0, 0.4, 1]} // Điều chỉnh tỷ lệ màu gradient
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../assets/Ellipse22.png')} // Đường dẫn tới ảnh đại diện
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Rakibul Hasan</Text>
        <Text style={styles.profileEmail}>rakibbrand@gmail.com</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="home-outline" size={20} color="#333" />
            <Text style={styles.menuText}>Home</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <MaterialCommunityIcons name="credit-card-outline" size={20} color="#333" />
            <Text style={styles.menuText}>My Card</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#333" />
        </TouchableOpacity>
        <View style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="moon" size={20} color="#333" />
            <Text style={styles.menuText}>Dark Mood</Text>
          </View>
          <Switch value={false} />
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="location-outline" size={20} color="#333" />
            <Text style={styles.menuText}>Track Your Order</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="settings-outline" size={20} color="#333" />
            <Text style={styles.menuText}>Settings</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="help-circle-outline" size={20} color="#333" />
            <Text style={styles.menuText}>Help Center</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={20} color="#fff" style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'transparent', // Để gradient hiển thị qua
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007bff',
    borderRadius: 15,
    padding: 5,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    margin: 20,
    padding: 15,
    borderRadius: 5,
  },
  logoutIcon: {
    marginRight: 10, // Icon ở bên trái
  },
  logoutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
