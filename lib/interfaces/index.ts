export interface Course {
  courseId: string;
  curso: string;
  nombre: string;
  color: string;
  dia: number | number[];
  hora: string | string[];
  horaT: string | string[];
  turno: string;
  aula: string;
  sede: string;
}

export interface Nota {
  instancia: string; // Instancia de evaluación
  calificacion: number; // Nota numerica. 0 .. 10, el 0 representa el ausente.
}
export interface Notas {
  courseId: string;
  name: string;
  notas: Nota[];
}
