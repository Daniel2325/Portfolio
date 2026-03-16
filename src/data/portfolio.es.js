const portfolioEs = {
    PERSONAL_INFO: {
        name: 'Daniel Domínguez',
        displayName: 'Daniel.D Dev',
        titleDisplay: 'Desarrollador Full Stack',
        subtitleDisplay: 'Arquitectura de Software · DevOps & Salesforce',
        email: 'dan.iban232526@gmail.com',
        linkedin: 'https://www.linkedin.com/in/daniel-dom%C3%ADnguez-04a866210/',
        github: 'https://github.com/Daniel2325',
        location: 'Quito, Ecuador',
    },

    BIO: [
        'Coordinador de Arquitectura de Software y Full Stack Engineer con más de 4 años construyendo y liderando sistemas críticos para el sector turismo. Diseño soluciones en React, Angular y .NET con foco en escalabilidad, expansión regional de plataformas y liderazgo técnico de equipos.',
        'Diseñé pipelines CI/CD en Azure DevOps que redujeron tiempos de despliegue en un 99%, containerizé servicios con Docker e integré análisis estático con SonarCloud en flujos de entrega continua.',
        'En Salesforce, desarrollé integraciones y automatizaciones con Apex y LWC que eliminaron el 90% de los errores en producción — mejorando la continuidad operativa de uno de los operadores turísticos más grandes de Latinoamérica.',
    ],

    EXPERTISE: [
        {
            icon: '💻',
            highlightClass: 'pink',
            title: 'Backend',
            titleSuffix: 'Development',
            description:
                'Desarrollo APIs REST y SOAP, microservicios en .NET/C# y servicios en Node.js para sistemas de alta disponibilidad. Experiencia en integración entre plataformas empresariales heterogéneas, modelado de datos en SQL Server y arquitectura orientada a la escalabilidad.',
            skills: ['.NET', 'C#', 'Node.js', 'REST APIs', 'SOAP', 'Microservicios', 'SQL Server'],
        },
        {
            icon: '⚛️',
            highlightClass: 'blue',
            title: 'Frontend',
            titleSuffix: 'Development',
            description:
                'Construyo interfaces en React y Angular con TypeScript, orientadas a rendimiento, mantenibilidad y experiencia de usuario. Experiencia en aplicaciones corporativas con arquitectura basada en componentes, diseño responsive y flujos de estado bien definidos.',
            skills: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
        },
        {
            icon: '☁️',
            highlightClass: 'orange',
            title: 'Salesforce',
            titleSuffix: 'Development',
            description:
                'Desarrollo y optimizo procesos en Salesforce mediante Apex, LWC, Triggers y Flows. He diseñado soluciones de automatización para flujos comerciales complejos e integrado Salesforce con sistemas externos en entornos de producción de alta exigencia.',
            skills: ['Apex', 'LWC', 'SOQL', 'Triggers', 'Flows', 'DevOps Center'],
        },
        {
            icon: '∞',
            highlightClass: 'blue',
            title: 'DevOps',
            titleSuffix: '& CI/CD',
            description:
                'Diseño e implemento pipelines CI/CD en Azure DevOps con etapas automáticas de build, testing y deploy. Uso Docker para containerización, SonarCloud para quality gates y Salesforce DevOps Center para la gestión del ciclo de vida de cambios.',
            skills: ['Azure DevOps', 'Docker', 'CI/CD Pipelines', 'SonarCloud', 'Git', 'GitHub Actions'],
        },
    ],

    EXPERIENCES: [
        {
            period: '2025 - Actualidad',
            title: 'Coordinador de Arquitectura de Software',
            company: 'Metropolitan Touring',
            location: 'Quito, Ecuador',
            description:
                'Coordino al equipo de desarrollo en la planificación, diseño e implementación de proyectos tecnológicos de alcance regional, actuando como referente técnico entre las necesidades del negocio y la ejecución del equipo. Responsable de definir lineamientos arquitectónicos, gestionar asignaciones y asegurar la calidad técnica de las entregas.',
            highlights: [
                'Lideré la implementación del sistema Core Operativo en Perú, adaptando flujos y reglas de negocio a los requerimientos operativos regionales, lo que permitió reducir tiempos de gestión y eliminar procesos manuales críticos para el equipo en campo.',
                'Coordiné la migración del Core de Ecuador a la versión actualizada del sistema, garantizando continuidad operativa total, integridad de datos y adopción transparente de las nuevas funcionalidades por parte de los usuarios finales sin interrupciones en producción.',
                'Planifiqué y acompañé al equipo en el ciclo completo de desarrollo — desde el diseño técnico y asignación de tareas hasta el despliegue en producción — asegurando alineación con los estándares de arquitectura definidos y cumplimiento de plazos de entrega.',
            ],
            tags: ['.NET', 'React', 'Azure DevOps', 'Arquitectura de Software', 'Liderazgo Técnico', 'Salesforce'],
        },
        {
            period: '2022 - 2025',
            title: 'Analista Programador',
            company: 'Metropolitan Touring',
            location: 'Quito, Ecuador',
            description:
                'Responsable del desarrollo, mantenimiento y evolución de los sistemas Salesforce de la compañía, con foco en integraciones con plataformas hoteleras y operativas críticas para el negocio.',
            highlights: [
                'Diseñé e implementé funcionalidades en Apex, Triggers, LWC y Flows que automatizaron flujos comerciales y operativos clave, reduciendo la intervención manual y aumentando la eficiencia del equipo de operaciones.',
                'Lideré el soporte técnico de nivel 2 para procesos críticos del negocio, reduciendo los tiempos de inactividad en un 30% mediante diagnóstico estructurado y resolución proactiva de incidentes en producción.',
                'Refactoricé las integraciones REST/SOAP entre Salesforce y los sistemas Opera y XTS, eliminando el 90% de los errores de conectividad y resolviendo fallos de timeout en sedes con cobertura de red limitada.',
                'Implementé Salesforce DevOps Center para la gestión de versiones y despliegue continuo, reemplazando procesos manuales por un flujo estructurado de entrega entre entornos sandbox y producción.',
            ],
            tags: ['Salesforce', 'Apex', 'LWC', 'DevOps Center', '.NET', 'Azure DevOps'],
        },
        {
            period: '2021 - 2022',
            title: 'Programador',
            company: 'Metropolitan Touring',
            location: 'Remoto',
            description:
                'Desarrollé el sistema CORE de operaciones que reemplazó una solución legada, modernizando la gestión operativa de la empresa a través de una arquitectura de microservicios y mejorando significativamente los tiempos de respuesta.',
            highlights: [
                'Diseñé e implementé pipelines CI/CD en Azure DevOps que redujeron los tiempos de despliegue en un 99%, integrando análisis automático de calidad con SonarCloud y habilitando entregas frecuentes con riesgo controlado.',
                'Arquitecté una capa de microservicios en .NET containerizados con Docker, mejorando la escalabilidad horizontal del sistema y optimizando el consumo de recursos de infraestructura.',
                'Desarrollé módulos clave del frontend en React y TypeScript orientados a productividad operativa, contribuyendo a un incremento del 15% en la satisfacción de los usuarios finales.',
            ],
            tags: ['.NET', 'React', 'TypeScript', 'Azure DevOps', 'Docker', 'SonarCloud'],
        },
        {
            period: '2021',
            title: 'Pasante IT',
            company: 'Metropolitan Touring',
            location: 'Remoto',
            description:
                'Brindé apoyo técnico al área de IT durante el desarrollo del sistema CORE, contribuyendo en la mejora de procesos internos y en el establecimiento de controles de calidad de código.',
            highlights: [
                'Colaboré en la optimización del proceso de contratación de proveedores IT, documentando flujos y proponiendo mejoras que agilizaron la selección y el onboarding de servicios tecnológicos.',
                'Desarrollé reportes de análisis de calidad con SonarCloud que habilitaron el seguimiento de deuda técnica, apoyando al equipo en la adopción temprana de buenas prácticas de desarrollo.',
            ],
            tags: ['SonarCloud', 'Git', 'Reporting'],
        },
    ],

    PROJECTS: [
        {
            title: 'Expansión Regional Core — Perú & Ecuador',
            description:
                'Implementación del sistema Core Operativo en Perú con adaptación completa de flujos y reglas de negocio regionales, y migración del Core de Ecuador a la versión actualizada. Coordiné al equipo técnico en ambas iniciativas, garantizando continuidad operativa, integridad de datos y cero interrupciones en producción durante las transiciones.',
            tags: ['.NET', 'React', 'Azure DevOps', 'Migración de Datos', 'Arquitectura', 'Liderazgo Técnico'],
            type: 'work',
            github: null,
            demo: null,
        },
        {
            title: 'Sistema CORE Operativo',
            description:
                'Plataforma de gestión operativa que reemplazó un sistema legado crítico. Arquitectura de microservicios en .NET con frontend en React/TypeScript y entrega continua automatizada en Azure DevOps. Mejoró los tiempos de respuesta operativa y habilitó la escalabilidad requerida para el crecimiento del negocio.',
            tags: ['.NET', 'React', 'TypeScript', 'Docker', 'Azure DevOps', 'SonarCloud'],
            type: 'work',
            github: null,
            demo: null,
        },
        {
            title: 'Integración Salesforce-Opera/XTS',
            description:
                'Refactorización de las integraciones REST/SOAP entre Salesforce y los sistemas hoteleros Opera y XTS. Redujo el 90% de los errores de conectividad en producción y eliminó fallos críticos de timeout que comprometían las operaciones en campo.',
            tags: ['Salesforce', 'Apex', 'REST APIs', 'SOAP', 'LWC'],
            type: 'work',
            github: null,
            demo: null,
        },
        {
            title: 'Pipeline CI/CD — Azure DevOps',
            description:
                'Infraestructura DevOps end-to-end para el ciclo de vida del software: pipelines CI/CD en Azure DevOps, quality gates con SonarCloud y containerización con Docker. Redujo los tiempos de despliegue un 99% y estandarizó el proceso de entrega del equipo.',
            tags: ['Azure DevOps', 'Docker', 'SonarCloud', 'CI/CD', 'Git'],
            type: 'work',
            github: null,
            demo: null,
        },
        {
            title: 'Portfolio Personal',
            description:
                'SPA de presentación profesional desarrollada con React 18 y CSS personalizado. Diseño orientado a impacto visual con animaciones CSS nativas, cursor custom y sección de proyectos con filtro dinámico. Desplegada en GitHub Pages con configuración PWA.',
            tags: ['React', 'CSS3', 'JavaScript', 'GitHub Pages'],
            type: 'personal',
            github: 'https://github.com/Daniel2325/Portfolio',
            demo: 'https://daniel2325.github.io/Portfolio/',
        },
    ],

    UI: {
        nav: {
            modalTitle: 'DevOps y Crecimiento Sin Límites',
            modalDescription:
                'Apasionado por construir sistemas robustos con entregas predecibles. Si buscas un perfil técnico que combine desarrollo y cultura DevOps, conversemos.',
            modalClose: 'Cerrar',
            statYears: 'Años de experiencia',
            statDeploy: 'Reducción en deploys',
            statErrors: 'Menos errores',
        },
        home: {
            ctaContact: 'Contacta conmigo',
            ctaDownload: 'Descarga mi CV',
        },
        expertise: {
            sectionTitle: 'My Expertise',
        },
        projects: {
            sectionTitle: 'Proyectos',
            subtitle: 'Una selección de proyectos que reflejan mi experiencia técnica y capacidad de resolución de problemas.',
            filterLabels: { all: 'Todos', work: 'Trabajo', personal: 'Personal' },
            typeLabels: { work: 'Trabajo', personal: 'Personal' },
        },
        experience: {
            sectionTitle: 'Experiencia',
        },
        contact: {
            sectionTitle: 'Pongámonos en contacto',
            subtitle: 'Si tienes un proyecto o simplemente quieres saludar, ¡no dudes en comunicarte!',
            infoTitle: 'Información de contacto',
            formTitle: 'Envía un mensaje',
            namePlaceholder: 'Nombre',
            emailPlaceholder: 'Email',
            messagePlaceholder: 'Mensaje',
            submitButton: 'Enviar Mensaje',
            successMessage: '¡Gracias! Se ha abierto tu cliente de correo con el mensaje listo para enviar.',
            emailSubject: 'Portfolio — Contacto de',
            emailFrom: 'De',
        },
    },
};

export default portfolioEs;
