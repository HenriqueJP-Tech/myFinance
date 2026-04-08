import { Platform, ActivityIndicator } from "react-native";
import { useContext, useState } from "react";
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
    const {signUp, loadingAuth} = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(){
        if(name === '' || email === '' || password === '' ) return;
        signUp(name, email, password);
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
                    value={name}
                    onChangeText={(text)=> setName(text)}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    placeholder="Seu e-mail"
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    placeholder="Sua senha"
                    value={password}
                    onChangeText={(text)=> setPassword(text)}
                    secureTextEntry={true}
                />
            </AreaInput>
            <SubmitButton onPress={handleSignUp}>
                {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color="#fff"/>
                    ) : (
                        <SubmitText>Cadastrar</SubmitText>
                    )
                }
            </SubmitButton>
            </Container>
        </Background>
    )
}
