export default function Home({ navigation }) {
  
    const usuario = [
  {id: '1', nome: 'Special Week'},
  {id: '2', nome: 'Silence Suzuka'},
  {id: '3', nome: 'Tokai Teio'},
  {id: '4', nome: 'Mejiro McQueen'},
  {id: '5', nome: 'Gold Ship'},
  {id: '6', nome: 'Vodka'},
  {id: '7', nome: 'Daiwa Scarlet'},
  {id: '8', nome: 'Symboli Rudolf'},
  {id: '9', nome: 'Rice Shower'},
  {id: '10', nome: 'Oguri Cap'},
  {id: '11', nome: 'Haru Urara'},
  {id: '12', nome: 'Sakura Bakushin O'},
  {id: '13', nome: 'Winning Ticket'},
  {id: '14', nome: 'Nice Nature'},
  {id: '15', nome: 'Twin Turbo'},
  {id: '16', nome: 'Mihono Bourbon'},
  {id: '17', nome: 'Biwa Hayahide'},
  {id: '18', nome: 'Narita Taishin'},
  {id: '19', nome: 'Narita Brian'},
  {id: '20', nome: 'Kitasan Black'},
  {id: '21', nome: 'Satono Diamond'},
  {id: '22', nome: 'Duramente'},
  {id: '23', nome: 'Orfevre'},
  {id: '24', nome: 'Gentildonna'},
  {id: '25', nome: 'Jungle Pocket'},
  {id: '26', nome: 'Agnes Tachyon'},
  {id: '27', nome: 'Manhattan Cafe'},
  {id: '28', nome: 'T.M. Opera O'},
  {id: '29', nome: 'Air Groove'},
  {id: '30', nome: 'King Halo'}
];

    return (
        <view style={StyleSheet.container}>

            <text style={style.titulo}>Bem-vindo!</text>

            <text style={style.subtitulo}>lista de usuario:</text>
            
            <Flatlist 
            data={usuarios}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <view style={StyleSheet.item}>
                    <text style={style.nome}>{item.nome}</text>
                </view>    
            )}

            />

        </view>
    );
}