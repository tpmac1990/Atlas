# Generated by Django 3.1.2 on 2021-02-04 07:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0004_tenementchange'),
    ]

    operations = [
        migrations.CreateModel(
            name='TenementRemoval',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('ind', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ind_tenementremoval', to='map.tenement')),
            ],
        ),
        migrations.CreateModel(
            name='TenementAddition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('ind', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ind_tenementaddition', to='map.tenement')),
            ],
        ),
        migrations.CreateModel(
            name='OccurrenceRemoval',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('ind', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ind_occurrenceremoval', to='map.occurrence')),
            ],
        ),
        migrations.CreateModel(
            name='OccurrenceChange',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.CharField(max_length=6)),
                ('field', models.CharField(max_length=30)),
                ('date', models.DateField()),
                ('ind', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ind_occurrencechange', to='map.occurrence')),
                ('majmatval', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='majmatval_occurrence', to='map.material')),
                ('minmatval', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='minmatval_occurrence', to='map.material')),
                ('nameval', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='holderval_occurrence', to='map.occname')),
                ('oidval', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='oidval_occurrence', to='map.occoriginalid')),
                ('statusval', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='statusval_occurrence', to='map.occstatus')),
                ('typeval', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='typeval_occurrence', to='map.occtype')),
            ],
        ),
        migrations.CreateModel(
            name='OccurrenceAddition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('ind', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ind_occurrenceaddition', to='map.occurrence')),
            ],
        ),
    ]