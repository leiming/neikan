for /f %%i in (dirie.txt) do type %%i >> 360erie-debug.js
java -jar yuicompressor-2.4.8.jar --type js --charset utf-8 -o 360erie.js 360erie-debug.js
pause