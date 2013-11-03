for /f %%i in (dir.txt) do type %%i >> 360er-debug.js
java -jar yuicompressor-2.4.8.jar --type js --charset utf-8 -o 360er.js 360er-debug.js