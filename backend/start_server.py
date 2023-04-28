import uvicorn
from src.core.env import settings

if __name__ == "__main__":
    uvicorn.run(
        app="src.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=True,
        reload_dirs=["/backend"],
    )
