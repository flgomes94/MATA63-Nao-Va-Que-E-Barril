export interface Avaliacao {
    id: string;
    comentario: string;
    nome: string;
    avaliacao: "barril" | "neutro" | "deboa";
    professorId: string;
}