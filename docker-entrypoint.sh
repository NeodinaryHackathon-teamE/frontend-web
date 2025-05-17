#!/bin/sh
# 오류가 발생할 시 스크립트 중단
set -e

# default.conf.template 파일에 있는 환경 변수를 실제 값으로 대체하고 결과를 default.conf에 저장
envsubst '${BE_HOST} ${BE_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# 다음 명령어 실행
exec "$@"
