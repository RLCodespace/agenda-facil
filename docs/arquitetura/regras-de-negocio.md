# Regras de negocio

## Principio geral

As regras devem ser **parametrizaveis por negocio (tenant)**, nunca
hardcoded — o sistema atende tipos diferentes de pequeno negocio
(barbearia, salao, outros prestadores de servico), e cada um pode
querer configurar essas regras de um jeito diferente.

## Decidido

- **Duracao de servico e variavel**: nao existe um valor fixo global por
  servico (ex: "corte = 30min" pra todo mundo). A duracao pode variar
  por profissional ou por agendamento especifico.

## Em aberto (a definir com o usuario)

Cada topico abaixo foi levantado e explicitamente adiado pra uma sessao
futura de discussao — nao ha decisao tomada ainda, so as perguntas que
precisam ser respondidas.

### Modelo de agenda
- Um negocio tem sempre 1 agenda unica, ou pode ter multiplos
  profissionais/recursos com agenda propria?
- Se multiplos: o conflito de horario e checado por profissional/recurso
  ou pelo negocio inteiro?

### Cancelamento e remarcacao
- Existe prazo minimo antes do horario pra cancelar/remarcar (ex: ate 2h
  antes)?
- Se existir, e um valor fixo do sistema ou configuravel por negocio?

### Horario de funcionamento e excecoes
- Como o dono cadastra o horario semanal de funcionamento?
- Como feriados e folgas (excecoes pontuais) sao cadastrados e como eles
  bloqueiam horarios na agenda?

### Financeiro
- Confirmado: financeiro e **so visualizacao/relatorio informativo**,
  sem processar pagamento nenhum.
- Em aberto: como a receita e calculada — por agendamento marcado como
  concluido? Precisa de um passo manual do dono (marcar como
  "pago"/"pendente")? Qual e exatamente o significado de "status de
  pagamento" nesse contexto, ja que o sistema nao intermedia dinheiro.

### Cadastro de clientes
- Quais campos sao obrigatorios (nome, telefone)?
- Telefone (numero de WhatsApp) e o identificador unico do cliente?
  Como tratar duplicidade?
- Existe validacao de formato de telefone brasileiro (DDD, 9 digitos)?

## Por que isso importa agora

O usuario foi explicito: erros nessas regras podem gerar **prejuizo
real** (ex: overbooking, cancelamento indevido, cliente perdido). Por
isso nenhuma dessas secoes deve ser implementada com um valor "chutado"
— ver [`testes.md`](./testes.md) pra estrategia de validacao end-to-end
antes de qualquer regra ir pra producao.
