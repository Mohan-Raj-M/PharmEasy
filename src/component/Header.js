import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Mixins from '../styles/mixins';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Icon
          style={{marginTop: Mixins.scale(8), marginLeft: Mixins.scale(8)}}
          name="home"
          type="entypo"
          color="#ffff"
        />
        <Text style={styles.headerText}>PharmEasy</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Mixins.scale(7),
            marginLeft: Mixins.scale(125),
          }}>
          <Icon
            style={{marginTop: Mixins.scale(8), marginLeft: Mixins.scale(2)}}
            name="brightness-percent"
            type="material-community"
            color="#ffff"
          />
          <Icon
            style={{
              marginTop: Mixins.scale(8),
              marginLeft: Mixins.scale(8),
              paddingHorizontal: Mixins.scale(8),
            }}
            name="shopping-cart"
            type="entypo"
            color="#ffff"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginLeft: Mixins.scale(2),
  },
  headerText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: Mixins.scale(19),
    marginHorizontal: Mixins.scale(11),
    marginTop: Mixins.scale(10),
  },
});

export default Header;
