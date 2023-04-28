from pydantic import BaseSettings


class Settings(BaseSettings):
    SECRET_KEY: str  # key for authentication and encrypting user data
    HOST: str
    PORT: int
    COSMOS_DB_ENDPOINT: str
    COSMOS_DB_NAME: str
    COSMOS_DB_CONTAINER_NAME: str
    AZURE_REQUEST_TIMEOUT_SECS: int = 3


settings = Settings()
