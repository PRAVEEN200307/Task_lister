import JustValidate from "just-validate";

const validate1 = new JustValidate("#loginForm");

validate1
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
    },
  ])
  .addField("#password", [
    {
      rule: "required",
    },
    {
      rule: "password",
    },
  ])
  .onSuccess((event) => {
    const { email, conformPassword } = JSON.parse(
      localStorage.getItem("validate")
    );

    const form = event.target;
    const formdata = new FormData(form);
    const formData = [...formdata].reduce((obj, [key, value], index, array) => {
      obj[key] = value;
      return obj;
    }, {});



    const { email: userEmail, password } = formData;
    if (email === userEmail && password === conformPassword) {
      alert("login successfully");
      document.location.href = "./index.html";
    }else{
       alert("please check your email and password")
    }
  });
