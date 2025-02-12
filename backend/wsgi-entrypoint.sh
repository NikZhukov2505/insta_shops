#!/bin/sh

until cd /bazar/
do
    echo "Waiting for server volume..."
done

until ./manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 2
done

./manage.py collectstatic --noinput

gunicorn core.wsgi --bind 0.0.0.0:8080 --workers 4 --threads 4