import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class NewLapse extends Component {
  
  handleFormSubmit(values) {
    console.log(values);
  }
  
  render() {
   const {handleSubmit, fields: {lapse_name, lapse_location, lapse_description, lapse_date, lapse_url }} = this.props;
    
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Row>
            <Col md={6}>
              <fieldset className="form-group">
                <label className='rhysLbl'>Name your Video: </label>
                <Field
                  name="lapse_name"
                  type="text"
                  component="input"
                  className="form-control rhysField" />
              </fieldset>
            </Col>
            <Col md={6}>
              <fieldset className="form-group">
                <label className='rhysLbl'>Location: </label>
                <Field
                  name="lapse_location"
                  type="text"
                  component="input"
                  className="form-control rhysField" />
              </fieldset>
            </Col>
          </Row>
          
          <fieldset className="form-group">
            <label className='rhysLbl'>Description: </label>
            <Field
              name="lapse_description"
              type="textarea"
              component="input"
              className="form-control rhysField" />
          </fieldset>
          <fieldset className="form-group">
            <label className='rhysLbl'>Date: </label>
            <Field
              name="lapse_date"
              type="date"
              component="input"
              className="form-control rhysField" />
          </fieldset>
          <fieldset className="form-group">
            <label className='rhysLbl'>Video URL: </label>
            <Field
              name="lapse_url"
              type="file"
              component="input"
              className="form-control rhysField"
              value= '' />
          </fieldset>
          {/* {this.renderAlert()} */}
          <button action="submit" className="rhysBtn">Create Lapse</button>
        </form>
      </div>
      
    )
  }
}
function mapStateToProps(state) {
  return (
    {
      userId: state.auth.userId,
      username: state.auth.username,
      profilePic: state.auth.profilePic
    }
  )
}

NewLapse = connect(mapStateToProps, null)(NewLapse)
NewLapse = reduxForm({
  form: "newlapse",
  fields: ['lapse_name, lapse_location, lapse_description, lapse_date, lapse_url']
})(NewLapse);

export default NewLapse;