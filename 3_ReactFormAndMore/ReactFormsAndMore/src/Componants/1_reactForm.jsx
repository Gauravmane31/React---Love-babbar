// 1
import { useForm } from "react-hook-form"; //import this package
import "./1_Form.css";
function ReactForm(params) {
  //2
  //Define form elements
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function submit(data) {
    // API simulation
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  }
  return (
    <>
      {/* 4 - handling submiting of data*/}
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name"></label>
          {/*3 -  using ...register we connected the input fields with the react form  */}
          <input
            className={errors.FullName ? "red-Color-border" : ""}
            {...register("FullName", {
              required: true,
              minLength: { value: 3, message: "should be greater than 3" },
              maxLength: { value: 6, message: "Should be less than 6" },
            })}
            type="text"
            id="name"
          />
          {errors.FullName && (
            <p className="red-Font">{errors.FullName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="ph"></label>
          <input
            {...register("PhoneNumber", {
              pattern: {
                value: /^\+\d{1,3}\s\d{6,14}$/,
                message: "enter in international format of ph number.",
              },
            })}
            type="tel"
            id="ph"
          />
          {errors.PhoneNumber && (
            <p className="red-Font">{errors.PhoneNumber.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="btn"></label>
          <input
            type="submit"
            id="btn "
            disabled={isSubmitting}
            value={isSubmitting ? "submitting" : "submit"}
          />
        </div>
      </form>
    </>
  );
}
export default ReactForm;
