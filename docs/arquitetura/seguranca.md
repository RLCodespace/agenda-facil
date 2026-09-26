# Seguranca

O usuario marcou seguranca como prioridade alta, com 4 areas — todas
importam igualmente. O que segue e uma **proposta tecnica inicial**,
a confirmar/ajustar antes de qualquer implementacao.

## Dados pessoais do cliente (LGPD)

- Minimizacao: coletar so o necessario pro agendamento (nome, telefone).
  Nada de dado sensivel sem necessidade clara.
- Papeis: o dono do negocio e o **controlador** dos dados dos proprios
  clientes; o agenda-facil atua como **operador** (processa em nome do
  negocio).
- Retencao: definir prazo de guarda (proposta: expurgar/anonimizar dado
  de cliente sem agendamento novo apos um periodo, ex: 24 meses — valor
  exato a confirmar).
- Precisa de: politica de privacidade, e um canal pro cliente final
  solicitar exclusao do proprio dado.

## Autenticacao do painel (dono do negocio)

- Rotas `/painel` **sempre** protegidas por verificacao server-side
  (middleware do Next.js) — nunca confiar so em checagem client-side.
- Sessao com expiracao e renovacao (refresh token rotacionado).
- Rate limit de tentativa de login (bloqueio temporario apos N
  tentativas erradas).
- Candidato natural: **Supabase Auth** (JWT + Row Level Security),
  ja que o Postgres via Supabase esta referenciado no
  `docker-compose.yml` do projeto.
- MFA: recomendado como opcao, dado que a conta acessa dados pessoais de
  clientes.

## Integracao WAHA / WhatsApp

- Validar origem do webhook do WAHA (secret compartilhado / HMAC) —
  nunca aceitar payload sem verificar assinatura/token.
- Rate limit por numero de telefone, pra evitar abuso/flood contra a
  I.A (isso tambem protege o orcamento de tokens da I.A).
- Mapeamento explicito `numero WAHA <-> tenant`: o tenant de um
  agendamento nunca pode ser inferido so pelo conteudo da mensagem, tem
  que vir de um mapeamento confiavel armazenado no banco.

## Isolamento multi-tenant

- Toda tabela relevante carrega `tenant_id`/`business_id`.
- Isolamento reforcado por **Row Level Security** no Postgres — nao
  confiar so em filtro `WHERE tenant_id = ...` na aplicacao.
- O tenant de uma requisicao **sempre** vem da sessao autenticada,
  nunca de um campo enviado pelo client (evita um negocio manipular
  request e enxergar/alterar dado de outro).

## Prompt injection e I.A

Meta: nivel de rigor de big tech. Nao existe prompt que bloqueie
injection de forma confiavel, entao o desenho **limita o estrago** quando
ela funciona:

- **Autorizacao fora do modelo**: a I.A so chama tools. `tenant_id` e o
  numero do cliente final vem da sessao/mapeamento confiavel, nunca do
  texto da mensagem. Mesmo enganada, ela so alcanca os dados daquele
  cliente.
- **Tools minimas e tipadas**: poucas funcoes (ex: listar meus
  agendamentos, ver horarios, agendar, remarcar, cancelar), com schema
  estrito e validacao no servidor (horario existe, servico pertence ao
  tenant). Sem SQL livre.
- **Sem segredos no prompt** e sem dado de outros clientes no contexto:
  tudo que entra no contexto pode vazar.
- **Acao destrutiva pede confirmacao**, executada por codigo
  deterministico.
- Conteudo do usuario tratado como dado, nao instrucao.
- **Validacao da saida** antes de enviar (sem link estranho, sem dado de
  terceiros, sem vazar o prompt).
- Limite de tool calls por turno e log de auditoria de cada chamada.
- Suite de ataques de injection rodando em CI (red team continuo).

## Fraude, abuso e engenharia reversa

- Cota de tokens por tenant e limites por numero no gateway de I.A (ver
  [`decisoes-nuvem-ia.md`](./decisoes-nuvem-ia.md)). A chave da I.A e os
  prompts ficam so no servidor.
- Superficie de API: IDs nao previsiveis, sem enumeracao, sem endpoints
  esquecidos, sem segredo no bundle do front.
- Agendamento falso: limites por numero, lembretes com confirmacao e
  liberacao automatica do horario.
- Conta do dono: MFA, protecao contra brute force e takeover.
- Infra: segredos fora do repo, backups criptografados, logs sem dado
  pessoal.

## Pesquisa e revisao por agent especializado

Decisao do usuario: a fase de seguranca deve ser feita por agent
especializado, com pesquisa na internet sobre vazamentos, fraude e
engenharia reversa, antes de qualquer deploy. A seguranca precisa ser
"muito forte".

## Riscos do WAHA

WAHA nao e oficial: risco de banimento do numero e sessao sequestravel
no nosso servidor. Mitigacoes em
[`decisoes-nuvem-ia.md`](./decisoes-nuvem-ia.md).

## Status

Proposta inicial, ainda nao implementada — nenhum codigo de auth,
schema ou middleware existe no repo ainda.
