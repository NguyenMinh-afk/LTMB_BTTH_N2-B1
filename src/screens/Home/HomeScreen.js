import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Khung vàng */}
      <View style={styles.frame}>
        <View style={styles.frameHeader}>
          {/* Ảnh đại diện */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')} // Điều hướng tới màn hình Profile
          >
            <Image
              source={require('../../assets/Ellipse22.png')} // Đường dẫn tới ảnh đại diện
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            {/* Tên địa điểm */}
            <Text style={styles.locationText}>Your Location</Text>
            <Text style={styles.location}>Savar, Dhaka</Text>
          </View>
          {/* Biểu tượng chuông */}
          <TouchableOpacity style={styles.notificationIcon}>
            <Image
              source={require('../../assets/notification_icon.png')} // Đường dẫn tới biểu tượng chuông
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        {/* Thanh tìm kiếm */}
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.iconLeft}>
            <Image
              source={require('../../assets/magnifying_glass_icon.png')} // Đường dẫn tới biểu tượng kính lúp
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search your food"
            placeholderTextColor="#FFFFFF" // Placeholder text màu trắng
          />
          <TouchableOpacity style={styles.iconRight}>
            <Image
              source={require('../../assets/slider_icon.png')} // Đường dẫn tới biểu tượng bộ lọc
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Danh mục món ăn */}
      <View style={styles.categories}>
        <TouchableOpacity style={[styles.category, styles.activeCategory]}>
          <Image
            source={require('../../assets/pizza_icon.png')} // Đường dẫn tới ảnh pizza
            style={styles.categoryIcon}
          />
          <Text style={styles.activeCategoryText}>Pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../../assets/burger_icon.png')} // Đường dẫn tới ảnh burger
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Burger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../../assets/drinks_icon.png')} // Đường dẫn tới ảnh drinks
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../../assets/rice_icon.png')} // Đường dẫn tới ảnh rice
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Rice</Text>
        </TouchableOpacity>
      </View>

      {/* Khuyến mãi */}
      <View style={styles.promotion}>
        <Image
          source={require('../../assets/promotion_image.png')} // Đường dẫn tới ảnh khuyến mãi
          style={styles.promotionImage}
        />
        <View style={styles.dotContainer}>
          <Image
            source={require('../../assets/Dot.png')} // Đường dẫn tới Dot.png
            style={styles.dot}
          />
        </View>
      </View>

      {/* Danh sách món phổ biến */}
      <View style={styles.popularItems}>
        <Text style={styles.popularTitle}>Popular Items</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
        <ScrollView horizontal>
          <View style={styles.popularItem}>
            <Image
              source={require('../../assets/pizza.png')} // Đường dẫn tới ảnh pizza
              style={styles.popularItemImage}
            />
            <Text style={styles.popularItemText}>Pizza</Text>
          </View>
          <TouchableOpacity
            style={styles.popularItem}
            onPress={() => navigation.navigate('OrderDetailScreen')} // Điều hướng trực tiếp tới OrderDetailScreen
          >
            <Image
              source={require('../../assets/burger.png')}
              style={styles.popularItemImage}
            />
            <Text style={styles.popularItemText}>Burger</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Nền trắng nhạt
    paddingHorizontal: 15,
  },
  frame: {
    backgroundColor: '#f9fada', // Nền vàng khung
    padding: 20,
    borderRadius: 15,
    marginTop: 0,
  },
  frameHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  locationContainer: {
    flex: 1,
    marginLeft: 10,
  },
  locationText: {
    fontSize: 12,
    color: '#7F7F7F',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  notificationIcon: {
    padding: 10,
  },
  icon: {
    width: 60,
    height: 60,
    
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a43ec', // Màu tím cho thanh tìm kiếm
    borderRadius: 25,
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF', // Màu chữ trắng
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  category: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 80,
  },
  activeCategory: {
    backgroundColor: '#29d697',
  },
  categoryIcon: {
    width: 30,
    height: 30,
  },
  categoryText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  activeCategoryText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 5,
    fontWeight: 'bold',
  },
  promotion: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  promotionImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  dotContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
  },
  popularItems: {
    marginTop: 20,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllButton: {
    alignSelf: 'flex-end',
    marginTop: -25,
    marginBottom: 10,
  },
  viewAllText: {
    fontSize: 14,
    color: '#007BFF',
  },
  popularItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  popularItemImage: {
    width: 180,
    height: 130,
    borderRadius: 10,
  },
  popularItemText: {
    marginTop: 5,
    fontSize: 14,
    color: '#444',
  },
});

export default HomeScreen;
