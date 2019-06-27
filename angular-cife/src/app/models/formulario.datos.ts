import { Curso, Turno, Sede } from './formulario.model';

export const CURSOS = [
    new Curso('HTML', 'HTML', 'HTML ...'),
    new Curso('CSS', 'CSS', 'CSS ...'),
    new Curso('JS', 'JavaScript', 'JavaScript ...'),
    new Curso('JV', 'Java', 'Java ...'),
    new Curso('Node', 'NodeJS', 'NodeJS ...'),
];


export const TURNOS = [
    new Turno('M', 'Mañana', 'Mañana 9:00...'),
    new Turno('T', 'Tarde', 'Tarde 15:00...'),
    new Turno('N', 'Noche', 'Noche 20:00...'),

];
export const SEDES = [
    new Sede('CD', 'cádiz', 'Cádiz'),
    new Sede('MD', 'madrid', 'Madrid'),
    new Sede('BN', 'barcelona', 'Barcelona'),

]



/*     <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="JS">JavaScript</option>
    <option value="JV">Java</option>
    <option value="Node">NodeJS</option>
 */