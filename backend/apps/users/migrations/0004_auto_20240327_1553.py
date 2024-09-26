# Generated by Django 3.2.7 on 2024-03-27 15:53

from django.db import migrations, models
import django_resized.forms


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_selleruser'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='selleruser',
            name='container_number',
        ),
        migrations.RemoveField(
            model_name='selleruser',
            name='lat',
        ),
        migrations.RemoveField(
            model_name='selleruser',
            name='long',
        ),
        migrations.AddField(
            model_name='selleruser',
            name='background_image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=None, force_format='JPEG', keep_meta=True, null=True, quality=100, scale=0.5, size=[1440, 2560], upload_to='users/images_back', verbose_name='Фото заднее'),
        ),
        migrations.AddField(
            model_name='selleruser',
            name='insta_image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=None, force_format='JPEG', keep_meta=True, null=True, quality=100, scale=0.5, size=[1440, 2560], upload_to='users/images_back', verbose_name='Фото инста'),
        ),
        migrations.AddField(
            model_name='selleruser',
            name='instagram_link',
            field=models.CharField(default='', max_length=150, verbose_name='Ссылка инстаграм'),
        ),
    ]