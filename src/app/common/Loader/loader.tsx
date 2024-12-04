import { Spinner, Title, Wrapper } from "./styledLoader";

export const Loader = () => {
    return (
        <Wrapper>
            <Spinner />
            <Title>Pobieranie danych...</Title>
        </Wrapper>
    );
};
