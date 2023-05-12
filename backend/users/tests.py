from django.test import TestCase
from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.test import Client
# Create your tests here.

class UserRegisterAPITesting(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(                                   
            username='test',                                                                                   
            email='test@email.com',                                                                   
            password='test',                                                    
        )                                                                             
        token, created = Token.objects.get_or_create(user=self.user)                
        self.client = Client(HTTP_AUTHORIZATION='Token ' + token.key)


    def tearDown(self):
        pass

    def test_registration_successful(self):
        response=self.client.post(reverse('register'),{'username':'some_username','password':'qwerty123','email':'email@gmail.com'})
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)


    def test_registration_failed_bad_request(self):
        response=self.client.post(reverse('register'),{'username':'some_username','password':'qwerty123','email':''})
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)


    def test_register_not_allowed(self):
        response=self.client.get(reverse('register'))
        self.assertEqual(response.status_code,status.HTTP_405_METHOD_NOT_ALLOWED)


    def test_register_already_exists(self):
        response=self.client.post(reverse('register'),{'username':'test','password':'test','email':'test@email.com'})
        self.assertEqual(response.status_code,status.HTTP_409_CONFLICT)


class UserLoginAPITesting(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(                                   
            username='test',                                                                                   
            email='test@email.com',                                                                   
            password='test',                                                    
        )                                                                             
        token, created = Token.objects.get_or_create(user=self.user)                
        self.client = Client(HTTP_AUTHORIZATION='Token ' + token.key)

    def tearDown(self):
        pass


    def test_login_not_allowed(self):
        response=self.client.get(reverse('login'),{'username:':'test','password':'test'})
        self.assertEqual(response.status_code,status.HTTP_405_METHOD_NOT_ALLOWED)


    def test_login_bad_request(self):
        response=self.client.post(reverse('login'),{'username':'test','password':'wrongpassword'})
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)


    def test_login_success(self):
        response=self.client.post(reverse('login'),{'username':'test','password':'test'})
        self.assertEqual(response.status_code,status.HTTP_200_OK)


    def test_login_non_existing(self):
        response=self.client.post(reverse('login'),{'username':'nonexisting','password':'test'})
        self.assertEqual(response.status_code,status.HTTP_404_NOT_FOUND)