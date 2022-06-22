#!/usr/bin/env sh

echo '------------------------------------'
echo '|        Сборка helpers            |'
echo '------------------------------------'

cd ./helpers || return

echo ''
echo 'Пакет "Utils"'
echo '------------------------------------'
cd ./utils && npx yarn build


echo '------------------------------------'
echo '|        Сборка packages            |'
echo '------------------------------------'

cd ../../packages || return

echo ''
echo 'Пакет "Request"'
echo '------------------------------------'
cd ./request && npx yarn build
echo ''
echo 'Пакет "Dialog"'
echo '------------------------------------'
cd ../dialog && npx yarn build
echo ''
echo 'Пакет "Numeral"'
echo '------------------------------------'
cd ../numeral && npx yarn build


echo ''
echo 'Пакет "Default"'
echo '------------------------------------'
cd ./default && npx yarn build

echo ''
echo '------------------------------------'
echo '|        Сборка libraries          |'
echo '------------------------------------'

cd ../../libraries || return

echo 'Виджет "Kit"'
echo '------------------------------------'
cd ./kit && npx yarn build

echo 'Виджет "Store"'
echo '------------------------------------'
cd ../store && npx yarn build


echo '------------------------------------'
echo '|        Сборка layouts            |'
echo '------------------------------------'

cd ../../layouts || return


echo ''
echo '------------------------------------'
echo '|        Сборка modules          |'
echo '------------------------------------'

cd ../../modules || return

echo 'Модуль "Main"'
echo '------------------------------------'
cd ./main && npx yarn build

echo ''
echo '------------------------------------'
echo '|        Сборка app client          |'
echo '------------------------------------'

cd ../../apps || return

echo 'Модуль "Client"'
echo '------------------------------------'
cd ./client && npx yarn build

exit 0
