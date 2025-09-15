# Painel de Solicitações

Sistema web para gerenciamento de solicitações e tickets desenvolvido com React e TypeScript.

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- TailwindCSS
- Prettier
- Vitest + React Testing Library
- react
- Moment.js
- clsx CSS
- Zod

## Funcionalidades

- Sistema de solicitações
  - Adicionar nova solicitação
  - Visualizar tabela de tickets existentes
  - Excluir solicitação
- Campos para nova solicitação
  - Campo de disciplina com sugestões baseadas em entradas anteriores
  - Auto-complete para código de ticket (evitar duplicatas)
  - Validação em tempo real dos campos
- Data atual preenchida automaticamente
  - Dia da semana calculado automaticamente
  - Status padrão (ex: "Pendente")
  - Sugestão de próximo código de ticket
- Upload de Arquivos
  - Anexar documentos/comprovantes aos tickets
  - Upload de múltiplos arquivos
  - Preview de arquivos anexados
- Templates de Solicitação
  - Modelos pré-definidos para tipos comuns de tickets
  - Campos que se adaptam ao tipo selecionado
  - Histórico de solicitações similares
- Atalhos de Teclado
  - Ctrl+Enter para submeter formulário
  - Tabulação inteligente entre campos
  - Ctrl+S para salvar rascunho
- Busca e Filtros em Tempo Real
  - Filtro rápido na tabela existente
  - Busca por qualquer campo
  - Ordenação por colunas
- Exportação de Dados
  - Exportar tabela para CSV/Excel
  - Relatórios personalizados
  - Impressão de tickets
- Sistema de Notificações
  - Alertas de tickets próximos do prazo
  - Confirmação de envio
  - Lembretes para tickets pendentes

## Estrutura da Tabela de Tickets

A tabela principal exibirá as seguintes colunas :

- ID - Identificador único
- Data - Data da solicitação
- D. Semana - Dia da semana
- Cod. Ticket - Código do ticket
- Cod. Disciplina - Código da disciplinas
- Status - Status atual do ticket
- Tipo - Tipo de solicitação
- Link - Link para detalhes
