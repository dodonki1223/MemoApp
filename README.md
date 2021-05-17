# MemoApp

Udemy の [2021年版 React Native, Firebase, Expo でアプリ開発をゼロから始めよう！](https://www.udemy.com/course/react-native-ios-android/) 教材の写経用

![sample](https://raw.githubusercontent.com/dodonki1223/image_garage/master/MemoApp/sample.gif)

## 環境

| 環境         | バージョン  |
|:-------------|:-----------:|
| Expo         | 4.3.4       |
| Node.js      | 14.15.0     |

### バージョンの確認方法

#### Node.js 

```shell
$ node -v
```

#### Expo

```shell
$ expo -V
````

## インストールが必要なアプリ

- Figma
- Xcode
- Android Studio

## 開発

開発時に必要なことを記載する

### Firebase の設定

env.js.sample ファイルをコピーして env.js ファイルを作成します

```shell
$ cp env.js.sample env.js
```

以下の firebase の設定を書き換えます

```js
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
```

### Expo の起動

Expo を起動する

```shell
$ expo start
```
