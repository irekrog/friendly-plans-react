import React from 'react';
import { SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Card, IconButton, TextInput } from 'components';
import { FormikProps } from 'formik';
import { i18n } from 'locale';
import { PlanItem } from 'models';
import { dimensions, palette, typography } from 'styles';
import { ImagePicker } from './ImagePicker';
import { PlanItemFormData } from './PlanItemForm';

interface Props {
  planItem: PlanItem;
  formikProps: FormikProps<PlanItemFormData>;
  style?: StyleProp<ViewStyle>;
}

export class SimpleTask extends React.PureComponent<Props> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  render() {
    const { values, handleChange, submitForm } = this.props.formikProps;
    return (
      <SafeAreaView style={this.props.style}>
        <Card style={[styles.container]}>
          <ImagePicker planItem={this.props.planItem} />
          <TextInput
            style={styles.imageInputTextContainer}
            textStyle={styles.imageInputText}
            placeholder={i18n.t('planItemActivity:taskNameForChild')}
            value={values.nameForChild}
            onChangeText={handleChange('nameForChild')}
            onEndEditing={submitForm}
          />
          <View style={styles.timerButton}>
            <IconButton
              name="alarm-off"
              type="material"
              label={i18n.t('planItemActivity:timerButton')}
              containerStyle={styles.iconButtonContainer}
              size={24}
              color={palette.primaryVariant}
            />
          </View>
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: dimensions.spacingBig,
    paddingBottom: dimensions.spacingHuge,
    height: '90%',
  },
  iconButtonContainer: {
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    paddingHorizontal: dimensions.spacingSmall,
    borderRadius: 8,
  },
  imageInputTextContainer: {
    marginTop: 53,
    width: 240,
  },
  imageInputText: {
    ...typography.taskInput,
    textAlign: 'center',
  },
  timerButton: {
    position: 'absolute',
    right: dimensions.spacingBig,
    top: dimensions.spacingBig,
  },
});