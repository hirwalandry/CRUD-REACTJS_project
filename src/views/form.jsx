import React  from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

import FormControler from "./../component/FormController";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    firstname: Yup.string()
      .min(2, "C'mon, your name i longer than that")
      .required("Firstname is required!"),
    secondname: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required("Secondname is requred!"),
    email: Yup.string().email("Invalid email!").required("email is required!"),
    gender: Yup.string().required("Please choose your gender!"),
    dob: Yup.string().required("Date of birth is required"),
    status: Yup.string().required("Status is required!"),
  }),
  mapPropsToValues: ({ user }) => ({ ...user }),
  handleSubmit: (payload, { setSubmitting, props }) => {
    const { usersRecord } = props;
    usersRecord(payload);
    setSubmitting(false);
  },

  displayName: "Forms",
});

function Forms(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  // const { usersRecord } = useStateContext();
  // usersRecord(values);
  return (
    <div className=" bg-zinc-200 p-4 rounded-md shadow-md">
      <div className="text-2xl font-bold">User Form</div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-10 gap-2">
          <FormControler
            controler="input"
            type="text"
            name="firstname"
            id="firstname"
            label="Firstname"
            placeholder="enter your firstname..."
            error={touched.firstname && errors.firstname}
            onChange={handleChange}
            value={values.firstname}
            onBlur={handleBlur}
            className="p-2 rounded-md placeholder-slate-400"
          />
          <FormControler
            controler="input"
            type="text"
            name="secondname"
            id="secondname"
            label="Secondname"
            placeholder="enter your secondname..."
            error={touched.secondname && errors.secondname}
            onChange={handleChange}
            value={values.secondname}
            onBlur={handleBlur}
            className="p-2 rounded-md placeholder-slate-400"
          />
          <FormControler
            controler="input"
            type="email"
            name="email"
            id="email"
            label="Email"
            placeholder="enter your email..."
            error={touched.email && errors.email}
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            className="p-2 rounded-md placeholder-slate-400"
          />
          <div className="flex gap-2">
            <FormControler
              controler="input"
              type="radio"
              name="gender"
              id="gender"
              label="Gender"
              error={touched.gender && errors.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              gender={"male"}
              className="p-2 rounded-md placeholder-slate-400"
            />
            <FormControler
              controler="input"
              type="radio"
              name="gender"
              id="gender"
              label="Gender"
              onChange={handleChange}
              onBlur={handleBlur}
              gender={"female"}
              className="p-2 rounded-md placeholder-slate-400"
            />
          </div>
          <FormControler
            controler="input"
            type="date"
            name="dob"
            id="dob"
            label="Date of birth"
            error={touched.dob && errors.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 rounded-md text-slate-400"
          />
          <FormControler
            controler="select"
            name="status"
            id="status"
            label="Status"
            error={touched.status && errors.status}
            onChange={handleChange}
            onBlur={handleBlur}
            options={["married", "single", "other..."]}
            className="p-2 rounded-md text-slate-400"
          />
          <div className="flex gap-2">
            <FormControler
              controler="input"
              type="checkbox"
              name="asset.havingHouse"
              id="havingHouse"
              onChange={handleChange}
              onBlur={handleBlur}
              asset={"i have a house"}
              className="p-2 rounded-md text-slate-400"
            />
            <FormControler
              controler="input"
              type="checkbox"
              name="asset.havingCar"
              id="havingCar"
              onChange={handleChange}
              onBlur={handleBlur}
              asset={"i have a car"}
              className="py-2 px-4  rounded-md  text-slate-400 bg-white"
            />
            <FormControler
              controler="input"
              type="checkbox"
              name="asset.havingBisycle"
              id="havingBisycle"
              onChange={handleChange}
              onBlur={handleBlur}
              asset={"i have a bisycle"}
              className="p-2 rounded-md text-slate-400"
            />
          </div>

          <div className="p-2 bg-indigo-600 text-zinc-200 font-bold cursor-pointer hover:bg-indigo-800">
            <button type="submit" disabled={isSubmitting} className="w-full">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default formikEnhancer(Forms);
