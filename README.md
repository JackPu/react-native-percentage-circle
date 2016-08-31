# react-native-percentage-circle <img src="https://camo.githubusercontent.com/3968e0ea333f986243e5e631b01d1ee2f45552bd/68747470733a2f2f62616467652e667572792e696f2f6a732f72656163742d6e61746976652d7363726f6c6c61626c652d7461622d766965772e737667"/>



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
### Contributions

Your contributions and suggestions are welcome 😄😄😄

### MIT License



