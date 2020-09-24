import {Card} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {
  CardMedicine,
  Header,
  ScroolList,
  SearchInput,
} from '../component/index';
import * as Colors from '../styles/color';
import * as Mixins from '../styles/mixins';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Header />
        <View style={styles.locationTextView}>
          <Text style={styles.locationText}>Deliver To</Text>
          <Text style={styles.addressText}>607002 Chennai</Text>
          <Icon
            style={{
              paddingHorizontal: Mixins.scale(2),
              marginTop: Mixins.scale(-2),
            }}
            name="chevron-small-down"
            type="entypo"
            color="#ffff"
          />
        </View>
        <SearchInput />
      </View>
      <ScrollView>
        <Image
          style={{width: Mixins.scale(360), height: Mixins.scale(150)}}
          source={{
            uri:
              'https://i.pinimg.com/originals/1d/96/3f/1d963f147ac556ca461e07ab6e673a0c.png',
          }}
        />
        <CardMedicine />
        <Card style={styles.membershipCard}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Icon
                style={{
                  marginTop: Mixins.scale(15),
                  marginLeft: Mixins.scale(10),
                }}
                name="plus"
                type="font-awesome"
                color="#ebab2d"
                size={27}
              />
              <Text
                style={{
                  color: '#ebab2d',
                  marginLeft: Mixins.scale(10),
                  fontSize: Mixins.scale(22),
                  fontWeight: 'bold',
                }}>
                Plus
              </Text>
            </View>
            <View style={styles.offerView}>
              <Text style={styles.membershipText}>
                Save upto 10% extra & enjoy FREE
              </Text>
              <Text style={styles.membershipText}>
                delivery with PLUS membership
              </Text>
              <Text style={styles.membershipText}>know more > </Text>
            </View>
          </View>
        </Card>
        <ScroolList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  topView: {
    backgroundColor: Colors.PRIMARY_GREEN,
  },
  locationTextView: {
    flexDirection: 'row',
    marginTop: Mixins.scale(3),
  },
  locationText: {
    color: '#ffff',
    marginLeft: Mixins.scale(10),
  },
  addressText: {
    color: '#ffff',
    marginLeft: Mixins.scale(10),
    fontSize: Mixins.scale(13),
    fontWeight: 'bold',
  },
  membershipCard: {
    width: Mixins.scale(333),
    marginTop: Mixins.scale(20),
    marginBottom: Mixins.scale(20),
    marginLeft: Mixins.scale(12.5),
    borderRadius: Mixins.scale(5),
    height: Mixins.scale(100),
    flexDirection: 'row',
    backgroundColor: '#9867eb',
  },
  offerView: {
    flexDirection: 'column',
    marginLeft: Mixins.scale(20),
    marginTop: Mixins.scale(15),
  },
  membershipText: {
    fontSize: Mixins.scale(16),
    fontWeight: '600',
    color: '#ffff',
  },
});

export default Home;
