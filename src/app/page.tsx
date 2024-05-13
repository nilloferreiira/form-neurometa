import { LoginCard } from "@/components/login/login-card";
import { Main } from "@/components/main/main";

export default function Home() {
  return (
        <Main>
          <div className="w-full mx-auto md:-ml-8 flex flex-col items-center justify-center">
          <LoginCard />
          </div>
        </Main>
  );
}
