import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './Filter';

export default class MyCheckbox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {checked:false};
    }
  
    onCheckmarkPress=()=> {
      this.setState({checked:!this.state.checked});
    }

    render() {
        return (
            <Pressable
              style={[styles.checkboxBase, this.state.checked && styles.checkboxChecked]}
              onPress={this.onCheckmarkPress}>
              {this.state.checked && <Ionicons name="checkmark" size={24} color="white" />}
            </Pressable>
        );
    }
}

