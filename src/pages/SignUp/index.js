import { Platform } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { 
    Background, 
    Container, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText 
} from "../SignIn/styles";

export default function SignUp(){

    const {user} = useContext(AuthContext);

    function handleSignUp(){
        alert(user.nome + ' preencha todos os campos')
    }

    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
            <AreaInput>
                <Input 
                    placeholder="Nome"
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    placeholder="Seu e-mail"
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    placeholder="Sua senha"
                />
            </AreaInput>
            <SubmitButton onPress={handleSignUp}>
                <SubmitText>
                    Cadastrar
                </SubmitText>
            </SubmitButton>
            </Container>
        </Background>
    )
}
