# react-native-percentage-circle

[![npm](https://img.shields.io/npm/v/react-native-percentage-circle.svg?maxAge=2592000)]()



<img src="http://img1.vued.vanthink.cn/vuede4474d80623ab3d17f2ca5aeb1ccd194.png"/>

React Native Version >= 0.25

React-Native-Percentage-Cirlce is a component which supports you define your percent and draw the circle.And also you can use it as a progress bar.

<img src="http://img1.vued.vanthink.cn/vued467c4a48f880b36ace99599d3f2d776f.png"/>

### Start 

``` bash
npm i react-native-percentage-circle --save

```

``` js

import PercentageCircle from 'react-native-percentage-circle';

//...

redner() {
  <View>
    <PercentageCircle radius={35} percent={50} color={"#3498db"}></PercentageCircle>  
  </View>
}

```

### Options

| Props        | Type         | Example  | Description  |
| ------------- |:-------------:| -----:|----------:|
| color     | string | '#000' | the color of border |
| percent      | Number      |  30 | the percent you need |
| radius | Number     |    20 | how large the circle is |
| borderWidth | Number(default 2)     |    5 | the width of  percentage progress bar |
| textStyle | Array   | {fontSize: 24, color: 'red'} | define the style of the text which in the circle |
### Contributions

Your contributions and suggestions are welcome 😄😄😄

### MIT License



