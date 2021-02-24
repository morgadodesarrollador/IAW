export interface IProducto {
    CodigoProducto?: number;
    Nombre?: string;
    Proveedor?: string;
    LimiteCredito?: number;
    Descripcion?: string;
    CantidadEnStock?: number;
    PrecioVenta?: number,
    PrecioProveedor?: number,
    imagen?: string;
    Gama?: IGama;
}
export interface IGama {
    Gama: string;
    Descripcion: string;
    Imagen: string;
    productos?: IProducto[]
}

type GGamas = IGama[] | IGama;
export interface MsnApiGamas {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
    data?: IGama;
//    data?: G;
}
export interface MsnApiProductos {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
//    data?: IGama[] | IProducto[];
    data?: IProducto[];
 //   data?: IProducto[] | IProducto | IGama | IGama[];
}


