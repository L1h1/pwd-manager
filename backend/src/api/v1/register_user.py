import asyncio

from fastapi import APIRouter, HTTPException, status

from src.core.env import settings
from src.schemas.user import UserRegisterSchema, User
from src.services.cosmos_db.manager import connection_manager
from azure.cosmos.exceptions import CosmosResourceExistsError

register_user_router = APIRouter()


@register_user_router.post('/register/')
async def register_user(user: UserRegisterSchema):
    try:
        user_data = await (connection_manager.container.create_item(user.dict() | {'passwords': {}}))
        return User(**user_data)

    except CosmosResourceExistsError:
        raise HTTPException(
            detail='User with such username already exists',
            status_code=status.HTTP_400_BAD_REQUEST,
        )
    except Exception:
        raise HTTPException(
            detail='Sorry, it seems that the service is not available now',
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )
