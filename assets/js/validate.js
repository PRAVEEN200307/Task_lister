import JustValidate from "just-validate";

const validate = new JustValidate("#signUp");

validate
  .addField("#userName", [
    {
      rule: "required",
      errorMessage: "FirstName is required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
    },
  ])
  .addField("#address", [
    {
      rule: "required",
    },
  ])
  .addField("#address", [
    {
      rule: "required",
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
  .addField("#conformPassword", [
    {
      rule: "required",
    },
    {
      rule: "password",
    },
  ])
  .onSuccess((event) => {
    const form = event.target;
    const data = new FormData(form);
    // get the data form the form
    const formData = [...data].reduce((obj, [key, value], index, array) => {
      obj[key] = value;
      return obj;
    }, {});
    
    // filter the from data
    const allowed = ["email", "conformPassword"];
    const filtered = allowed.reduce((obj = {}, key) => {
      obj[key] = formData[key];
      return obj;
    }, {});

    // get the data localStorage
    localStorage.setItem("validate", JSON.stringify(filtered));
    document.location.href = "./login.html";
    console.log("form sign up successfully");
  });
