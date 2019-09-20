import { i18n } from 'locale';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { palette } from 'styles';
import { StyledText } from '../../components';
import { CopyPlanButton } from './CopyPlanButton';
import { CreatePlanButton } from './CreatePlanButton';

export class EmptyStudentPlansScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  navigate = () => {
    this.props.navigation.navigate('Dashboard');
  };

  render() {
    return (
      <View style={styles.container}>
        <CreatePlanButton onPress={this.navigate} />
        <StyledText>{i18n.t('planList:conjunction')}</StyledText>
        <CopyPlanButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.backgroundTinted,
  },
});
