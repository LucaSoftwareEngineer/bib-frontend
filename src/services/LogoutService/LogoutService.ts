import SecureLS from "secure-ls";

const LogoutService = () => {
  const ls = new SecureLS();
  ls.remove("details");
};

export default LogoutService;