from pydantic import BaseModel


class User(BaseModel):
    id: str
    passwords: dict[str, dict[str, str]]


class UserRegisterSchema(BaseModel):
    id: str
    password: str