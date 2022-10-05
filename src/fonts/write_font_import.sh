#!/bin/bash  

input="font-names.txt"

while IFS= read -r line
do

  echo "import ""${line%-*}"" from './"$line"'"

done < "$input"
