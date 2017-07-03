import React, { Component, PropTypes, } from 'react';
import { reduxForm, Field } from 'redux-form';
import Dropzone from 'react-dropzone';
import renderOneDropzoneInput from '../drop_zone/renderOneDropzoneInput';

const FILE_FIELD_NAME = 'file';

class SignUpPicUpload extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  };
  
  onSubmit(data){
    console.log('file upload data', data)
    let body = new FormData();
  }
  

  
  render() {
    const {handleSubmit} = this.props;
    
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label htmlFor={FILE_FIELD_NAME}>Picture</label>
          <Field
            name={FILE_FIELD_NAME}
            component={renderOneDropzoneInput}
          />
        </div>
        <div>
          <button type="submit">Upload Picture</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'profilePicUpload',
})(SignUpPicUpload);