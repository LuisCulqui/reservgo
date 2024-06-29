export class Archivo {
  idArchivo!: string;
	nombreArchivo!: string;
	tipoArchivo!: string;
	url!: string;

  file: File;

  constructor(file: File){
    this.file = file;
  }
}
