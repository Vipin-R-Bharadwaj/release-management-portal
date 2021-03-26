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
  // setTimeout(() => {
  //   localStorage.removeItem("credentials");
  //   alert("Session Expired! Login again to continue");
  //   push("/");
  // }, 600000);
  role === "admin"
    ? push("/admin/home")
    : role === "devops"
    ? push(`/devops/home`)
    : role === "release_manager"
    ? push(`/releasemanager/home`)
    : push(`/${role}/newrelease`);
};

export default loginSuccess;

// const loginSuccess = (data, push) => {
//   localStorage.setItem(
//     "credentials",
//     JSON.stringify({
//       eid: data.id,
//       email: data.email,
//       podId: data.podid,
//       tokenType: data.tokenType,
//       username: data.username,
//       accessToken: data.accessToken,
//       role: data.roles,
//     })
//   );
//   setTimeout(() => {
//     localStorage.removeItem("credentials");
//     alert("Session Expired! Login again to continue");
//     push("/");
//   }, 6000000);
//   data.roles === "admin"
//     ? push("/admin/home")
//     : data.roles === "devops"
//     ? push(`/devops/home`)
//     : push(`/${data.roles}/newrelease`);
// };

// export default loginSuccess;
