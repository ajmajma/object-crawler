import React, { Component } from "react";
import PropTypes from "prop-types";

import { findDOMNode } from "react-dom";
import { tree } from "d3-state-visualizer";

class TreeChart extends Component {
  static propTypes = {
    state: PropTypes.object,
    rootKeyName: PropTypes.string,
    pushMethod: PropTypes.string,
    tree: PropTypes.shape({
      name: PropTypes.string,
      children: PropTypes.array
    }),
    id: PropTypes.string,
    style: PropTypes.shape({
      node: PropTypes.shape({
        colors: PropTypes.shape({
          default: PropTypes.string,
          parent: PropTypes.string,
          collapsed: PropTypes.string
        }),
        radius: PropTypes.number
      }),
      text: PropTypes.shape({
        colors: PropTypes.shape({
          default: PropTypes.string,
          hover: PropTypes.string
        })
      }),
      link: PropTypes.object
    }),
    size: PropTypes.number,
    aspectRatio: PropTypes.number,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    isSorted: PropTypes.bool,
    heightBetweenNodesCoeff: PropTypes.number,
    widthBetweenNodesCoeff: PropTypes.number,
    transitionDuration: PropTypes.number,
    tooltipOptions: PropTypes.shape({
      disabled: PropTypes.bool,
      left: PropTypes.number,
      top: PropTypes.number,
      offset: PropTypes.shape({
        left: PropTypes.number,
        top: PropTypes.number
      }),
      indentationSize: PropTypes.number,
      style: PropTypes.object
    })
  };

  componentDidMount() {
    this.renderChart = tree(findDOMNode(this), {
      state: this.props.tree,
      id: "treeExample",
      size: 1000,
      aspectRatio: 0.5,
      isSorted: false,
      widthBetweenNodesCoeff: 1.5,
      heightBetweenNodesCoeff: 2,
      style: { border: "1px solid black" },
      tooltipOptions: { offset: { left: 30, top: 10 }, indentationSize: 2 }
    });

    this.renderChart();
  }

  // TODO: fix or change, this would normally handle updates
  componentWillReceiveProps(nextProps) {
    this.renderChart();
  }

  render() {
    return <div />;
  }
}

export default TreeChart;
