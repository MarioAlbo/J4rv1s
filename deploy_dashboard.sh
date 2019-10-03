# /bin/bash

#color varible
COLOR='96m'
COLOR2='92m'
#parar y borrar contenedor del Dashboard
echo -e "\e[${COLOR}Parando contenedor: \e[0m"
docker stop dash &&
echo -e "\e[${COLOR}Borrando contenedor: \e[0m"
docker rm -f dash

#actualizar ficheros locales
git pull

#lanzar imagen actualizada
docker build -q -t dashboard:v1 .
docker run --name dash -d -p 80:80 dashboard:v1 && echo -e "\e[${COLOR2}Contenedor desplegado correctamente \e[0m"
