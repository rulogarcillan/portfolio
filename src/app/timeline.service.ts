import { Injectable } from '@angular/core';
import { Timeline } from './mis_componentes/job/timeline';

@Injectable()
export class TimelineService {


  private _timeline: Timeline[] = [{
    tipo: 'trabajo',
    periodo: 'Septiembre 2017 – actual',
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
  }, {

    tipo: 'trabajo',
    periodo: 'Febrero 2016 - Abril 2016',
    empresa: 'Altran',
    cliente: 'Caser ',
    cargo: 'Analista programador',
    funcionalidades: 'Proyecto piloto - migración y enmascarado de un producto de la web mediador de caser a jquery y bootstrap',
    funciones: 'Migrar los JavaScript antiguos a la librería jquery, los xhtml a  html5 con formato bootstrap y adaptar los css para que la web sea los más parecido al portal del mediador además conseguir que la web sea responsive y cross browser ',
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
  }

  ];

  constructor() { }

  getTimeline(): Timeline[] {
    return this._timeline;
  }

}
