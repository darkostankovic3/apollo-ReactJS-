#!/bin/bash  

input="font-names.txt"

while IFS= read -r line
do

echo ""
  echo ""
  echo "const ${line%-*} = {"
  echo "   fontFamily: '${line%-*}',"
  echo "   fontStyle: 'normal',"
  echo "   fontDisplay: 'swap',"
  echo "   fontWeight: 400,"
  echo "   src: \`"
  echo "     local('${line%.*}'), "
  echo "     url('${line%-*}') format(${line##*.}) "
  echo "   \`,"
echo "};"  

done < "$input"
