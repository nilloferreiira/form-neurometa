import { User } from "@/utils/interfaces/AgendaResponseInterfaces";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserInfoDialog({ user }: { user: User }) {
  return (
    <DialogContent>
      <DialogHeader className="space-y-2">
        <DialogTitle>Informações do {user.role}</DialogTitle>

        <DialogDescription className="space-y-4 flex flex-row  items-end gap-4">
          <Avatar className=" w-16 h-16 ">
            <AvatarImage src={user.fotoPerfil} alt={"Foto do " + user.role} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-zinc-800">
              <span>Nome: </span>
              {user.nome}
            </h3>
            <h4 className="font-medium text-zinc-500">
              <span>Data de Nascimento: </span>
              
              {new Date(user.dataNascimento).toLocaleDateString()}
            </h4>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
