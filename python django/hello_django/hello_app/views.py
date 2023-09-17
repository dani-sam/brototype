from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def print_hello(request):
    movieData={ 
        'movies' : [{
        'Title':'underworld',
        'Summary':'Story of underworld movie',
        'Year':2018,
        'success':True
    },
        {
        'Title':'underdog',
        'Summary':'Story of underworld movie',
        'Year':2010,
        'success':False
        },
        {
        'Title':'pets',
        'Summary':'Story of underworld movie',
        'Year':2021,
        'success':True
        },
        {
        'Title':'richice world',
        'Summary':'Story of underworld movie',
        'Year':2008,
        'success':False
        },
        {
        'Title':'moz and cat',
        'Summary':'Story of underworld movie',
        'Year':2000,
        'success':False
        },
        {
        'Title':'Godfather',
        'Summary':'Story of underworld movie',
        'Year':2001,
        'success':True
        },
        ]}
    return render(request,'hello.html',movieData)

 