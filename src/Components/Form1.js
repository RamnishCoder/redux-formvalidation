import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div>
            <div className="cent col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="change">
                    Registration Form
                  </h3>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field>
                      <div className="col-md-8">
                        <div className="form-outline col-12">
                          <label className="form-label select-label">
                            Student Name
                          </label>

                          <input
                            placeholder="First Name"
                            type="text"
                            className="form-control form-control-lg"
                            {...register("firstName", {
                              required: true,
                              maxLength: 10,
                            })}
                          />
                    {errors.firstName && <marquee className=" mrqe" direction="right">Please check the First Name</marquee>}


                        </div>
                      </div>
                    </Form.Field>
                    <Form.Field>
                      <div className="col-md-8 ">
                        <div className="form-outline">
                          <label className="form-label">Father Name</label>
                          <input
                            placeholder="Father Name"
                            type="text"
                            className="form-control form-control-lg"
                            {...register("FatherName", {
                              required: true,
                              maxLength: 10,
                            })}
                          />
                    {errors.FatherName && <marquee className=" mrqe" direction="right">Please check the last Name</marquee>}

                        </div>
                      </div>
                    </Form.Field>

                    <Form.Field>
                      <div className="col-md-8 ">
                        <div className="form-outline">
                          <label className="form-label">Mother Name</label>
                          <input
                            placeholder="mother Name"
                            type="text"
                            className="form-control form-control-lg"
                            {...register("mothername", {
                              required: true,
                              maxLength: 10,
                            })}
                          />
                    {errors.mothername && <marquee className=" mrqe" direction="right">Please check the Mother Name</marquee>}

                        </div>
                      </div>
                    </Form.Field>

                    <Form.Field>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1 mt-5">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="Female"
                            // {...register("gender", {
                               
                            //     maxLength: 1,
                            //   })}
                          />
                          <label
                            className="form-check-label"
                            for="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="Male"
                          />
                          <label className="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="Other"
                          />
                          <label className="form-check-label" for="otherGender">
                            Other
                          </label>
                        </div>
                    {errors.gender && <p>Please check the gender Name</p>}

                      </div>
                    </Form.Field>

                    <Form.Field>
                      <div className="col-md-8 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <label for="birthdayDate" className="form-label">
                            Date of Birth:
                          </label>

                          <input
                            type="date"
                            className="form-control form-control-lg"
                            id="birthdayDate"
                          />
                        </div>
                      </div>
                    </Form.Field>

                    {errors.lastName && <p>Please check the Last Name</p>}
                    <Form.Field>
                      <div className="col-md-8 ">
                        <div className="form-outline">
                          <label>Email</label>
                          <input
                            placeholder="Email"
                            className="form-control form-control-lg"
                            type="email"
                            {...register("email", {
                              required: true,
                              pattern:
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                          />
                    {errors.email && <marquee className=" mrqe" direction="right">Please check the Email</marquee>}

                        </div>
                      </div>
                    </Form.Field>
                    <Form.Field>
                      <div className="col-md-8 ">
                        <div className="form-outline">
                          <label>Mobile</label>
                          <input
                            placeholder="Ph.no"
                            className="form-control form-control-lg"
                            type="tel"
                            {...register("mobile", {
                              required: true,
                              pattern:
                                /^(?=.*\d)(?=.*[0-9])(?=.*[0-9]).{10,20}$/,
                            })}
                          />
                    {errors.mobile && <marquee className=" mrqe" direction="right">Please check the Contail Number</marquee>}

                        </div>
                      </div>
                    </Form.Field>
                    <div className="col-md-8 ">
                      <Button type="submit" className="btn btn-danger btn-lg">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
