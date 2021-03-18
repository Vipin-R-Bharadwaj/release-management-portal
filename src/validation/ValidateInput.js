import ValidateEmail from "./ValidateEmail";

// email is null, valid or not
export default function ValidateInput(email, nextPage) {
  if (email === null) {
    alert("Enter email and password to continue!");
  } else if (ValidateEmail(email)) {
    if (email === "manager@moneyview.com") {
      nextPage.push({ pathname: "/dev", title: "Manager" });
    } else {
      nextPage.push({ pathname: "/dev", title: "Developer" });
    }
  }
}
