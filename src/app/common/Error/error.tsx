import { Error, Title, Wrapper } from "./styledError";


export const FetchError = () => {

    return (
        <Wrapper>
            <Error />
            <Title>
                Ups.. Coś poszło nie tak. Spróbuj ponownie później
            </Title>
        </Wrapper>
    );
}
