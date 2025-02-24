from django.contrib.auth.models import AbstractUser, BaseUserManager, Group, Permission
from django.utils.translation import gettext_lazy as _
from django.core.validators import RegexValidator
from django.db import models

# Validators
phone_regex = RegexValidator(
    regex=r'^\\+?1?\\d{9,15}$',
    message=_('Phone number must be entered in the format: "+999999999". Up to 15 digits allowed.')
)

# Role Choices
class RoleChoices(models.TextChoices):
    SUPERUSER = 'superuser', _('Superuser')
    USER = 'user', _('User')

# Blog Types
class BlogTypes(models.TextChoices):
    EVENT = 'event', _('Event')
    BLOG = 'blog', _('Blog')

# Item Types
class ItemTypes(models.TextChoices):
    PRODUCT = 'product', _('Product')
    ACCOMMODATION = 'accommodation', _('Accommodation')

# Order Status Choices
class OrderStatus(models.TextChoices):
    PENDING = 'pending', _('Pending')
    CONFIRMED = 'confirmed', _('Confirmed')
    COMPLETED = 'completed', _('Completed')
    CANCELLED = 'cancelled', _('Cancelled')

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """
        Create and save a regular user with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        extra_fields.setdefault('role', RoleChoices.USER)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('role', RoleChoices.SUPERUSER)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    phone_number = models.CharField(_('phone number'), validators=[phone_regex], max_length=15, blank=True, null=True)
    role = models.CharField(
        _('role'),
        max_length=20,
        choices=RoleChoices.choices,
        default=RoleChoices.USER
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    @property
    def is_user(self):
        return self.role == RoleChoices.USER
    
    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_('The groups this user belongs to.'),
        related_name="custom_user_set",
        related_query_name="custom_user",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name="custom_user_set",
        related_query_name="custom_user",
    )

# BlogPost Model
class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    type = models.CharField(
        _('type'),
        max_length=20,
        choices=BlogTypes.choices,
        default=BlogTypes.EVENT
    )
    published = models.BooleanField(default=True)
    published_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('blog post')
        verbose_name_plural = _('blog posts')

# Item Model
class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    type = models.CharField(
        _('type'),
        max_length=20,
        choices=ItemTypes.choices,
        default=ItemTypes.PRODUCT
    )
    price = models.DecimalField(max_digits=10, decimal_places=2)
    time_frame = models.CharField(max_length=100, blank=True, null=True)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('item')
        verbose_name_plural = _('items')

# Donation Model
class Donation(models.Model):
    names = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone_number = models.CharField(_('phone number'), validators=[phone_regex], max_length=15, blank=True, null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    donated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.names} - {self.amount}'

    class Meta:
        verbose_name = _('donation')
        verbose_name_plural = _('donations')

# Order Model
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    status = models.CharField(
        _('status'),
        max_length=20,
        choices=OrderStatus.choices,
        default=OrderStatus.PENDING
    )
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Order {self.id} - {self.user.first_name} ({self.status})'

    class Meta:
        verbose_name = _('order')
        verbose_name_plural = _('orders')

# Order Item Model
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.item.name} x {self.quantity}'

    class Meta:
        verbose_name = _('order item')
        verbose_name_plural = _('order items')
