import { FormPage } from "@/components/form/form-page";
import { Main } from "@/components/main/main";

export default function registerFormPage() {
    return (
        <div className="w-full mx-auto">
        <Main>
            <FormPage />
        </Main>
        </div>
    )
}