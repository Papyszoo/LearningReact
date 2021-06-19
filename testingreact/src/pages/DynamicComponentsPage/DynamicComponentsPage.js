import * as React from "react";
import { DynamicComponent } from "../../components/atoms/DynamicComponent/DynamicComponent";
export default class DynamicComponentsPage extends React.Component {
  render() {
    return (
      <DynamicComponent body='<TestComponent />'></DynamicComponent>
    );
  }
}