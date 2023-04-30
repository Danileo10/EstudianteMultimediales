from django.contrib.auth.hashers import make_password
from django.conf import settings

settings.configure()

password = '12345682ucc'
hash = make_password(password)
print(hash) 