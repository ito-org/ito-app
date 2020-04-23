import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';

const bottomMenu = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#91e6d3',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 70,
    fontFamily: 'Ubuntu-R',
  },
  iconContainer: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopWidth: 3,
    borderTopColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    color: '#595959',
    width: 80,
  },
  icon: {
    color: '#595959',
  },
  buttonActive: {
    borderTopColor: '#595959',
    borderStyle: 'solid',
  },
});
const iconSize = 30;

export interface MenuItem {
  title: string;
  icon: string;
  active?: boolean;
  fn?: () => void;
}

interface BottomMenuProps {
  menuItems?: MenuItem[];
  navigation?: StackNavigationProp<RootStackParamList, any>;
  activate?: string;
}

export const BottomMenu: React.FC<BottomMenuProps> = ({
  menuItems,
  navigation,
  activate,
}) => {
  /* TODO: 
  just to get v2 up and running 
    if and only if this version of the 
    UI will be used, this component 
    should include a nested navigation 
    and not be injected manually in every screen
  */
  const predefinedMenuItems = [
    {
      title: 'Tracing',
      icon: 'hexagon',
      active: false,
      fn: () => {
        navigation?.navigate('Home');
      },
    },
    {
      title: 'Infected?',
      icon: 'sun',
      active: false,
      fn: () => {
        navigation?.navigate('Endangerment');
      },
    },
    {
      title: 'Help',
      icon: 'help-circle',
      active: false,
      fn: () => {
        navigation?.navigate('Onboarding');
      },
    },
    {
      title: 'About ito',
      icon: 'info',
      active: false,
    },
  ];

  const items = menuItems ? menuItems : predefinedMenuItems;
  const [isActive, setIsActive] = useState(
    items.map((v) => v.active || v.title === activate),
  );

  const activateItem = (idx: number) =>
    isActive.map((_, i) => (i === idx ? true : false));

  return (
    <View style={bottomMenu.container}>
      {items.map((item, idx) => {
        return (
          <View
            key={idx}
            style={[
              bottomMenu.iconContainer,
              isActive[idx] ? bottomMenu.buttonActive : {},
            ]}>
            <Icon
              name={item.icon}
              style={bottomMenu.icon}
              size={iconSize}
              onPress={() => {
                item.fn && !item.active && item.fn();
                // setIsActive(activateItem(idx)); // DON'T REMOVE WILL BE RELEVANT IF FULLY IMPLEMENTED
              }}></Icon>
            <Text>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
};
