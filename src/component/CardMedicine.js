import {Card} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as Mixins from '../styles/mixins';

const CardMedicine = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', backgroundColor: '#ededed'}}>
        <Card style={styles.cardMedicine}>
          <Image
            style={styles.cardMedImage}
            source={{
              uri:
                'https://cdn.datta.store/auxapi/files/image/alcohol_4yyQwsU.png',
            }}
          />
          <View style={{flexDirection: 'column', marginTop: Mixins.scale(15)}}>
            <Text style={{fontWeight: '500', fontSize: Mixins.scale(16)}}>
              Order
            </Text>
            <Text style={{fontWeight: '500', fontSize: Mixins.scale(16)}}>
              Medicines
            </Text>
            <Text style={styles.offerText}>FLAT 40% OFF</Text>
          </View>
        </Card>
        <Card style={styles.cardMedicine}>
          <Image
            style={styles.cardMedImage}
            source={{
              uri:
                'https://cdn.datta.store/auxapi/files/image/alcohol_4yyQwsU.png',
            }}
          />
          <View style={{flexDirection: 'column', marginTop: 15}}>
            <Text style={{fontWeight: '500', fontSize: Mixins.scale(16)}}>
              Healthcare
            </Text>
            <Text style={{fontWeight: '500', fontSize: Mixins.scale(16)}}>
              Products
            </Text>
            <Text style={styles.offerText}>UPTO 60% OFF</Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardMedicine: {
    width: Mixins.scale(160),
    marginTop: Mixins.scale(20),
    marginBottom: Mixins.scale(20),
    marginLeft: Mixins.scale(10.5),
    borderRadius: Mixins.scale(5),
    height: Mixins.scale(100),
    flexDirection: 'row',
  },
  cardMedImage: {
    width: Mixins.scale(60),
    height: Mixins.scale(50),
    marginTop: Mixins.scale(11),
  },
  offerText: {
    fontWeight: '400',
    color: 'red',
    fontSize: Mixins.scale(13),
    marginTop: Mixins.scale(10),
  },
});

export default CardMedicine;
