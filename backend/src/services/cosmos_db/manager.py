from azure.cosmos import PartitionKey
from azure.cosmos.aio import ContainerProxy, CosmosClient, DatabaseProxy
from azure.identity.aio import DefaultAzureCredential
from src.core.singleton_metaclass import SingletonMeta
from src.core.env import settings

class CosmosConnectionManager(metaclass=SingletonMeta):
    """
    The class is build implementing singleton pattern
    The manager has three options:
        - client - cosmos client
        - db - interface for dealing with the database
        - container - interface for dealing with items in container
    Note! Before starting dealing with the database you have to run 'init_cosmos' method
    """

    client: CosmosClient = None
    db: DatabaseProxy = None
    container: ContainerProxy = None

    async def init_cosmos(self):
        self.client = CosmosClient(
            url=settings.COSMOS_DB_ENDPOINT,
            credential=DefaultAzureCredential(),
        )
        self.db = await self.client.create_database_if_not_exists(
            id=settings.COSMOS_DB_NAME,
        )
        self.container = await self.db.create_container_if_not_exists(
            id=settings.COSMOS_DB_CONTAINER_NAME,
            partition_key=PartitionKey(path="/Id"),
        )


connection_manager = CosmosConnectionManager()