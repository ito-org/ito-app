import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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
  menuItems: MenuItem[];
}

export const BottomMenu: React.FC<BottomMenuProps> = ({menuItems}) => {
  console.log(menuItems);
  const [isActive, setIsActive] = useState(menuItems.map((v) => v.active));

  const activateItem = (idx: number) =>
    isActive.map((_, i) => (i === idx ? true : false));

  return (
    <View style={bottomMenu.container}>
      {menuItems.map((item, idx) => {
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
                item.fn && item.fn();
                setIsActive(activateItem(idx));
              }}></Icon>
            <Text>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
};
