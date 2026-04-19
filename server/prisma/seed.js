const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.service.createMany({
    data: [
      {
        title: 'Instalação de Ar-Condicionado',
        description: 'Instalação profissional de aparelhos split, multi-split e cassete em residências e empresas em São Paulo.',
        icon: 'wind',
      },
      {
        title: 'Manutenção Preventiva',
        description: 'Limpeza e revisão periódica para garantir o funcionamento eficiente e prolongar a vida útil do equipamento.',
        icon: 'tool',
      },
      {
        title: 'Manutenção Corretiva',
        description: 'Diagnóstico e reparo rápido de falhas em qualquer marca e modelo de ar-condicionado.',
        icon: 'settings',
      },
      {
        title: 'Limpeza de Filtros',
        description: 'Higienização completa de filtros e serpentinas para melhorar a qualidade do ar e a eficiência energética.',
        icon: 'filter',
      },
      {
        title: 'Instalação Comercial',
        description: 'Projetos de climatização para lojas, escritórios e galpões industriais na Grande São Paulo.',
        icon: 'building',
      },
      {
        title: 'Consultoria e Dimensionamento',
        description: 'Orientação técnica para escolher o equipamento ideal de acordo com o ambiente e necessidade do cliente.',
        icon: 'clipboard',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.project.createMany({
    data: [
      {
        title: 'Climatização de Escritório Corporativo',
        description: 'Instalação de 8 aparelhos split inverter em escritório de 400m² no centro de São Paulo.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        category: 'Comercial',
        city: 'São Paulo',
      },
      {
        title: 'Residência de Alto Padrão',
        description: 'Instalação de sistema multi-split em casa com 5 ambientes em Moema, São Paulo.',
        imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
        category: 'Residencial',
        city: 'São Paulo',
      },
      {
        title: 'Loja de Varejo - Shopping',
        description: 'Instalação e manutenção de sistema de ar-condicionado cassete em loja de 200m².',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
        category: 'Comercial',
        city: 'São Paulo',
      },
      {
        title: 'Clínica Médica',
        description: 'Climatização de salas de atendimento e recepção com equipamentos de baixo ruído.',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        category: 'Comercial',
        city: 'Guarulhos',
      },
      {
        title: 'Apartamento Compacto',
        description: 'Instalação de split inverter 9.000 BTUs em apartamento studio na Vila Olímpia.',
        imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
        category: 'Residencial',
        city: 'São Paulo',
      },
      {
        title: 'Restaurante Climatizado',
        description: 'Projeto de climatização para restaurante com capacidade de 80 lugares em Pinheiros.',
        imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        category: 'Comercial',
        city: 'São Paulo',
      },
    ],
    skipDuplicates: true,
  });

  console.log('Seed concluído com sucesso!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
