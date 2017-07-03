import React, { Component, PropTypes, } from 'react';
import { reduxForm, Field } from 'redux-form';
import Dropzone from 'react-dropzone';

const FILE_FIELD_NAME = 'file';

const DropZoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone name={field.name} onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}>
        <div>Drop your files here</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            {files.map((file, index) =>
              <li key={index}>{file.name}</li>
            )}
          </ul>
        )}
    </div>
  )
}

 // TODO: Make axios call and send files to S3

export default DropZoneInput;
