// email is null, valid or not
export default function ValidateInput(email) {
  if (email === null) {
    return false;
  } else {
    // nextPage.push({ pathname: "/dev/newrelease" });
    return true;
  }
}
