

export interface ILibro {
  id: string;
  nombreLibro: string;
  descripcion: string;
  precio: number;
  categoriaid: number;
  editorid: number;
  entrega: number;
  imagen: string;
  created_at?: string;
  updated_a?: string;
}

//export interface ILibros = ILibro[];
