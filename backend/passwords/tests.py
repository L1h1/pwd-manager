from django.test import TestCase
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.test import Client
from rest_framework.test import APITestCase
from passwords.models import PasswordCategory,Password

# Create your tests here.
class CategoriesViewSetTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(                                   
            username='test',                                                                                   
            email='test@email.com',                                                                   
            password='test',                                                    
        )                                                                             
        token, created = Token.objects.get_or_create(user=self.user)                
        self.client = Client(HTTP_AUTHORIZATION='Token ' + token.key)
        self.first=PasswordCategory(name='first',user=self.user)
        self.second=PasswordCategory(name='second',user=self.user)
        self.first.save()
        self.second.save()

    def tearDown(self):
        pass

    def test_get_categories(self):
        response=self.client.get('/api/categories/')
        self.assertEqual(response.status_code,status.HTTP_200_OK)

    def test_get_categories_item_check(self):
        response=self.client.get('/api/categories/')
        self.assertEqual(response.data[0]['id'],1)

    def test_wrong_request(self):
        response=self.client.get('api/categories')
        self.assertEqual(response.status_code,status.HTTP_404_NOT_FOUND)

    def test_create_category(self):
        response=self.client.post('/api/categories/',data={"name":"new category"})
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)

    def test_bad_request_create_category(self):
        response=self.client.post('/api/categories/',data={"wySd":"new category"})
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)

    def test_get_existing_data(self):
        response=self.client.get(f'/api/categories/{self.first.id}/')
        self.assertEqual(response.data['name'],self.first.name)
    
    def test_get_non_existing_data(self):
        response=self.client.get(f'/api/categories/{-1}/')
        self.assertEqual(response.status_code,status.HTTP_404_NOT_FOUND)
    
    def test_existing_data_changing(self):
        response=self.client.patch(f'/api/categories/{self.first.id}/',{"name":"changed name"})
        self.first.refresh_from_db()
        response=self.client.get(f'/api/categories/{self.first.id}/')
        self.assertEqual(response.data['name'],self.first.name)

    def test_existing_data_changing_wrong_data(self):
        response=self.client.patch(f'/api/categories/{self.first.id}/',{"wyd":"changed name"})
        self.assertEqual(response.status_code,status.HTTP_415_UNSUPPORTED_MEDIA_TYPE)

    def test_non_existing_data_changing(self):
        response=self.client.patch(f'/api/categories/{-1}/',{"name":"changed name"})
        self.assertEqual(response.status_code,status.HTTP_404_NOT_FOUND)

    def test_non_existing_delete(self):
        response=self.client.delete(f'/api/categories/{-1}/')
        self.assertEqual(response.status_code,status.HTTP_404_NOT_FOUND)

    def test_existing_delete(self):
        response=self.client.delete(f'/api/categories/{self.first.id}/')
        self.assertEqual(response.status_code,status.HTTP_204_NO_CONTENT)


    
class PasswordViewSetTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(                                   
            username='test',                                                                                   
            email='test@email.com',                                                                   
            password='test',                                                    
        ) 

        token, created = Token.objects.get_or_create(user=self.user)   
        self.client = Client(HTTP_AUTHORIZATION='Token ' + token.key)  

        self.first_cat=PasswordCategory(name='first',user=self.user)
        self.second_cat=PasswordCategory(name='second',user=self.user)
        self.first_cat.save()
        self.second_cat.save()

        self.first_pwd=Password(login='test',password='test',category=self.first_cat)
        self.second_pwd=Password(login='test',password='test',category=self.second_cat)
        self.first_pwd.save()
        self.second_pwd.save()


    def tearDown(self):
        pass

    def test_get_passwords(self):
        response=self.client.get('/api/passwords/')
        print(response.data)
        self.assertEqual(response.status_code,status.HTTP_200_OK)

    def test_add_password(self):
        response=self.client.get('/api/passwords/')
        print(response.data)
        self.assertEqual(response.status_code,status.HTTP_200_OK)