import { Project } from '../types';

const controlHorasImages = [
  {
    src: '/images/projects/control-horas/01-resumen.png',
    alt: 'Panel de resumen con horas totales, número de registros y pendientes, filtrable por período'
  },
  {
    src: '/images/projects/control-horas/02-mis-horas.png',
    alt: 'Vista Mis horas con los registros del profesional, su proyecto, fecha y estado de aprobación'
  },
  {
    src: '/images/projects/control-horas/03-aprobaciones.png',
    alt: 'Cola de aprobaciones con acciones de aprobar o rechazar sobre cada registro'
  },
  {
    src: '/images/projects/control-horas/04-administracion.png',
    alt: 'Administración de clientes y proyectos con tarifa por hora y estado del proyecto'
  },
  {
    src: '/images/projects/control-horas/05-nuevo-registro.png',
    alt: 'Formulario de nuevo registro de horas con proyecto, fecha y cantidad de horas'
  }
];

export const projects: Project[] = [
  {
    id: "control-horas",
    title: "Control de Horas y Proyectos",
    description: "Aplicación empresarial en Power Apps sobre Dataverse para registrar horas imputables a proyectos, con flujo de aprobación y panel de control. Reemplaza la planilla compartida por una fuente única de datos con trazabilidad por registro.",
    technologies: ["Power Apps", "Power Automate", "Dataverse", "Microsoft 365"],
    highlights: [
      "Registro de horas imputado a proyecto, con fecha y estado de aprobación",
      "Vistas diferenciadas por rol: registro propio, aprobación y administración",
      "Aprobación o rechazo por registro desde una cola centralizada",
      "Panel de resumen con filtros por período y desglose de horas por proyecto",
      "Administración de clientes y proyectos con tarifa por hora"
    ],
    images: controlHorasImages
  },
  {
    id: "whatsapp-bot",
    title: "Bot de WhatsApp para Gestión de Usuarios",
    description: "Bot de WhatsApp desarrollado en Permify SPA para centralizar la atención y la gestión de usuarios, integrado con una plataforma web de administración construida en paralelo. Automatiza el flujo de conversación y genera los reportes de seguimiento desde Python.",
    technologies: ["Python", "WhatsApp API", "Desarrollo Web"],
    highlights: [
      "Implementado en Permify SPA, unidad de innovación (ene–mar 2024)",
      "Integración entre WhatsApp y la plataforma web de administración de usuarios",
      "Generación automática de reportes de seguimiento con Python",
      "Participación en análisis, desarrollo y pruebas de la solución"
    ]
  }
];
