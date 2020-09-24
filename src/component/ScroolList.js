import {Card} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as Mixins from '../styles/mixins';

const ScroolList = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card style={styles.safetyCard}>
          <View
            style={{marginTop: Mixins.scale(16), marginLeft: Mixins.scale(35)}}>
            <Text style={{fontSize: Mixins.scale(17), color: '#0da2a6'}}>
              5 Step safety
            </Text>
            <Text style={{fontSize: Mixins.scale(17), color: '#0da2a6'}}>
              Assured
            </Text>
          </View>
        </Card>
        <Card style={styles.safetyListCard}>
          <Image
            style={styles.cardSafetyImage}
            source={{
              uri:
                'https://cdn.datta.store/auxapi/files/image/alcohol_4yyQwsU.png',
            }}
          />
          <Text style={{color: '#707373', marginLeft: Mixins.scale(5)}}>
            Temperature check
          </Text>
        </Card>
        <Card style={styles.safetyListCard}>
          <Image
            style={styles.cardSafetyImage}
            source={{
              uri:
                'https://cdn.datta.store/auxapi/files/image/alcohol_4yyQwsU.png',
            }}
          />
          <Text style={{color: '#707373', marginLeft: Mixins.scale(5)}}>
            Secure packaging
          </Text>
        </Card>
        <Card style={styles.safetyListCard}>
          <Image
            style={styles.cardSafetyImage}
            source={{
              uri:
                'https://cdn.datta.store/auxapi/files/image/alcohol_4yyQwsU.png',
            }}
          />
          <Text style={{color: '#707373', marginLeft: Mixins.scale(5)}}>
            Stored safety
          </Text>
        </Card>
        <Card style={styles.safetyListCard}>
          <Image
            style={styles.cardSafetyImage}
            source={{
              uri:
                'https://cdn.datta.store/auxapi/files/image/alcohol_4yyQwsU.png',
            }}
          />
          <Text style={{color: '#707373', marginLeft: Mixins.scale(5)}}>
            Regular Sanitization
          </Text>
        </Card>
        <Card style={styles.safetyListCard}>
          <Image
            style={styles.cardSafetyImage}
            source={{
              uri:
                'https://cdn.datta.store/auxapi/files/image/alcohol_4yyQwsU.png',
            }}
          />
          <Text style={{color: '#707373', marginLeft: Mixins.scale(5)}}>
            No contact Delivery
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safetyCard: {
    width: Mixins.scale(160),
    marginTop: Mixins.scale(20),
    marginBottom: Mixins.scale(20),
    marginLeft: Mixins.scale(12.5),
    borderRadius: Mixins.scale(5),
    height: Mixins.scale(90),
    flexDirection: 'column',
    borderColor: '#d0f4f5',
  },
  safetyListCard: {
    width: Mixins.scale(110),
    marginTop: Mixins.scale(20),
    marginBottom: Mixins.scale(20),
    marginLeft: Mixins.scale(12.5),
    borderRadius: Mixins.scale(5),
    height: Mixins.scale(90),
    flexDirection: 'column',
  },
  cardSafetyImage: {
    width: Mixins.scale(60),
    height: Mixins.scale(44),
    alignSelf: 'center',
  },
});

export default ScroolList;
