export default function ValidateEmail(mail) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@moneyview.in$/;
  if (mail.match(re)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}
