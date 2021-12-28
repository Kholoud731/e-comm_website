from django.db import models

# category model 

class Category(models.Model):
    name = models.CharField(max_length=30, primary_key=True)

    class Meta:
        verbose_name_plural = "Category"

    def __str__(self):
        return self.name
