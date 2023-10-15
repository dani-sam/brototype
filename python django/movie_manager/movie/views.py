from django.shortcuts import render

# Create your views here.

def create(request):
    if request.POST:
        print(request.POST.get('title'))
    return render(request,'create.html')
def list(request):
    
    movieData={ 
        'movies' : [{
        'Title':'underworld',
        'Summary':'Story of underworld movie',
        'Year':2018,
        'success':True,
        'img':'underworld.jpg'
    },
        {
        'Title':'underdog',
        'Summary':'Story of underworld movie',
        'Year':2010,
        'success':False,
        'img':'godfather.jpg'
        },
        {
        'Title':'pets',
        'Summary':'Story of underworld movie',
        'Year':2021,
        'success':True,
        'img':'godfather.jpg'
        },
        {
        'Title':'richice world',
        'Summary':'Story of underworld movie',
        'Year':2008,
        'success':False,
        'img':'underworld.jpg',

        },
        {
        'Title':'moz and cat',
        'Summary':'Story of underworld movie',
        'Year':2000,
        'success':False,
        'img':'underworld.jpg'
        },
        {
        'Title':'Godfather',
        'Summary':'Story of underworld movie',
        'Year':2001,
        'success':True,
        'img':'godfather.jpg'
        },
        ]}
    return render(request,'list.html',movieData)
def edit(request):
    return render(request,'edit.html')
