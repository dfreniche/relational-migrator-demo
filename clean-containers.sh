#!/bin/bash

docker compose down --volumes

rm -rf data
mkdir data

rm dvdrental.tar