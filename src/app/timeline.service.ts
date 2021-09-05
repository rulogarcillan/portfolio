import { Injectable } from '@angular/core';
import { Timeline } from './mis_componentes/job/timeline';

@Injectable()
export class TimelineService {

  private _timeline: Timeline[] = [
    {
      tipo: 'trabajo',
      periodo: 'Abril 2021 - Actualmente',
      empresa: 'OpenBank',
      cliente: 'OpenBank',
      cargo: 'Senior Android Analyst || Tech leader',
      funcionalidades: 'Desarrollo, análisis, lider técnico android',
      funciones: 'Desarrollar aplaciones android, analizar, liderar squad y perseverar la arquitectura, enfrentarse a problemas técnicos y buscar la mejor solución, revisiones de código etc.',
      tecnologias: ['Ingles', 'android', 'kotlin', 'MVVM', 'databinding', 'livedata','retrofit', 'koin', 'jira', 'scrum', 'git', 'api rest', 'clean arquitecture', 'solid', 'integración continua', 'stack atlassian']
    },
    {
      tipo: 'trabajo',
      periodo: 'Noviembre 2020 - Abril 2021',
      empresa: 'Talentomobile',
      cliente: 'OpenBank',
      cargo: 'Senior Android Analyst || Tech leader',
      funcionalidades: 'Desarrollo, análisis, lider técnico android',
      funciones: 'Desarrollar aplaciones android, analizar, liderar squad y perseverar la arquitectura, enfrentarse a problemas técnicos y buscar la mejor solución, revisiones de código etc.',
      tecnologias: ['Ingles', 'android', 'kotlin', 'MVVM', 'databinding', 'livedata','retrofit', 'koin', 'jira', 'scrum', 'git', 'api rest', 'clean arquitecture', 'solid', 'integración continua', 'stack atlassian']
    },
    {
      tipo: 'trabajo',
      periodo: 'Abril 2020 - Octubre 2020',
      empresa: 'Talentomobile',
      cliente: 'Banco Santander',
      cargo: 'Senior Android Developer',
      funcionalidades: 'Desarrollo, a´nalisis',
      funciones: 'Desarrolador y ánalisis de la parte android en aplicaciones para santander global tech',
      tecnologias: ['android', 'kotlin', 'MVVM', 'databinding', 'livedata','retrofit', 'dagger2', 'jira', 'scrum', 'git', 'api rest', 'clean arquitecture', 'solid']
    },
    {
      tipo: 'trabajo',
      periodo: 'Abril 2019 - Abril 2020',
      empresa: 'Talentomobile',
      cliente: 'Banco Santander',
      cargo: 'Senior Android Developer',
      funcionalidades: 'Moneybit es una aplicación pfm (personal financial management) donde podras gestionar todas tus finanzas en un solo sitio.',
      funciones: 'Desarrolador y responsable de la parte android en la aplicación moneybit, desarrollador frontend de la aplicación nativa de android. Como tareas principales diseño la arquitectura de la aplicación siguiendo los principios SOLID, migración de todo el código legacy de java a kotlin, cambios en la arquitectura de MVP a MVVM e integración de todas los nuevas features en la apliación.',
      tecnologias: ['android', 'kotlin', 'java', 'MVVM', 'databinding', 'livedata','retrofit', 'dagger2', 'jira', 'scrum', 'git', 'api rest', 'clean arquitecture', 'solid']
    },
    {
      tipo: 'trabajo',
      periodo: 'Marzo 2018 - Marzo 2019',
      empresa: 'Altran',
      cliente: 'Axa',
      cargo: 'Team leader',
      funcionalidades: 'Miembro del development team y actual lider de equipo',
      funciones: 'Liderazgo del equipo ecomerce, desarrollo de productos, funnels, gestión de los procesos de leads, trabajamos con metodologías agiles y framework scrum',
      tecnologias: ['reacjs', 'java', 'javascript', 'html5', 'css3', 'gwt', 'jira', 'scrum', 'git']
    },
    {
    tipo: 'trabajo',
    periodo: 'Septiembre 2017 – Marzo 2018',
    empresa: 'Altran',
    cliente: 'Caser',
    cargo: 'Analista Programador',
    funcionalidades: 'Proyecto donde se crean una librerías nativas Android e Ios, para ser integradas en aplicaciones tanto para caser como de terceros, donde se recoge la ubicación del dispositivo y es enviada a un core creado con spring boot para ver si estas dentro de un punto caliente, el cual tenga asociado una campaña de venta, el cliente recibiría una notificación push con una oferta. Creación de un panel de control y un microsite de contratación.',
    funciones: 'Analisis, creación modelo de datos, creación de la dashboard de control de campañas y hotspot (angularjs), creación del api rest necesario (spring boot), creación del microsite de contratación y tarificación (angularjs), creación de las librerías nativas, integración con firebase.',
    tecnologias: ['java', 'Android nativo', 'Ios nativo', 'Sass', 'Angularjs', 'nodeJs', 'Spring boot', 'Api rest', 'Sql', 'oracle', 'Firebase', 'Git', 'gulp']
  },
  {
    tipo: 'trabajo',
    periodo: 'Septiembre 2017 – Noviembre 2017',
    empresa: 'Altran',
    cliente: 'Mapfre',
    cargo: 'Analista funcional',
    funcionalidades: 'Integrar el nuevo sistema de desagregación de coberturas en el sistema de prestaciones autos de tron21 para permitir la apertura de siniestros en función de nuevas pólizas de RC de Autemis.',
    funciones: 'Análisis y creación de diseños técnicos',
    tecnologias: ['PL/SQL', 'SQL', 'oracle']

  }, {
    tipo: 'trabajo',
    periodo: 'Septiembre 2016 – Agosto 2017',
    empresa: 'Altran',
    cliente: 'Caser',
    cargo: 'Analista programador',
    funcionalidades: 'Adaptar los sistemas de PAP caser para incluir la gestión de expedientes de los sistemas de asistencia en carretera Race, creación de la aplicación de gestión IAS dentro del escritorio de aplicaciones de caser basada en angularJs. ',
    funciones: 'Análisis y desarrollo de todos los casos de uso definidos por el cliente',
    tecnologias: ['Java', 'Flex', 'AngularJs', 'Html5', 'css3', 'nodeJs', 'bootstrap', 'sql', 'oracle', 'pl/sql', 'servicios rest', 'gulp']
  },
  {
    tipo: 'trabajo',
    periodo: 'Junio 2016 – Septiembre 2016',
    empresa: 'Altran',
    cliente: 'Axa',
    cargo: 'Analista programador',
    funcionalidades: 'Adaptar el alta de pólizas desde la aplicación RPS para incluir cupones de descuento e iteración con ecommerce.',
    funciones: 'Análisis y desarrollo de todos los casos de uso definidos por el cliente',
    tecnologias: ['Java', 'Struts', 'Html5', 'css3']
  },
  {
    tipo: 'trabajo',
    periodo: 'Abril 2016 – Junio 2016',
    empresa: 'Altran',
    cliente: 'Axa',
    cargo: 'Analista funcional',
    funcionalidades: 'Proyecto Auto Brokers, comercializar los dos nuevos productos, Auto Protect y Moto Protect, gestionados en la plataforma de AGD bajo la marca de AXA. ',
    funciones: 'Documentación de los análisis funcionales y toma de requisitos de las diferentes aplicaciones y sistemas afectados en el proyecto Auto Brokers'
    , tecnologias: []
  }, 
  {
    tipo: 'trabajo',
    periodo: 'Febrero 2016 - Abril 2016',
    empresa: 'Altran',
    cliente: 'Caser ',
    cargo: 'Analista programador',
    funcionalidades: 'Proyecto piloto - migración y enmascarado de un producto de la web mediador de caser a jquery y bootstrap',
    funciones: 'Migrar los JavaScript antiguos a la librería jquery, los xhtml a html5 con formato bootstrap y adaptar los css para que la web sea los más parecido al portal del mediador además conseguir que la web sea responsive y cross browser ',
    tecnologias: ['javascript', 'jquery', 'css3', 'html5', 'bootstrap']
  },
  {
    tipo: 'trabajo',
    periodo: 'Octubre 2015 – Febrero 2016',
    empresa: 'Altran',
    cliente: 'Caser ',
    cargo: 'Analista funcional, analista programador',
    funcionalidades: 'Automatismos sobre pólizas para acciones de retención de carteras las cuales incluyen mejoras y cambios en la aplicación gestión del módulo de retención (SORET). Procesos de descentralización de pólizas de la WM, suplementos masivos que engloban acciones de retención, suplementos con extornos de prima en acciones de retención, simulación/consulta sobre una póliza para conocer los términos de la  próxima renovación.',
    funciones: 'Análisis funcional de los procesos,  programación de los procedimientos y cambios necesarios en los paquetes, pantallas y objetos de BBDD necesarios para implementar las nuevas funcionalidades requeridas por el cliente',
    tecnologias: ['PL/SQL', 'SQL', 'Oracle', 'Oracle forms', 'java', 'flex']
  },
  {
    tipo: 'trabajo',
    periodo: 'Marzo 2013 – Septiembre 2015',
    empresa: 'Altran',
    cliente: 'Mapfre ',
    cargo: 'Analista funcional, analista programador',
    funcionalidades: 'Mantenimiento del nucleo TRON21 de mapfre.',
    funciones: 'Análisis funcional de los paquetes, procedimientos, procesos diarios y mensuales necesarios para el mantenimiento del backed TRON21 de Mapfre, contabilidad diaria, generación de asientos, siniestralidad de Autos. Analisis y creación de diseños técnicos para evolutivos y nuevos proyectos como el NSE (nuevo sistema de emisión de autos).',
    tecnologias: ['PL/SQL', 'SQL', 'Oracle', 'Host', 'JCL']
  },
  {
    tipo: 'trabajo',
    periodo: 'Febrero 2012 – Febrero 2013',
    empresa: 'Altran',
    cliente: 'Caser ',
    cargo: 'Analista programador',
    funcionalidades: 'Migración de los sistemas de asistencia de AS400 a SVG',
    funciones: 'Análisis de los paquetes, procedimientos y procesos necesarios en el desarrollo de las pantallas y paquetes de impresión, fraccionamiento de pago abierto y participación de beneficios para nuevos productos de SVG',
    tecnologias: ['PL/SQL', 'SQL', 'Oracle', 'Oracle forms']
  },
  {
    tipo: 'trabajo',
    periodo: 'Junio 2011 - Enero 2012',
    empresa: 'Future Space',
    cliente: 'Caser ',
    cargo: 'Analista programador',
    funcionalidades: 'Seguros Vida. Migración del teleproceso.',
    funciones: 'Programación, análisis y desarrollo sobre el teleproceso para su migración a SVG. Creación de pantallas, impresiones, simulaciones, altas y pruebas de usuario.',
    tecnologias: ['PL/SQL', 'SQL', 'Oracle', 'Oracle forms']
  },
  {
    tipo: 'trabajo',
    periodo: '  Diciembre 2010 - febrero 2011',
    empresa: 'Wunderman',
    cliente: 'Wunderman ',
    cargo: 'Programador',
    funcionalidades: 'Generación de cartas para el usuario informando del vencimiento de su contrato. Programación de paquetes, acceso a bases de datos y creación de pantallas.',
    funciones: 'Programación',
    tecnologias: ['PL/SQL', 'SQL', 'vB .net']
  },
  {
    tipo: 'trabajo',
    periodo: 'Mayo 2008 - Mayo 2010',
    empresa: 'Bull - Siconet',
    cliente: 'Mapfre ',
    cargo: 'Programador',
    funcionalidades: 'Desarrollo y pruebas PL/SQL Arquitectura Mapfre Versión 2 de diferentes aplicativos de Mapfre Familiar y Mapfre Empresas. Proyectos como consultas caución, caja salud, tron-21, caja Madrid venta de seguros de mutualidad.',
    funciones: 'Programación',
    tecnologias: ['PL/SQL', 'SQL', 'Oracle']
  },
  {
    tipo: 'trabajo',
    periodo: 'Abril 2007 - Enero 2008',
    empresa: 'Armatek',
    cliente: 'Armatek ',
    cargo: 'Programador Junior',
    funcionalidades: 'Beca en prácticas como desarrollador',
    funciones: 'Beca',
    tecnologias: ['MySql', 'ABAP4', 'vB .net', 'SQL']
  }
  ];

  constructor() { }

  getTimeline(): Timeline[] {
    return this._timeline;
  }

}
