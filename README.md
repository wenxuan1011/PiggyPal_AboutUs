# 如何跑起來:
### 1.初始化環境
    npm init -y
    npm i node-sass --save-dev
    npm i @babel/present-env @babel/preset-typescript
    npm i jquery --save
    npm i parcel-bundler --save-dev
    npm i pug-cli --save-dev
### 2.背景執行
& 可以讓指令背景執行，所以可以同時watch pug和sass，達到部分parcel的目的
```
./node_modules/.bin/pug ./app/aboutus.pug -o ./ -P --watch &
```
```
./node_modules/.bin/node-sass ./app/aboutus.sass -o ./ -P --watch &
```
### 3.ps 和 kill
ps 可以查看所有正在執行的job
```
ps
```
kill 可以關閉正在執行的job
```
kill
```
### 4.使用 node ser.js 開啟伺服器
```
node ser.js
```
### 5.遇到的問題
當我們執行以下指令時，貌似是路徑問題導致無法同步更新
```
./node_modules/.bin/parcel watch ./app/aboutus.pug
```
