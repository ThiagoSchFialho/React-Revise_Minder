import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import {
    DarkBackground,
    CloseModalButton,
    ModalContainer,
    Title1,
    Title2,
    List,
    Item,
    Text
} from './styles';

interface TermsProps {
    isVisible: boolean;
    onClose: () => void;
}

const TermsAndPrivacyModal: React.FC<TermsProps> = ({ isVisible, onClose}) => {
    if (!isVisible) {
        return null;
    }

    return (
        <DarkBackground>
            <CloseModalButton onClick={onClose}>
                <IoIosCloseCircle color='white' size={40} />
            </CloseModalButton>
            <ModalContainer>
                <Title1>Termos e Condições de Uso</Title1>

                <Title2>1. Aceitação dos Termos</Title2>
                <Text>Ao utilizar nosso sistema, você concorda com os presentes Termos e Condições de Uso. Caso não concorde com qualquer parte destes termos, solicitamos que não utilize o sistema.</Text>

                <Title2>2. Cadastro e Conta do Usuário</Title2>
                <List>
                    <Item>Para utilizar o sistema, o usuário deve fornecer um endereço de e-mail válido e criar uma senha segura.</Item>
                    <Item>O endereço de e-mail fornecido será utilizado para a recuperação de senha, caso o usuário a esqueça.</Item>
                    <Item>O usuário é responsável por manter a confidencialidade de suas credenciais e por todas as atividades que ocorrerem em sua conta.</Item>
                    <Item>Caso suspeite de uso não autorizado de sua conta, o usuário deve notificar-nos imediatamente.</Item>
                </List>

                <Title2>3. Uso do Sistema</Title2>
                <List>
                    <Item>O sistema é fornecido "como está", sem garantias de qualquer natureza.</Item>
                    <Item>Estudos e revisões de estudo estarão associados à conta do usuário, permitindo o acompanhamento do progresso educacional.</Item>
                    <Item>Reservamo-nos o direito de modificar, adicionar ou remover funcionalidades do sistema, ou qualquer parte dele, a qualquer momento e sem aviso prévio.</Item>
                </List>
                
                <Title2>4. Exclusão de Conta e Dados</Title2>
                <List>
                    <Item>O usuário reconhece e aceita que sua conta e todos os dados associados a ela, incluindo estudos e revisões, podem ser excluídos permanentemente a critério exclusivo da administração do sistema, sem necessidade de aviso prévio ou justificativa.</Item>
                    <Item>Não garantimos a recuperação de quaisquer dados após a exclusão da conta.</Item>
                </List>

                <Title2>5. Privacidade</Title2>
                <List>
                    <Item>Os dados fornecidos pelo usuário serão utilizados apenas para o funcionamento do sistema, de acordo com nossa Política de Privacidade.</Item>
                    <Item>O usuário compreende e concorda que, apesar das medidas de segurança, não há garantia absoluta contra acessos não autorizados.</Item>
                    <Item>Coletamos seu endereço de e-mail e senha durante o cadastro para criar e manter sua conta. O sistema também pode coletar informações de uso, como tempo de acesso, páginas visitadas e interações com funcionalidades.</Item>
                </List>

                <Title2>6. Modificações dos Termos</Title2>
                <List>
                    <Item>Podemos atualizar estes Termos e Condições periodicamente. O uso continuado do sistema após qualquer modificação constitui aceitação dos novos termos.</Item>
                </List>
                
                <Title2>7. Jurisdição e Legislação Aplicável</Title2>
                <List>
                    <Item>Estes Termos e Condições de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil.</Item>
                    <Item>Quaisquer disputas oriundas do uso do sistema serão submetidas ao foro da comarca da cidade de São Paulo, Estado de São Paulo, com exclusão de qualquer outro, por mais privilegiado que seja.</Item>
                </List>
                
                <Title2>8. Contato</Title2>
                <List>
                    <Item>Para qualquer dúvida ou solicitação, entre em contato através do email{' '}
                    <a href="mailto:reviseminder.contato@gmail.com">reviseminder.contato@gmail.com</a></Item>
                </List>
                
                <Text>Ao utilizar nosso sistema, você declara ter lido, compreendido e aceitado estes Termos e Condições de Uso.</Text>

                <hr style={{margin: '20px 0'}}/>

                <Title1>Política de Privacidade</Title1>

                <Title2>1. Introdução</Title2>
                <Text>A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos as suas informações pessoais ao utilizar nosso sistema.</Text>

                <Title2>2. Coleta de Informações</Title2>
                <List>
                    <Item>Coletamos seu endereço de e-mail e senha durante o cadastro para criar e manter sua conta.</Item>
                    <Item>O sistema também pode coletar informações de uso, como tempo de acesso, páginas visitadas e interações com funcionalidades.</Item>
                </List>

                <Title2>3. Uso das Informações</Title2>
                <List>
                    <Item>Utilizamos seu endereço de e-mail para autenticação, recuperação de senha e comunicações relacionadas ao uso do sistema.</Item>
                    <Item>As informações de uso ajudam a melhorar a experiência do usuário, identificar problemas e implementar melhorias.</Item>
                </List>

                <Title2>4. Compartilhamento de Informações</Title2>
                <List>
                    <Item>Não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou para o funcionamento essencial do sistema.</Item>
                </List>

                <Title2>5. Armazenamento e Segurança</Title2>
                <List>
                    <Item>Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas e administrativas para evitar acessos não autorizados.</Item>
                    <Item>Apesar das medidas de segurança, não garantimos proteção absoluta contra todas as ameaças digitais.</Item>
                </List>

                <Title2>6. Direitos do Usuário</Title2>
                <List>
                    <Item>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para isso, entre em contato através do email{' '}
                    <a href="mailto:reviseminder.contato@gmail.com">reviseminder.contato@gmail.com</a></Item>
                    <Item>Caso deseje encerrar sua conta, todos os dados associados, incluindo estudos e revisões, serão excluídos permanentemente.</Item>
                </List>

                <Title2>7. Alterações na Política de Privacidade</Title2>
                <List>
                    <Item>Podemos atualizar esta política periodicamente. A versão mais recente estará sempre disponível no nosso sistema.</Item>
                    <Item>O uso continuado do sistema após qualquer alteração implica na aceitação da nova política.</Item>
                </List>

                <Title2>8. Contato</Title2>
                <List>
                    <Item>Para dúvidas ou solicitações relacionadas à privacidade, entre em contato conosco através do email{' '}
                    <a href="mailto:reviseminder.contato@gmail.com">reviseminder.contato@gmail.com</a></Item>
                </List>

                <Text>Ao utilizar nosso sistema, você declara ter lido, compreendido e aceitado esta Política de Privacidade.</Text>
            </ModalContainer>
        </DarkBackground>
    );
}

export default TermsAndPrivacyModal;
