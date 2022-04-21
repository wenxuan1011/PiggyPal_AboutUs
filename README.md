# 如何跑起來:
### 1.初始化環境
    npm init -y
    npm i node-sass --save-dev
    npm i @babel/present-env @babel/preset-typescript
    npm i jquery --save
    npm i parcel-bundler --save-dev
    npm i pug-cli --save-dev
### 2.創建一個 parcel 資料夾
parcel資料夾裡放aboutus.pug, aboutus.sass, aboutus.js
```
mkdir parcel
```
### 3.aboutus.pug 連結 aboutus.sass 和 aboutus.js
```pug
link(href="./aboutus.sass", rel="stylesheet")
```
```pug
script(src="./aboutus.js")
```
### 4.檔案架構 (PiggyPal目錄裡的架構)
  ___parcel___aboutus.pug, aboutus.sass, aboutus.js<br>
|<br>
  ___dist (dist裡是放parcel打包完的檔案，圖片、html、css和js檔等都會打包在這個資料夾裡)<br>
|<br>
  ___img (img裡放web會用到的圖片)
### 5.進行打包
用下列指令打包我們的檔案 (自動產生 dist目錄)<br>
執行此指令時，當我們修改pug, sass和 js檔時，會立刻打包新的檔案出來<br>
記得下 --public-url ./ 這個參數，根據官方文件的說明，這個參數的default值是 / ，可能會導致我們的路徑出問題
```
./node_modules/.bin/parcel watch ./parcel/aboutus.pug --public-url ./
```
多加 --host [host] 及 --port [port] 會產生一個測試的網站給我們看，當我們改變檔案時，會立刻顯示結果給我們看<br>
[host] 記得改成 luffy.ee.ncku.edu.tw<br>
[port] 可以自己選
```
./node_modules/.bin/parcel watch ./parcel/aboutus.pug --public-url ./ --host [host] --port [port]
```
### 6.連到dist裡的html測試功能
