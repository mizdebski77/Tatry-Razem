import { ButtonLink } from "../UI/UI";
import { Error, ParagraphWrapper, Title, Wrapper } from "./styledError";

export const FetchError = () => {
  return (
    <Wrapper>
      <Error />
      <Title>Ups.. Coś poszło nie tak. Spróbuj ponownie później.</Title>

      <ParagraphWrapper>
        Jeżeli nie jesteś zalogowany zrób to teraz!
        <ButtonLink href="/Login" $background="blue" text="Zaloguj" />
      </ParagraphWrapper>
    </Wrapper>
  );
};
