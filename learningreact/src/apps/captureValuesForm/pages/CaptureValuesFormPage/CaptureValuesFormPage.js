import * as React from "react";
import FormExampleCaptureValues from '../../components/FormExampleCaptureValues/FormExampleCaptureValues';
export class CaptureValuesFormPage extends React.Component {
  state = {
    contacts: []
  };

  render() {
    return (
      <div>
        <FormExampleCaptureValues></FormExampleCaptureValues>
      </div>
    );
  }
}
  export default CaptureValuesFormPage;