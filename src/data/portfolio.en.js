const portfolioEn = {
    PERSONAL_INFO: {
        name: 'Daniel Domínguez',
        displayName: 'Daniel.D Dev',
        titleDisplay: 'Full Stack Developer',
        subtitleDisplay: 'Software Architecture · DevOps & Salesforce',
        email: 'dan.iban232526@gmail.com',
        linkedin: 'https://www.linkedin.com/in/daniel-dom%C3%ADnguez-04a866210/',
        github: 'https://github.com/Daniel2325',
        location: 'Quito, Ecuador',
    },

    BIO: [
        'Software Architecture Coordinator and Full Stack Engineer with 4+ years building and leading critical systems for the tourism sector. I design solutions in React, Angular and .NET focused on scalability, regional platform expansion and technical team leadership.',
        'Designed CI/CD pipelines in Azure DevOps that reduced deployment times by 99%, containerized services with Docker and integrated static analysis with SonarCloud into continuous delivery workflows.',
        'In Salesforce, developed integrations and automations with Apex and LWC that eliminated 90% of production errors — improving operational continuity for one of the largest tour operators in Latin America.',
    ],

    EXPERTISE: [
        {
            icon: '💻',
            highlightClass: 'pink',
            title: 'Backend',
            titleSuffix: 'Development',
            description:
                'I develop REST and SOAP APIs, microservices in .NET/C# and Node.js services for high-availability systems. Experience in integration between heterogeneous enterprise platforms, SQL Server data modeling and scalability-oriented architecture.',
            skills: ['.NET', 'C#', 'Node.js', 'REST APIs', 'SOAP', 'Microservices', 'SQL Server'],
        },
        {
            icon: '⚛️',
            highlightClass: 'blue',
            title: 'Frontend',
            titleSuffix: 'Development',
            description:
                'I build interfaces in React and Angular with TypeScript, focused on performance, maintainability and user experience. Experience in corporate applications with component-based architecture, responsive design and well-defined state flows.',
            skills: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
        },
        {
            icon: '☁️',
            highlightClass: 'orange',
            title: 'Salesforce',
            titleSuffix: 'Development',
            description:
                'I develop and optimize processes in Salesforce using Apex, LWC, Triggers and Flows. I have designed automation solutions for complex business workflows and integrated Salesforce with external systems in demanding production environments.',
            skills: ['Apex', 'LWC', 'SOQL', 'Triggers', 'Flows', 'DevOps Center'],
        },
        {
            icon: '∞',
            highlightClass: 'blue',
            title: 'DevOps',
            titleSuffix: '& CI/CD',
            description:
                'I design and implement CI/CD pipelines in Azure DevOps with automatic build, testing and deploy stages. I use Docker for containerization, SonarCloud for quality gates and Salesforce DevOps Center for change lifecycle management.',
            skills: ['Azure DevOps', 'Docker', 'CI/CD Pipelines', 'SonarCloud', 'Git', 'GitHub Actions'],
        },
    ],

    EXPERIENCES: [
        {
            period: '2025 - Present',
            title: 'Software Architecture Coordinator',
            company: 'Metropolitan Touring',
            location: 'Quito, Ecuador',
            description:
                'I coordinate the development team in planning, design and implementation of regional technology projects, acting as technical lead between business needs and team execution. Responsible for defining architectural guidelines, managing assignments and ensuring technical quality of deliverables.',
            highlights: [
                'Led the implementation of the Core Operative system in Peru, adapting business flows and rules to regional operational requirements, reducing management times and eliminating critical manual processes for field teams.',
                'Coordinated the migration of the Ecuador Core to the updated system version, ensuring full operational continuity, data integrity and transparent adoption of new features by end users with zero production interruptions.',
                'Planned and accompanied the team through the complete development cycle — from technical design and task assignment to production deployment — ensuring alignment with defined architecture standards and delivery deadlines.',
            ],
            tags: ['.NET', 'React', 'Azure DevOps', 'Software Architecture', 'Technical Leadership', 'Salesforce'],
        },
        {
            period: '2022 - 2025',
            title: 'Software Analyst',
            company: 'Metropolitan Touring',
            location: 'Quito, Ecuador',
            description:
                'Responsible for the development, maintenance and evolution of the company\'s Salesforce systems, focused on integrations with critical hotel and operational platforms for the business.',
            highlights: [
                'Designed and implemented features in Apex, Triggers, LWC and Flows that automated key commercial and operational workflows, reducing manual intervention and increasing operations team efficiency.',
                'Led level 2 technical support for critical business processes, reducing downtime by 30% through structured diagnosis and proactive incident resolution in production.',
                'Refactored REST/SOAP integrations between Salesforce and the Opera and XTS systems, eliminating 90% of connectivity errors and resolving timeout failures at locations with limited network coverage.',
                'Implemented Salesforce DevOps Center for version management and continuous deployment, replacing manual processes with a structured delivery flow between sandbox and production environments.',
            ],
            tags: ['Salesforce', 'Apex', 'LWC', 'DevOps Center', '.NET', 'Azure DevOps'],
        },
        {
            period: '2021 - 2022',
            title: 'Software Developer',
            company: 'Metropolitan Touring',
            location: 'Remote',
            description:
                'Developed the Core Operations system that replaced a legacy solution, modernizing the company\'s operational management through a microservices architecture and significantly improving response times.',
            highlights: [
                'Designed and implemented CI/CD pipelines in Azure DevOps that reduced deployment times by 99%, integrating automatic quality analysis with SonarCloud and enabling frequent releases with controlled risk.',
                'Architected a layer of .NET microservices containerized with Docker, improving horizontal system scalability and optimizing infrastructure resource consumption.',
                'Developed key frontend modules in React and TypeScript focused on operational productivity, contributing to a 15% increase in end-user satisfaction.',
            ],
            tags: ['.NET', 'React', 'TypeScript', 'Azure DevOps', 'Docker', 'SonarCloud'],
        },
        {
            period: '2021',
            title: 'IT Intern',
            company: 'Metropolitan Touring',
            location: 'Remote',
            description:
                'Provided technical support to the IT area during Core system development, contributing to internal process improvement and establishing code quality controls.',
            highlights: [
                'Collaborated in optimizing the IT vendor procurement process, documenting flows and proposing improvements that streamlined technology service selection and onboarding.',
                'Developed code quality analysis reports with SonarCloud that enabled technical debt tracking, supporting the team in early adoption of development best practices.',
            ],
            tags: ['SonarCloud', 'Git', 'Reporting'],
        },
    ],

    PROJECTS: [
        {
            title: 'Regional Core Expansion — Peru & Ecuador',
            description:
                'International expansion of the Core Operative system with a Peru implementation adapted to regional business flows and rules, and migration of the Ecuador Core to the updated version. Coordinated the technical team in both initiatives, ensuring operational continuity, data integrity and zero production interruptions during transitions.',
            tags: ['.NET', 'React', 'Azure DevOps', 'Data Migration', 'Architecture', 'Technical Leadership'],
            type: 'work',
            github: null,
            demo: null,
        },
        {
            title: 'Core Operations System',
            description:
                'Operational management platform that replaced a critical legacy system. .NET microservices architecture with React/TypeScript frontend and automated continuous delivery via Azure DevOps. Improved operational response times and enabled horizontal scalability required for business growth.',
            tags: ['.NET', 'React', 'TypeScript', 'Docker', 'Azure DevOps', 'SonarCloud'],
            type: 'work',
            github: null,
            demo: null,
        },
        {
            title: 'Salesforce-Opera/XTS Integration',
            description:
                'Refactoring of REST/SOAP integrations between Salesforce and the Opera and XTS hotel systems. Reduced 90% of production connectivity errors and eliminated critical timeout failures that compromised field operations.',
            tags: ['Salesforce', 'Apex', 'REST APIs', 'SOAP', 'LWC'],
            type: 'work',
            github: null,
            demo: null,
        },
        {
            title: 'CI/CD Pipeline — Azure DevOps',
            description:
                'End-to-end DevOps infrastructure for the software lifecycle: CI/CD pipelines in Azure DevOps, quality gates with SonarCloud and Docker containerization. Reduced deployment times by 99% and standardized the team\'s delivery process.',
            tags: ['Azure DevOps', 'Docker', 'SonarCloud', 'CI/CD', 'Git'],
            type: 'work',
            github: null,
            demo: null,
        },
        {
            title: 'Personal Portfolio',
            description:
                'Professional presentation SPA developed with React 18 and custom CSS. Design focused on visual impact with native CSS animations, custom cursor and project section with dynamic filter. Deployed on GitHub Pages with PWA configuration.',
            tags: ['React', 'CSS3', 'JavaScript', 'GitHub Pages'],
            type: 'personal',
            github: 'https://github.com/Daniel2325/Portfolio',
            demo: 'https://daniel2325.github.io/Portfolio/',
        },
    ],

    UI: {
        nav: {
            modalTitle: 'DevOps & Limitless Growth',
            modalDescription:
                'Passionate about building robust systems with predictable delivery. If you\'re looking for a technical profile that combines development and DevOps culture, let\'s talk.',
            modalClose: 'Close',
            statYears: 'Years of experience',
            statDeploy: 'Deployment reduction',
            statErrors: 'Fewer errors',
        },
        home: {
            ctaContact: 'Contact me',
            ctaDownload: 'Download CV',
        },
        expertise: {
            sectionTitle: 'My Expertise',
        },
        projects: {
            sectionTitle: 'Projects',
            subtitle: 'A selection of projects that reflect my technical expertise and problem-solving capabilities.',
            filterLabels: { all: 'All', work: 'Work', personal: 'Personal' },
            typeLabels: { work: 'Work', personal: 'Personal' },
        },
        experience: {
            sectionTitle: 'Experience',
        },
        contact: {
            sectionTitle: "Let's get in touch",
            subtitle: "If you have a project or simply want to say hello, don't hesitate to reach out!",
            infoTitle: 'Contact information',
            formTitle: 'Send a message',
            namePlaceholder: 'Name',
            emailPlaceholder: 'Email',
            messagePlaceholder: 'Message',
            submitButton: 'Send Message',
            successMessage: 'Thank you! Your email client has been opened with the message ready to send.',
            emailSubject: 'Portfolio — Contact from',
            emailFrom: 'From',
        },
    },
};

export default portfolioEn;
