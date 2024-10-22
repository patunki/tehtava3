import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}) {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  //JOUNI!///
  //En onnistunut tekemään sellaista eestaas nuolta niinkuin ohjeissa oli, joten tein samanlaisen valikon kun linkissä olleessa dokumentaatiossa. Ajaa saman asian mutta yhdellä extra klikkauksella.
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? ( 
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={openMenu}
            />
          }>
          <Menu.Item
            onPress={() => {
                navigation.navigate('Details')
            }}
            title="Details"
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}