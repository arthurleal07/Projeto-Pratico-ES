import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function TermosDeUso() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">

      {/* Cabeçalho */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-6 py-10 rounded-b-3xl">

        <Button
          variant="ghost"
          className="text-white hover:bg-white/20 mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </Button>

        <div className="flex justify-center mb-4">
          <div className="bg-white/20 p-4 rounded-2xl">
            <FileText className="w-10 h-10" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center">
          Termos de Uso
        </h1>

        <p className="text-center text-sm opacity-90 mt-2">
          Foca & Revisa
        </p>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 p-6 overflow-y-auto">

        <Card>
            <CardContent className="space-y-6 p-6">

                <div>
                <h2 className="text-2xl font-bold text-center">
                    Termos de Uso
                </h2>

                <p className="text-center text-sm text-muted-foreground mt-2">
                    Aplicativo Foca & Revisa
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    1. Aceitação dos Termos
                </h3>

                <p className="text-muted-foreground">
                    Ao criar uma conta e utilizar este aplicativo, o usuário declara
                    que leu, compreendeu e concorda com os presentes Termos de Uso.
                    Caso não concorde com qualquer disposição destes termos, não
                    deverá utilizar o aplicativo.
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    2. Finalidade do Aplicativo
                </h3>

                <p className="text-muted-foreground">
                    O aplicativo tem como objetivo auxiliar estudantes na organização
                    e apoio aos estudos, oferecendo recursos relacionados às
                    atividades acadêmicas.
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    3. Cadastro do Usuário
                </h3>

                <p className="text-muted-foreground mb-3">
                    Para utilizar o aplicativo, o usuário deverá realizar um cadastro
                    informando:
                </p>

                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Endereço de e-mail (Gmail);</li>
                    <li>Nome de usuário;</li>
                    <li>Senha criada pelo próprio usuário.</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                    O usuário é responsável por fornecer informações verdadeiras e
                    manter seus dados atualizados.
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    4. Responsabilidade pela Conta
                </h3>

                <p className="text-muted-foreground mb-3">
                    O usuário é responsável por:
                </p>

                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Manter sua senha em sigilo;</li>
                    <li>Não compartilhar suas credenciais de acesso com terceiros;</li>
                    <li>
                    Informar imediatamente caso suspeite de acesso não autorizado à
                    sua conta.
                    </li>
                </ul>

                <p className="text-muted-foreground mt-3">
                    O aplicativo não se responsabiliza por danos decorrentes do
                    compartilhamento da senha pelo usuário.
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    5. Coleta e Uso dos Dados
                </h3>

                <p className="text-muted-foreground mb-3">
                    O aplicativo coleta apenas os seguintes dados:
                </p>

                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Endereço de e-mail (Gmail);</li>
                    <li>Nome de usuário;</li>
                    <li>Senha cadastrada.</li>
                </ul>

                <p className="text-muted-foreground mt-4 mb-3">
                    Esses dados são utilizados exclusivamente para:
                </p>

                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Criar e identificar a conta do usuário;</li>
                    <li>Permitir o acesso ao aplicativo por meio de autenticação;</li>
                    <li>Garantir a segurança do acesso.</li>
                </ul>

                <p className="text-muted-foreground mt-4">
                    Nenhum outro dado pessoal será solicitado ou utilizado além dos
                    informados no cadastro.
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    6. Privacidade
                </h3>

                <p className="text-muted-foreground">
                    Os dados fornecidos pelo usuário serão utilizados somente para o
                    funcionamento do aplicativo e não serão compartilhados com
                    terceiros, exceto quando exigido por lei.
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    7. Uso Adequado
                </h3>

                <p className="text-muted-foreground mb-3">
                    O usuário compromete-se a utilizar o aplicativo de forma ética e
                    responsável, sendo proibido:
                </p>

                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Utilizar informações falsas durante o cadastro;</li>
                    <li>Tentar acessar contas de outros usuários;</li>
                    <li>
                    Realizar qualquer atividade que comprometa a segurança ou o
                    funcionamento do aplicativo.
                    </li>
                </ul>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    8. Disponibilidade
                </h3>

                <p className="text-muted-foreground">
                    Embora sejam empregados esforços para manter o aplicativo
                    disponível, não é garantido funcionamento ininterrupto, podendo
                    ocorrer manutenções, atualizações ou indisponibilidades
                    temporárias.
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    9. Alterações dos Termos
                </h3>

                <p className="text-muted-foreground">
                    Estes Termos de Uso poderão ser alterados a qualquer momento para
                    atender a melhorias do aplicativo ou exigências legais. As
                    alterações entrarão em vigor após sua publicação.
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    10. Encerramento da Conta
                </h3>

                <p className="text-muted-foreground">
                    O usuário poderá deixar de utilizar o aplicativo a qualquer
                    momento. A equipe responsável também poderá suspender ou remover
                    contas que violem estes Termos de Uso.
                </p>
                </div>

                <div>
                <h3 className="font-bold text-lg mb-2">
                    11. Contato
                </h3>

                <p className="text-muted-foreground">
                    Em caso de dúvidas sobre estes Termos de Uso, o usuário poderá
                    entrar em contato com a equipe responsável pelo aplicativo por
                    meio dos canais de suporte disponibilizados no próprio aplicativo.
                </p>

                <div className="mt-4 rounded-lg bg-secondary p-4">
                    <p className="font-semibold">
                    E-mail para contato
                    </p>

                    <p className="text-primary break-all">
                    caiofonzaga117@gmail.com
                    </p>
                </div>
                </div>

                <Button
                className="w-full mt-6"
                onClick={() => navigate(-1)}
                >
                Voltar
                </Button>

            </CardContent>
        </Card>

      </div>

    </div>
  );
}
