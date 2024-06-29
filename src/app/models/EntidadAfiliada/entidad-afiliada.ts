import { Archivo } from "../Archivo/archivo";
import { TipoEntidad } from "../TipoEntidad/tipo-entidad";
import { Usuario } from "../Usuario/usuario";

export class EntidadAfiliada {
  tipoEntidad!: TipoEntidad;
	usuario!: Usuario;
	razonSocial!: string;
	direccion!: string;
	descripcion!: string;
	aforo!: number;
	precio!: number;
	estado!: number;
	archivos!: Archivo[];
}
