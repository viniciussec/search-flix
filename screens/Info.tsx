import React from "react";

import { ScrollView, Text, View } from "react-native";
import Container from "../components/Container";

export default function Info() {
  return (
    <Container>
      <ScrollView>
        <Section
          title="Navegação"
          text={`Para navegar entre as telas, clique entre as 3 opções na barra inferior da aplicação (Destaques, procura e ajuda)`}
        />
        <Divisory />
        <Section
          title="Filtros"
          text={`Para filtrar a lista de filmes, clique, na aba de procura, no texto “Filtros”. Lá você poderá escolher dentre os 5 filtros disponíveis. Ao clicar em um dos filtros, um popup irá surgir para a seleção do valor do filtro`}
        />
        <Divisory />
        <Section
          title="Ordenação"
          text={`Para ordenar a lista de filmes, clique, na aba de procura, no texto “Ordenação”. Lá você poderá escolher dentre as 3 ordenações disponíveis. Ao clicar em um dos botões, uma seta irá aparecer indicando a ordem (crescente ou decrescente)`}
        />

      </ScrollView>
    </Container>
  );
}

interface SectionProps {
  title: string;
  text: string;
}
function Section({ title, text }: SectionProps) {
  return (
    <View className="space-y-4 my-4">
      <Text className="text-lg text-white">
        {title}
      </Text>
      <Text className="text-md text-[#CCCCCC]">
        {text}
      </Text>
    </View>
  )
}

function Divisory() {
  return <View className="border-b-2 border-[#D9D9D9]" />
}