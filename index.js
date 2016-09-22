/** React Native Percentage Circle
** @github  https://github.com/JackPu/react-native-percentage-circle 
** React Native Version >=0.25
**/

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  circle: {
    overflow: 'hidden',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
  },
  leftWrap: {
    overflow:'hidden',  
    position: 'absolute',
    top:0, 
  },
  rightWrap: {
    position: 'absolute',

  },
    
  loader:{
    position:'absolute',
    left:0,
    top:0,
    borderRadius:1000,
    
  },
  
  innerCircle: {
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    color: '#888',

  },
});


  
class PercentageCircle extends Component {
   
  propTypes:{
    color: React.PropTypes.string,
    radius: React.PropTypes.number,
    percent: React.PropTypes.number,
    borderWidth: React.Proptypes.number,    
    disabled: React.PropTypes.bool  
  }
  
  constructor(props) {
    super(props);
 
    let percent = this.props.percent;
    let leftTransformerDegree = '0deg';
    let rightTransformerDegree = '0deg';
    if(percent >= 50) {
      rightTransformerDegree = '180deg';
      leftTransformerDegree = (percent-50)*3.6 + 'deg';
    }else {
      rightTransformerDegree = percent * 3.6 + 'deg'; 
    }
    
    this.state = {
      percent:this.props.percent,
      borderWidth: this.props.borderWidth < 2 || !this.props.borderWidth ? 2 : this.props.borderWidth,
      leftTransformerDegree: leftTransformerDegree,
      rightTransformerDegree: rightTransformerDegree
    };
  }
    
  componentWillReceiveProps(nextProps) {
    let percent = nextProps.percent;
    let leftTransformerDegree = '0deg';
    let rightTransformerDegree = '0deg';
    if(percent >= 50) {
      rightTransformerDegree = '180deg';
      leftTransformerDegree = (percent-50)*3.6 + 'deg';
    }else {
      rightTransformerDegree = percent * 3.6 + 'deg'; 
    }
    this.setState({
      percent:this.props.percent,
      borderWidth: this.props.borderWidth < 2 || !this.props.borderWidth ? 2 : this.props.borderWidth,
      leftTransformerDegree: leftTransformerDegree,
      rightTransformerDegree: rightTransformerDegree
    });
  }
  
  render() {
    if(this.props.disabled) {
      return(
        <View style={[styles.circle,{
          width:this.props.radius*2,
          height: this.props.radius*2,
          borderRadius:this.props.radius
        }]}>
          <Text style={styles.text}>{this.props.disabledText}</Text>
        </View>  
      );
    }
    return (
      <View style={[styles.circle,{
        width:this.props.radius*2,
        height: this.props.radius*2,
        borderRadius:this.props.radius
      }]}>
        <View style={[styles.leftWrap,{
          width: this.props.radius,
          height: this.props.radius * 2,
          left:0,
        }]}>
          <View style={[styles.loader,{
            left: this.props.radius,
            width:this.props.radius,
            height: this.props.radius*2,
            borderTopLeftRadius:0,
            borderBottomLeftRadius:0,
            backgroundColor:this.props.color,
            transform:[{translateX:-this.props.radius/2},{rotate:this.state.leftTransformerDegree},{translateX:this.props.radius/2}],  
          }]}></View>
        </View>
        <View style={[styles.leftWrap,{
          left:this.props.radius,
          width: this.props.radius,
          height: this.props.radius * 2,
          left:this.props.radius,
        }]}>
          <View style={[styles.loader,{
            left:-this.props.radius,
            width:this.props.radius,
            height: this.props.radius*2,
            borderTopRightRadius:0,
            borderBottomRightRadius:0,
            backgroundColor:this.props.color,
            transform:[{translateX:this.props.radius/2},{rotate:this.state.rightTransformerDegree},{translateX:-this.props.radius/2}],  
          }]}></View>
        </View>  
            <View style={[styles.innerCircle,{
              width:(this.props.radius - this.state.borderWidth)*2, 
              height:(this.props.radius - this.state.borderWidth)*2,
              borderRadius:this.props.radius - this.state.borderWidth,
              backgroundColor: '#fff',
            }]}>
              <Text style={styles.text}>{this.props.percent}%</Text>
            </View>
            
        </View>
    );    

  }

};

module.exports = PercentageCircle;
    
