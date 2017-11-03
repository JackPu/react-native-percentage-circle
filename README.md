# react-native-percentage-circle
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)]()
[![npm](https://img.shields.io/npm/v/react-native-percentage-circle.svg?maxAge=2592000)]()



<img width="400" src="http://img1.vued.vanthink.cn/vuede4474d80623ab3d17f2ca5aeb1ccd194.png"/>

React Native Version >= 0.25

React-Native-Percentage-Cirlce is a component which supports you define your percent and draw the circle.And also you can use it as a progress bar.And you can show some data in a circle you want.

[react.js version](https://github.com/JackPu/reactjs-percentage-circle)

<img width="480" src="http://img1.vued.vanthink.cn/vued9c00a0a75734849d01def751ca10f248.png"/>

*This is a screenshot of the Demo*

### Start 

``` bash
npm i react-native-percentage-circle --save

```

``` js

import PercentageCircle from 'react-native-percentage-circle';

//...

render() {
  <View>
    <PercentageCircle radius={35} percent={50} color={"#3498db"}></PercentageCircle>  
  </View>
   <View>
    <PercentageCircle radius={35} percent={50} color={"#3498db"}>
      <Image style={{width:20,height:20}} source={{require('your image')}} />
    </PercentageCircle>  
  </View>
}

```

### Options

| Props        | Type         | Example  | Description  |
| ------------- |:-------------:| -----:|----------:|
| color     | string | '#000' | the color of border |
| bgcolor     | string | '#e3e3e3' | the background color of the circle  |
| innerColor     | string | '#fff' | the color of the inside of the circle  |
| percent      | Number      |  30 | the percent you need |
| radius | Number     |    20 | how large the circle is |
| borderWidth | Number(default 2)     |    5 | the width of  percentage progress bar |
| textStyle | Array   | {fontSize: 24, color: 'red'} | define the style of the text which in the circle |
| children | jsx   | `<Text>123</Text>` | define the children component in the circle |

### Contributions

Your contributions and suggestions are welcome 😄😄😄

### MIT License



