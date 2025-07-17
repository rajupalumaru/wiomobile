import React, { useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';

export default function WelcomeScreen() {
  const flatListRef = useRef(null);

  const cards = [
    {
      key: '1',
      type: 'goals',
      lines: ['GOALS.', 'BACK.', 'THEM.'],
      backgroundColor: '#FFFFFF',
      textColor: '#000000',
      icon: null, // Placeholder for icon
      image: null, // Placeholder for image
    },
    {
      key: '2',
      type: 'designed',
      lines: ['DESIGNED', 'WITH YOU.', 'BUILT FOR YOU.'],
      backgroundColor: '#FBE4EC',
      textColor: '#000000',
      icon: require('../../assets/description.svg'),
      image: require('../../assets/women_face.png'), 
    },
  ];
  
  return (
    <ImageBackground
      // Placeholder background color instead of image
      style={styles.background}
      // resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.logo}>Wio Business</Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity> */}
        <Text style={styles.loginText}>LOG IN</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Bank.{"\n"}Like never{"\n"}before.</Text>
        <Text style={styles.subtitle}>
          With one platform for all your needs.{"\n"}Slide and tap to discover how.
        </Text>
        <FlatList
          ref={flatListRef}
          data={cards}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.cardsContainer}
          renderItem={({ item }) => (
            <View
              style={[
                styles.card,
                { backgroundColor: item.backgroundColor },
              ]}
            >
              {item.icon && (
                <Image source={item.icon} style={styles.cardIcon} />
              )}
              <View>
                {item.lines.map((line: string, index: number) => (
                  <Text key={index} style={[styles.cardText, { color: item.textColor }]}> 
                    {line}
                  </Text>
                ))}
              </View>
              {item.image && (
                <Image source={item.image} style={styles.cardImage} />
              )}
            </View>
          )}
        />  
      </View>
      <View style={styles.swipeTextContainer}>
        <Text style={styles.swipeText}>SWIPE TO SIGN UP</Text>
      </View>
     
    </ImageBackground>    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#1a1a1a', // fallback background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    justifyContent: 'flex-start',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 40,
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
    paddingHorizontal: 20,
  },
  card: {
    width: 200,
    height: 150,
    borderRadius: 16,
    padding: 15,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    marginRight: 16,
    position: 'relative',
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    lineHeight: 20,
  },
  cardIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  cardImage: {
    width: 80,
    height: 80,
    position: 'absolute',
    right: -10,
    bottom: -10,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 40,
  },
  pinkCard: {
    backgroundColor: '#F8D7E7',
    position: 'relative',
    overflow: 'visible',
  },
  swipeText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 12,
  },
  swipeTextContainer: {
    alignItems: 'center',
  },
});
