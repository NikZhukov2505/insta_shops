# Generated by Django 3.2.7 on 2024-05-01 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_selleruser_whatsapp_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='selleruser',
            name='telegram_link',
            field=models.CharField(blank=True, default='', max_length=127, null=True, verbose_name='Ссылка telegram'),
        ),
    ]