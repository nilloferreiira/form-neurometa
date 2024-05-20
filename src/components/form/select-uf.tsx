import { SelectContent, SelectItem } from "../ui/select";

export function SelectUF() {
  const ufArray = [
    { value: "AC", label: "AC" },
    { value: "AL", label: "AL" },
    { value: "AM", label: "AM" },
    { value: "AP", label: "AP" },
    { value: "BA", label: "BA" },
    { value: "CE", label: "CE" },
    { value: "DF", label: "DF" },
    { value: "ES", label: "ES" },
    { value: "GO", label: "GO" },
    { value: "MA", label: "MA" },
    { value: "MG", label: "MG" },
    { value: "MS", label: "MS" },
    { value: "MT", label: "MT" },
    { value: "PA", label: "PA" },
    { value: "PB", label: "PB" },
    { value: "PE", label: "PE" },
    { value: "PI", label: "PI" },
    { value: "PR", label: "PR" },
    { value: "RJ", label: "RJ" },
    { value: "RN", label: "RN" },
    { value: "RO", label: "RO" },
    { value: "RR", label: "RR" },
    { value: "RS", label: "RS" },
    { value: "SC", label: "SC" },
    { value: "SE", label: "SE" },
    { value: "SP", label: "SP" },
    { value: "TO", label: "TO" },
  ];

  return (
    <SelectContent className="bg-royleBlue/20">
      {ufArray.map((uf) => (
      <SelectItem key={uf.value} className="bg-zinc-50" value={uf.value}>
        {uf.label}
      </SelectItem>
      ))}
    </SelectContent>
  );
}
