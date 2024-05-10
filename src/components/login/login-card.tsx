import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { LoginForm } from "./login-form";

export function LoginCard() {
  return (
    <Card className="w-4/5 md:w-80">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
      <LoginForm />
      </CardContent>
      <CardFooter>
       Esqueceu sua senha?
      </CardFooter>
    </Card>
  );
}
