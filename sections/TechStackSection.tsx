import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import TechIcon from '../components/ui/TechIcon';

const TechStackSection: React.FC = React.memo(() => {
    const technologies = [
        {
            category: 'Frontend',
            items: [
                { name: 'React', iconType: 'react' as const, description: 'Interfaces modernas y responsivas' },
                { name: 'TypeScript', iconType: 'typescript' as const, description: 'Código seguro y mantenible' },
                { name: 'Tailwind CSS', iconType: 'tailwind' as const, description: 'Diseño rápido y consistente' },
                { name: 'Next.js', iconType: 'nextjs' as const, description: 'Rendimiento optimizado' }
            ]
        },
        {
            category: 'Backend',
            items: [
                { name: 'Node.js', iconType: 'nodejs' as const, description: 'Servidores escalables' },
                { name: 'Python', iconType: 'python' as const, description: 'Automatización y IA' },
                { name: 'PostgreSQL', iconType: 'postgresql' as const, description: 'Bases de datos robustas' },
                { name: 'MongoDB', iconType: 'mongodb' as const, description: 'Flexibilidad de datos' }
            ]
        },
        {
            category: 'Cloud & DevOps',
            items: [
                { name: 'AWS', iconType: 'aws' as const, description: 'Infraestructura escalable' },
                { name: 'Docker', iconType: 'docker' as const, description: 'Contenedores estandarizados' },
                { name: 'Git', iconType: 'git' as const, description: 'Control de versiones' },
                { name: 'CI/CD', iconType: 'cicd' as const, description: 'Despliegue automatizado' }
            ]
        },
        {
            category: 'Herramientas',
            items: [
                { name: 'Figma', iconType: 'figma' as const, description: 'Diseño colaborativo' },
                { name: 'Jira', iconType: 'jira' as const, description: 'Gestión de proyectos' },
                { name: 'Slack', iconType: 'slack' as const, description: 'Comunicación en equipo' },
                { name: 'Notion', iconType: 'notion' as const, description: 'Documentación clara' }
            ]
        }
    ];

    return (
        <SectionWrapper
            id="tech-stack"
            title="Stack Tecnológico Moderno para Pymes"
            subtitle="Utilizamos las mejores tecnologías para desarrollar software a medida"
        >
            {/* Breadcrumbs */}
            <Breadcrumbs
                items={[{ name: 'Tecnologías', url: '#tech-stack' }]}
                currentPage="Stack Tecnológico"
            />

            <div className="text-center mb-12">
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Nuestro stack tecnológico está diseñado para entregar soluciones digitales personalizadas
                    de alta calidad, escalabilidad y mantenibilidad para pymes chilenas.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {technologies.map((category) => (
                    <div key={category.category} className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center">
                            {category.category}
                        </h3>
                        <ul className="space-y-4" role="list">
                            {category.items.map((tech) => (
                                <li key={`${category.category}-${tech.name}`}>
                                    <Card className="text-center p-4 hover:shadow-lg transition-all duration-300 hover:translate-y-0.5">
                                        <div className="flex justify-center mb-2" aria-hidden="true">
                                            <TechIcon
                                                type={tech.iconType}
                                                size="xl"
                                                className="text-gray-500 dark:text-gray-400"
                                            />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                                            {tech.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {tech.description}
                                        </p>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Beneficios del stack */}
            <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                    ¿Por qué elegimos estas tecnologías?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="flex justify-center mb-4" aria-hidden="true">
                            <TechIcon type="performance" size="xl" className="text-gray-500 dark:text-gray-400" />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Rendimiento</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Aplicaciones rápidas y eficientes que mejoran la experiencia del usuario
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-4" aria-hidden="true">
                            <TechIcon type="security" size="xl" className="text-gray-500 dark:text-gray-400" />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Seguridad</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Implementamos las mejores prácticas de seguridad para proteger tus datos
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-4" aria-hidden="true">
                            <TechIcon type="scalability" size="xl" className="text-gray-500 dark:text-gray-400" />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Escalabilidad</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Soluciones que crecen con tu negocio sin comprometer el rendimiento
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-action */}
            <div className="text-center mt-12">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    ¿Quieres conocer más sobre cómo aplicamos estas tecnologías en proyectos reales?
                </p>
                <button
                    onClick={() => {
                        const el = document.getElementById('portfolio');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-pomegranate-600 hover:bg-pomegranate-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                    Ver casos de éxito
                </button>
            </div>
        </SectionWrapper>
    );
});

export default TechStackSection;
