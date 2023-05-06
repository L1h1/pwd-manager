from django.contrib import admin

from passwords.models import Password, PasswordCategory

admin.site.register(PasswordCategory)
admin.site.register(Password)

# @admin.register
# class PasswordAdmin(admin.ModelAdmin):
#     class Meta:
#         model = Password
