'use client'
import { Button } from "./common/Components/buttons";
import { Header, HeaderTitle, Wrapper } from "./styledHome";

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Znajdź swojego partnera w długie wędrówki po Tatrach</HeaderTitle>
        <Button
          text="Zaproponuj trasę"
          onClick={() => alert('Button clicked!')}
        />
      </Header>

    </Wrapper>
  );
}
