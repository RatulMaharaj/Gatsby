---
author: Ratul Maharaj
title: "Data Types In Python"
description: "An exploration of various pythonic data types"
date: "2020-04-21"
tags: ["tech"]
authorImage: "https://avatars0.githubusercontent.com/u/56479869"
featuredImage: '../images/image_03.jpg'
---

There's a great joke I found while searching online for 'really funny data type jokes' (don't act like you've never done it).  It goes something like this. *What did the Boolean say to the Integer?*

<!-- end -->

Well actually - they say if you have to explain a joke then it's probably not that funny. So rather let's take a look at some of the data types made available to us in python and hopefully by the end of this, you'll be having a few laughs. Oh, and also have some sort of understanding of the basic data types in python.


If you haven't yet installed python and set up a development environment, I would suggest that you first read this post on [getting started with python.](https://ratulmaharaj.com/getting-started-with-python) 

In this post, we will be looking broadly at the following data types:

- [Numeric values](#numerical)
- [Boolean values](#boolean)
- [Sequential types](#sequential)
- [Strings](#strings)
- [Dictionaries](#dictionary)

<span id="numerical"></span>

This is by no means an exhaustive list, but is likely to be the data types you use most often when programming in python. 


Let's dive in.

# Numeric Values

In python, numerical values can be stored in 3 distinct data types: *integers*, *floating point numbers* and *complex numbers.* 

### Integers

Integers in python are represented by the `int` class and can contain positive or negative whole numbers. 

### Floating Point Numbers

Decimal numbers in python are represented by the `float` class. These can be positive or negative real numbers specified by the presence of a decimal point . 

### Complex numbers

Complex numbers are are represented by the `complex` class.  These are specified as (real part) + (imaginary part)j.

```python
# integer
x = 3
print("The type of x is: ", type(x))

# float
y = 2.0
print("The type of y is: ", type(y))

# complex number - j represents the imaginary part of your complex number
z = 1 + 3j
print("The type of z is: ", type(z))
```

When working with complex numbers you can access the real and imaginary parts of your complex number - in this case `z` - by using the `z.real` and `z.imag` attributes respectively.

Let's look at how we can perform some basic operations with these data types.

```python
# sum of x and y
x + y	

# difference of x and y
x - y	

# product of x and y
x * y	

# quotient of x and y
x / y	

# floored quotient of x and y
x // y	

# remainder of x / y
x % y	

# x to the power y
x ** y	
```
<span id="boolean"></span>

In python, it is possible to convert data types into others using various built-in functions. Be sure to try out `int()`, `float()` and `complex()`. 

# Boolean Values

Boolean data types can take on one of two built-in values: `True` or `False`. They are used to represent truth values. Other values can also be used as 'truth' values, for example, the integers 0 and 1 in a numerical context. The built-in function `bool()` can be also used to convert any value to a Boolean, if the value can be interpreted as a truth value (see section <a href="https://docs.python.org/3.8/library/stdtypes.html#truth" target="_blank">Truth Value Testing</a> in the python docs).  Take note of the capitalization as the usage of `true` and `false` will throw errors.

```python
# boolean values
a = True
b = False

print("The type of a is: ", type(a))
print("The type of b is: ", type(b))
```

Boolean values are useful when checking if two variables have the same value or are of the same data type.

```python
# let x be an integer
x = 5

# let y be a floating point number
y = 5.0

# check if the value of x is the same as the value of y - result is True
print(x == y)

# check if x and y are of the same data type - result is False
print(type(x) == type(y))
```
<span id="sequential"></span>

Above we can see that `5` and `5.0` are seen to have the same value, but as we are aware, belong to the different data type classes `int` and `float`.

# Sequential Types

### Lists

In python, lists are synonymous with arrays declared in other languages. A key feature of a list that makes it super powerful is that it need not be homogeneous. This means that a single list may contain other data types like integers and strings or even other lists in your list. 

```python
# create an empty list
mylist = []
print(mylist)

# a list with various data types
mylist = ['Text', 23, 3.14]
print(mylist)

# a list within a list
mylist = ['Fruit', ['apples','oranges','bananas']]
print(mylist)
```

Lists are also *mutable*, which means they can be altered after they have been created. The elements in a list are indexed according to a definite sequence and the indexing of a list is done with 0 being the first index. Elements in a list can easily be duplicated and/or re-ordered as needed. Lists are represented in python by the `list` class.

```python
# create a list
mylist = ['Text', 23, 3.14]
print(mylist)

# select items from the list
print(mylist[0])
print(mylist[1])
print(mylist[2])

# append item to end of the list
mylist.append('New list item')
print(mylist)

# select the last item in the list
last_item = mylist[-1]
print(last_item)

# remove an item from a list - also try the .pop() method
mylist.remove('Text')
print(mylist)
```

### Sets

A set in python, is very similar to a list with a few exceptions. The biggest difference being that a set only contains unique elements. Sets can be created using curly braces, with elements separated by commas. Alternatively an iterable object (such as a list, tuple or string) can be turned into a set using the `set()` function. Sets are represented by the `set` class.

```python
# create an empty set 
myset = {}
print(myset)

# convert a list into a set
mylist = ['Text', 23, 3.14]
myset = set(mylist)
print(myset)

# a set containing various elements
myset = {'a', 'b', 'c', 1, 2, 3}
print(myset)

# a set will only keep unique values
myset = {1, 1, 1, 2, 2, 3}
print(myset)
```

It is important to note that ordinary sets cannot be nested as seen above with lists as sets are not <a href="https://docs.python.org/2/glossary.html#term-hashable" target="_blank">hashable.</a> 

### Tuples

Much like the list, a tuple is an ordered collection of python objects. The sequence of values stored in a tuple can be of any type, and they are indexed by integers. A notable difference that exists between a list and a tuple is that tuples are *immutable*. Tuples can be created using round brackets, with elements separated by commas or by using the `tuple()` function. It is represented by the `tuple` class. 

<span id="strings"></span>

```python
# create an empty tuple  
mytuple = ()  
print (mytuple)

# convert a list into a set
mytuple = ('Text', 23, 3.14) 
print(mytuple)

# convert a list into a tuple
mylist = ['Text', 23, 3.14]
mytuple = tuple(mylist)
print (mytuple)
```

# Strings

A string is also a sequential data type in python. It is an immutable sequence of Unicode characters or put simply - ordinary text. String literals are written by enclosing a sequence of characters in either single, double or triple quotes. It is represented by `str` class.

<span id="dictionary"></span>

```python
# an empty string
mystring = ""
print(mystring)

# a string with single quotes
mystring = 'Hello, this is a string!'
print(mystring)

# a string with double quotes
mystring = "It's useful if you need to use an apostrophe."
print(mystring)

# a string with triple quotes
mystring = ''' The are useful for
creating strings that span
multiple lines!
'''
print(mystring)
```

# Dictionaries

In python, a dictionary is an unordered collection of key-value pairs used to store data values. Dictionaries can be created by placing a comma-separated list of `key : value` pairs within curly braces. Dictionaries are represented by `dict` class.

```python
# create an empty dictionary 
mydict = {}
print(mydict)

# create a dictionary 
mydict = {'abc' : ['a','b','c'], 123 : 'One-two-three', 'eight' : 8 }
print(mydict)

# create a dictionary using built-in function
mylist = [('abc', ['a','b','c']), (123, 'One-two-three'), ('eight', 8)]
mydict = dict(mylist)
print(mydict)
```

We can access the values in a dictionary by making reference to it's key name, used inside square brackets, similar to retrieving an item from a list. We can also add or remove items from a dictionary as seen below.

```python
# create a dictionary
mydict = {'abc' : ['a','b','c'], 123 : 'One-two-three', 'eight' : 8 }
print(mydict)

# get the value 8
myvalue = mydict['eight']
print(myvalue)

# delete a key:value pair
del mydict[123]  
print(mydict)

# Deleting entire Dictionary  
mydict.clear()  
print(mydict)

# add new key:value pair
mydict['key'] = 'value'
print(mydict)

# update a key's value
mydict['key'] = 'A different value'
print(mydict)
```

That's all for now - be sure to play around with these to see what you can come up with. 

Oh yes, and the main reason you're still here...

*You can't handle the truth! :)*