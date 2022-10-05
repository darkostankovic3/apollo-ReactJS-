#!/bin/bash

i = 1

for file in apolloIcons/*; do
  i=${file##*/}
  x="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
  v2=${x//-}
  echo  "import Icon${v2%.*} from '../../fonts/apolloIcons/${file##*/}';"
done

#   echo ''
#   echo ''
#   echo 'components = {'

# for file in apolloIcons/*; do
#   i=${file##*/}
#   x="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
#   v2=${x//-}

#   echo  "${v2%.*} : Icon${v2%.*},"
 
# done


#   echo '}'

# for file in apolloIcons/*; do
#   i=${file##*/}
#   x="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
#   v2=${x//-}

#   echo ""

#  echo  "<Grid
#                   className={classes.materailIcon}
#                   item
#                   md={3}
#                   lg={2}
#                   sm={4}
#                   xs={12}
#                 >
#                 <img src=Icon${v2%.*} />
#               </Grid>
#             </Grid>"
 
# done


