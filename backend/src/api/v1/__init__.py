from fastapi import APIRouter

from .register_user import register_user_router

router_v1 = APIRouter()

router_v1.include_router(register_user_router)
