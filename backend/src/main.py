from contextlib import asynccontextmanager

from fastapi import FastAPI
from src.api import api_router
from src.services.cosmos_db.manager import connection_manager


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connection_manager.init_cosmos()
    yield
    await connection_manager.client.close()


app = FastAPI(lifespan=lifespan)

app.include_router(
    router=api_router,
    prefix="/api",
)
