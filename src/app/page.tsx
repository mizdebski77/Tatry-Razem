'use client'
import { Button } from "./common/Components/buttons";
import { Header, HeaderTitle, PropositionTile, PropositionsContainer, PropositionsTitle, PropositionsWrapper, TileDate, TileTitle, WorkTitle, WorkWrapper, Wrapper } from "./styledHome";

export default function Home() {

  const tiles = Array.from({ length: 8 });

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
          {tiles.map((_, index) => (
            <PropositionTile key={index}>
              <TileTitle>Rysy</TileTitle>
              <TileDate>24.08.2024</TileDate>
            </PropositionTile>
          ))}
        </PropositionsContainer>
        <Button
          text="Sprawdź wszytskie propozycje"
          onClick={() => alert('Button clicked!')}
        />
      </PropositionsWrapper>

      <WorkWrapper>
          <WorkTitle>Jak to działa?</WorkTitle>
      </WorkWrapper>
    </Wrapper>
  );
}
