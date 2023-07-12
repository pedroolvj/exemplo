import { FlatList, SafeAreaView, View, Image, Text } from "react-native";
import { CarrosData } from "../../data/CarrosData";

const data = CarrosData

const Carro = ({nome, ano, imagem, infos}) => (
    <View >
        <Image
        source={{uri: imagem}}
        style={{width: 300, height: 300}}
        />
        <Text>Modelo: {nome}</Text>
        <Text>Ano: {ano}</Text>
        <Text>Peso: {infos.peso} KG</Text>
        <Text>Potencia: {infos.potencia} CV</Text>
        <Text>Descricao: {infos.descricao}</Text>
    </View>
  );

const Carros = () => {
    return(
        <SafeAreaView>
            <FlatList
            data={data}
            renderItem={({item}) => <Carro nome={item.nome} ano={item.ano} imagem={item.imagem} infos={item.infos}/>}
            keyExtractor={item => item.id}
            horizontal={true}
            />
        </SafeAreaView>
    )
}

export default Carros