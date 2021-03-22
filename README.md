# Desafio-react-native-app

Aplicativo  feito em React Native usando API do github para buscar por usuário e visualizar seus dados.

## Sobre o aplicativo

- O aplicativo foi desenvolvido no dispotivo com sistema operacional android.
- Resolução recomendada 1080 x 1920 pixels.

## Como rodar

<li>Clone o repositório:

```sh
git clone https://github.com/fernanduandrade/desafio-react-native-app.git
```

</li>

<li>instale as dependências:

```sh
npm install
```

</li>

<li>Inicie o servidor:

```sh
npm run start
```
	
</li>

<li>Após iniciar o servidor, rode o aplicativo no seu dispositivo ou no emulador:

```sh
npm run android
```
	
</li>

## Notas
- Caso não encontre o caminho do SDK ou tenha mais de um SDK, poderá criar um arquivo no diretório android chamado `local.properties` e especificar o caminho do SDK. Exemplo:

```text
sdk.dir = /Users/USERNAME/AppData/Local/Android/SDK
```
- [Resolução](https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil) para caso não encontrar o SDK. 
- Siga [essa documentação](https://react-native.rocketseat.dev/) caso não tenha preparado o seu ambiente de desenvolvimento.
