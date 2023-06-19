import React from 'react';
import { file, fileLink, team } from '../../assets/images';
import { Header, Footer } from '../../components';
import { Form, Field } from 'react-final-form';
import './badgingForm.scss';

const onSubmit = (values) => {
  console.log(values);
};
const BadgingForm = () => {
  return (
    <div className="formContainer">
      <Header />
      {/* <h3>Project Demographics</h3> */}
      <div className="form-main">
        <Form
          onSubmit={onSubmit}
          // validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="formItemWrap">
                <h4 id="form-header">Project Demographics</h4>
                <div>
                  <label htmlFor="projectName">Project Name</label> <br />
                  <div className="formField">
                    <div className="inputIcon">
                      <img src={file} alt="file svg" />{' '}
                    </div>
                    <Field
                      name="projectName"
                      component="input"
                      placeholder="Project Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="Team">Team</label>
                  <br />
                  <div className="formField">
                    <div className="inputIcon">
                      <img src={team} alt="file svg" />{' '}
                    </div>
                    <Field name="Team" component="input" placeholder="Team" />
                  </div>
                </div>
                <div>
                  <label htmlFor="projectRepository">
                    Link to your project repository or website{' '}
                  </label>
                  <br />
                  <div className="formField">
                    <div className="inputIcon">
                      <img src={fileLink} alt="file svg" />
                    </div>
                    <Field
                      name="projectRepository"
                      component="input"
                      placeholder="project/github"
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="projectDescription">
                    Project Description
                  </label>
                  <br />

                  <Field
                    name="projectDescription"
                    component="textarea"
                    placeholder=""
                    id="badgeTextArea"
                  />
                </div>
                <p id="maxText">100 Characters Max.</p>
                <button type="submit" id="badgeBtn">
                  Submit
                </button>
              </div>
            </form>
          )}
        />
      </div>
      <Footer />
    </div>
  );
};

export default BadgingForm;
