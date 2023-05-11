FROM python:3.10-slim

WORKDIR /backend

RUN python3 -m pip install poetry

COPY ./pyproject.toml .

RUN poetry config virtualenvs.create false
RUN poetry install --no-root

COPY fastapi-entrypoint.sh .

RUN chmod +x fastapi-entrypoint.sh

COPY . .
