import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

interface RequestVariables {
  token: string | null;
  header: string | null;
  userId: string | null;
  role: string | null;
}

let requestVariables: RequestVariables;

try {
  const token: string | undefined = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Token not found");
  }

  const header: string = "Bearer " + token;
  const decodedToken: any = jwtDecode(token);
  const userId: string = decodedToken.id;
  const role: string = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

  requestVariables = {
    token,
    header,
    userId,
    role,
  };
} catch (e) {
  console.error("Error getting or decoding token:", e);
  requestVariables = {
    token: null,
    header: null,
    userId: null,
    role: null,
  };
}

export { requestVariables };
