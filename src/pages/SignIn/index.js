import { useNavigation } from "@react-navigation/native";
import { 
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from "./styles";
import { Platform } from "react-native";

export default function SignIn(){
    const navigaton = useNavigation();

    return(
        <Background>
            <Container 
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo 
                    source={require('../../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input 
                        placeholder="Seu email"
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                        placeholder="Sua senha"
                    />
                </AreaInput>
                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>
                        Acessar
                    </SubmitText>
                </SubmitButton>
                <Link onPress={() => navigaton.navigate('SignUp')}>
                    <LinkText>
                        Criar uma conta!
                    </LinkText>
                </Link>
            </Container>
        </Background>
    )
}
