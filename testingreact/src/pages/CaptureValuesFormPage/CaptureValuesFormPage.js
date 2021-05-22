import Navbar from '../../components/organisms/Navbar/Navbar'
import * as React from "react";
import FormExampleCaptureValues from '../../components/organisms/FormExampleCaptureValues/FormExampleCaptureValues';
export class CaptureValuesFormPage extends React.Component {
  state = {
    contacts: []
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <FormExampleCaptureValues></FormExampleCaptureValues>
      </div>
    );
  }
}
  export default CaptureValuesFormPage;