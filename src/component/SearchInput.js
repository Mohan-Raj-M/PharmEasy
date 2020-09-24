import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import * as Mixins from '../styles/mixins';

const SearchInput = () => {
  return (
    <View>
      <Input
        placeholder="Search medicines/healthcare products"
        placeholderTextColor="#525454"
        inputStyle={{fontSize: Mixins.scale(15)}}
        underlineColorAndroid="transparent"
        containerStyle={styles.container}
        leftIcon={
          <Icon
            style={{marginTop: Mixins.scale(2)}}
            name="search"
            type="evilicon"
            color="black"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderRadius: Mixins.scale(8),
    height: Mixins.scale(47),
    width: Mixins.scale(340),
    marginBottom: Mixins.scale(5),
    alignSelf: 'center',

    marginTop: Mixins.scale(7),
    marginBottom: Mixins.scale(15),
  },
});

export default SearchInput;
