'use client'
import { Button } from "./common/Components/buttons";
import { Header, HeaderTitle, PropositionTile, PropositionsContainer, PropositionsTitle, PropositionsWrapper, TileDate, TileTitle, Wrapper } from "./styledHome";

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


      <PropositionsWrapper>
        <PropositionsTitle>
          Najnowsze propozycje wyjść
        </PropositionsTitle>

        <PropositionsContainer>
          <PropositionTile>
            <TileTitle>Rysy</TileTitle>
            <TileDate>24.08.2024</TileDate>
          </PropositionTile>
        </PropositionsContainer>
      </PropositionsWrapper>
    </Wrapper>
  );
}
