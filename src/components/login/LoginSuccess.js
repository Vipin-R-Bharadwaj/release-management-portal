const loginSuccess = (email, password, role, eid, push) => {
  localStorage.setItem(
    "credentials",
    JSON.stringify({
      eid: eid,
      email: email,
      password: password,
      role: role,
    })
  );
  setTimeout(() => {
    localStorage.removeItem("credentials");
  }, 600000);
  role === "admin"
    ? push("/admin/home")
    : role === "devops"
    ? push(`/devops/home`)
    : push(`/${role}/newrelease`);
};

export default loginSuccess;
