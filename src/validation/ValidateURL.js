export default function ValidateURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "bitbucket.org/whizdm/" + // domain nameß
      "(\\?[;&a-z\\d%_.~+=-]*)?" // query string
  ); // fragment locator
  return !!pattern.test(str);
}
