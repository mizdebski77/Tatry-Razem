'use client'
import { HowItWorks } from "./common/arrays";
import {
  Header,
  HeaderTitle,
  IdeaImage,
  IdeaText,
  IdeaTextWrapper,
  IdeaTitle,
  IdeaWrapper,
  PropositionTile,
  PropositionsContainer,
  PropositionsTitle,
  PropositionsWrapper,
  TileDate,
  TileTitle,
  WorkContainer,
  WorkTile,
  WorkTileNumber,
  WorkTileText,
  WorkTitle,
  WorkWrapper,
  Wrapper
}
  from "./styledHome";
import hall from './common/Images/HomeImages/headerBackground.svg';
import { ButtonLink } from "./common/UI/UI";



export default function Home() {

  const tiles = Array.from({ length: 8 });

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Znajdź swojego partnera w długie wędrówki po Tatrach</HeaderTitle>

        <ButtonLink
          text="Zaproponuj trasę"
          href="/Profile"
          $background="blue"
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
        <ButtonLink
          text="Sprawdź wszytskie propozycje"
          href="/Login"
          $background="blue"
        />
      </PropositionsWrapper>

      <WorkWrapper>
        <WorkTitle>Jak to działa?</WorkTitle>
        <WorkContainer>
          {HowItWorks.map((tile) => (
            <WorkTile key={tile.number}>
              <WorkTileNumber>{tile.number}</WorkTileNumber>
              <WorkTileText>{tile.text}</WorkTileText>
            </WorkTile>
          ))}
        </WorkContainer>
      </WorkWrapper>

      <IdeaWrapper>
        <IdeaTextWrapper>
          <IdeaTitle>Skąd pomysł na taką stronę?</IdeaTitle>
          <IdeaText>
            Inspiracją do stworzenia aplikacji była moja aktywność w znanej grupie na Facebooku – Tatromaniaków. Często zauważałem (i wciąż widzę), że wiele osób zamieszcza tam ogłoszenia, szukając towarzyszy do wspólnych wędrówek po górach. Niestety, ogromna liczba postów publikowanych na tej grupie sprawia, że takie ogłoszenia łatwo giną w natłoku treści i nie zawsze trafiają do zainteresowanych.
          </IdeaText>
          <IdeaText>
            Stąd zrodził się pomysł, aby stworzyć miejsce, które pozwoli zebrać wszystkie propozycje wspólnych wyjść w góry w jednym, łatwo dostępnym miejscu. Dzięki temu każdy będzie mógł szybko i wygodnie znaleźć kompana na szlak. Dodatkowo aplikacja umożliwi filtrowanie ogłoszeń według określonych kryteriów, co znacznie ułatwi proces poszukiwania. Wierzę, że takie rozwiązanie będzie nie tylko praktyczne, ale też przyczyni się do budowania społeczności miłośników górskich wędrówek.
          </IdeaText>
        </IdeaTextWrapper>
        <IdeaImage src={hall.src} alt="Hala Gąsienicowa" />
      </IdeaWrapper>
    </Wrapper >
  );
}
