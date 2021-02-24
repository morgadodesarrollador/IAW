export interface LoginInterface {
  status: string;
  token: string;
  tipo: string;
  user: {
    nidEscolar?: string;
    usuarioIdea?: string;
    name: string;
    pass: string;
    puesto?: string;
    unidad?: string;
    puntos?: number;
  };
}
