import React from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import {withNavigation} from 'react-navigation';
// import Icon from 'react-native-vector-icons/Ionicons';
 
 class BackButton extends React.Component 
 {
 
  render() 
  {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>

              <View style={{  padding:20,justifyContent: 'center', alignItems: 'center' }}>
                  {/* Back Icon */}
                  {/* <Icon name="md-arrow-back" size={25} color="#000000" /> */}
                  <Text>Back</Text>
              </View>

            </TouchableOpacity>
          );
      
    
  }
}

export default withNavigation(BackButton);