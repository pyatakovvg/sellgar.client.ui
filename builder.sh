#!/usr/bin/env sh

echo '------------------------------------'
echo '|        Сборка helpers            |'
echo '------------------------------------'

cd ./helpers || return

echo ''
echo 'Пакет "utils"'
echo '------------------------------------'
cd ./utils && npx yarn build


echo '------------------------------------'
echo '|        Сборка packages            |'
echo '------------------------------------'

cd ../../packages || return

echo ''
echo 'Пакет "Default"'
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


echo '------------------------------------'
echo '|        Сборка layouts            |'
echo '------------------------------------'

cd ../../layouts || return

echo ''
echo 'Пакет "Default"'
echo '------------------------------------'
cd ./default && npx yarn build

echo ''
echo '------------------------------------'
echo '|        Сборка libraries          |'
echo '------------------------------------'

cd ../../libraries || return

echo 'Виджет "kit"'
echo '------------------------------------'
cd ./kit && npx yarn build

echo 'Виджет "store"'
echo '------------------------------------'
cd ../store && npx yarn build


echo ''
echo '------------------------------------'
echo '|        Сборка modules          |'
echo '------------------------------------'

cd ../../modules || return

echo 'Модуль "main"'
echo '------------------------------------'
cd ./main && npx yarn build

echo ''
echo '------------------------------------'
echo '|        Сборка app client          |'
echo '------------------------------------'

cd ../../apps || return

echo 'Модуль "main"'
echo '------------------------------------'
cd ./client && npx yarn build

exit 0
