export interface ICliente {
    Codigo?: number;
    Nombre?: string;
    Telefono?: string;
    LimiteCredito?: number;
    Direccion?: string;
    Ciudad?: string;
    Pais?: string;
    CodigoPostal?: string;
}
export interface IUsuario {
    id: number;
    name: string;
    surname: string;
    rol: string;
    email: string;
    password: string;
    image: string;
    cliente?: ICliente;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface MsnApiRegister {
    status?: string;
    message?: string;
    errors?: string;
}
export interface MsnApiLogin {
    status?: string;
    message?: string;
    errors?: string;
    token?: IToken;
    user?: IUsuario;
}

export interface IToken {
   access_token: string;
   token_type: string;
   expires_at: string;
}