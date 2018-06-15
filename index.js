/** React Native Percentage Circle
 ** @github  https://github.com/JackPu/react-native-percentage-circle
 ** React Native Version >=0.25
 ** to fixed react native version
 *
 * 改模块源自 JackPu 的 react-native-percentage-circle v1.0.7
 *
 * 原模块在安卓手机上，当 percent 小于 50 时，进度圆环绘制会出现错误。
 *
 * 原因如下：
 *
 * 参见 React native 0.51 Known Issues(https://reactnative.cn/docs/0.51/known-issues.html)
 *
 * > overflow 样式在 Android 默认为 hidden 而且无法更改，且如果父容器有borderRadius圆角边框样式，
 * > 那么即便开启了overflow:hidden也仍然无法把子视图超出圆角边框的部分裁切掉。
 * > 这个问题只存在于Android上，iOS并没有这个问题
 *
 * 由于无法裁剪超出圆角边框的部分，所以即便当 percent < 50 时，设置 LeftTransformerDegree 为 0，
 * View#LeftTransformer 的半圆仍会显示在页面上。
 *
 * 因此本模块修改了 LeftTransformer 与 RightTransformer 的视图顺序，
 * 并且在 percent < 50 时，LeftTransformer 旋转 180 度，同时将其颜色修改为与底色相同。
 *
 *
 * Tested in devices as bellow:
 * * Android:
 *   - Device: XiaoMi 5
 *   - OS: Android 6.0.1 MXB48T
 *   - react: 15.4.1
 *   - react-native: 0.39.2
 *
 * * iOS:
 *   - Device: iPhone 6s
 *   - OS: iOS 11.4
 *   - react: 15.3.1
 *   - react-native: 0.33.1
 **/

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  circle: {
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3e3e3"
  },

  leftWrap: {
    overflow: "hidden",
    position: "absolute",
    top: 0
  },

  loader: {
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 1000
  },

  innerCircle: {
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 11,
    color: "#888"
  }
});

const deg = number => `${number}deg`;

function Disabled(props) {
  let { radius, disabledText } = props.data;
  let diameter = radius * 2;
  return (
    <View
      style={[
        styles.circle,
        {
          width: diameter,
          height: diameter,
          borderRadius: radius
        }
      ]}
    >
      <Text style={styles.text}>{disabledText}</Text>
    </View>
  );
}

function RightTransformer(props) {
  let { radius, rotate, color, percent } = props.data;
  let diameter = radius * 2;
  let half = percent >= 50;

  let rightTransformerDegree = deg(half ? 180 : percent * 3.6);

  return (
    <View
      style={[
        styles.leftWrap,
        {
          width: radius,
          height: diameter,
          left: radius,
          transform: [
            { translateX: -radius / 2 },
            { rotate: deg(rotate) },
            { translateX: radius / 2 }
          ]
        }
      ]}
    >
      <View
        style={[
          styles.loader,
          {
            left: -radius,
            width: radius,
            height: diameter,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: color,
            transform: [
              { translateX: radius / 2 },
              { rotate: rightTransformerDegree },
              { translateX: -radius / 2 }
            ]
          }
        ]}
      />
    </View>
  );
}

function LeftTransformer(props) {
  let { radius, rotate, color, bgcolor, percent } = props.data;
  let diameter = radius * 2;
  let half = percent >= 50;

  let leftTransformerDegree = deg(half ? (percent - 50) * 3.6 : 180);

  return (
    <View
      style={[
        styles.leftWrap,
        {
          width: radius,
          height: diameter,
          left: 0,
          transform: [
            { translateX: radius / 2 },
            { rotate: deg(rotate) },
            { translateX: -radius / 2 }
          ]
        }
      ]}
    >
      <View
        style={[
          styles.loader,
          {
            left: radius,
            width: radius,
            height: diameter,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            backgroundColor: half ? color : bgcolor,
            transform: [
              { translateX: -radius / 2 },
              { rotate: leftTransformerDegree },
              { translateX: radius / 2 }
            ]
          }
        ]}
      />
    </View>
  );
}

function InnerCircle(props) {
  let {
    radius,
    borderWidth,
    innerColor,
    percent,
    textStyle,
    children
  } = props.data;

  if (borderWidth < 2) borderWidth = 2;

  return (
    <View
      style={[
        styles.innerCircle,
        {
          width: (radius - borderWidth) * 2,
          height: (radius - borderWidth) * 2,
          borderRadius: radius - borderWidth,
          backgroundColor: innerColor
        }
      ]}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.text, ...textStyle]}>{percent}%</Text>
      )}
    </View>
  );
}

class PercentageCircle extends Component {
  propTypes: {
    color: React.PropTypes.string, // 进度条颜色
    bgcolor: React.PropTypes.string, // 背景条颜色
    innerColor: React.PropTypes.string, // 环内区域背景色
    radius: React.PropTypes.number, // 外圆半径
    percent: React.PropTypes.number, // 进度（百分比分子）
    borderWidth: React.Proptypes.number, // 环厚度（同心圆半径差值）
    textStyle: React.Proptypes.array,
    disabled: React.PropTypes.bool,
    rotate: React.PropTypes.number // 进度环起点与 12 点方向的夹角 0 - 360 度
  };

  render() {
    let { bgcolor, disabled, radius } = this.props;
    let diameter = radius * 2;

    return disabled ? (
      <Disabled data={this.props} />
    ) : (
      <View
        style={[
          styles.circle,
          {
            width: diameter,
            height: diameter,
            borderRadius: radius,
            backgroundColor: bgcolor
          }
        ]}
      >
        {/* 右长方形，左半边圆 */}
        <RightTransformer data={this.props} />

        {/* 左长方形，右半圆 */}
        <LeftTransformer data={this.props} />

        {/* 圆环内部 */}
        <InnerCircle data={this.props} />
      </View>
    );
  }
}

// set some attributes default value
PercentageCircle.defaultProps = {
  textStyle: [],
  percent: 0,
  borderWidth: 2,
  bgcolor: "#e3e3e3",
  innerColor: "#fff",
  rotate: 0
};

module.exports = PercentageCircle;
