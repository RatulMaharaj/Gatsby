---
author: Ratul Maharaj
title: "Getting Started With Python"
description: "Everything you need to start writing code in python"
date: "2020-03-29"
tags: ["tech", "python" ]
authorImage: "https://avatars0.githubusercontent.com/u/56479869"
featuredImage: '../images/image_02.jpg'
---


Python is a programming language that was created by Guido van Rossum in the late 1980s. It is commonly referred to as being a general purpose language which means that you can use python for doing pretty much anything you want. From developing desktop applications, websites and web applications to data science, machine learning or building an Iron Man suit - you can do it all with python (well, sort of). 
<!-- end -->

# What is Python?

Python is a high-level programming language, which makes it easier for you to focus on the core functionality of your application or program. It has a simple syntax which makes the code easier for humans to read. It is also an interpreted language, which means that it doesn't need to be <a target="_blank" href="https://www.webopedia.com/TERM/C/compile.html">compiled</a> before it's programs are executed. Instead another program, called an interpreter, reads the program and executes it on the fly.


# Why should you consider learning Python?

Computer programming gives you the confidence to be creative and enables you to experiment with ideas to create something that is uniquely yours.

<a>
<blockquote>
"Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn." - Stephen Hawking
</blockquote>
</a>

Python is a great first programming language to learn, especially if you're interested in <a target="_blank" href="https://automatetheboringstuff.com/">automating the boring stuff</a> at work. One of the main reasons it's such a great language, other than it being easy to learn, is that it is <a target="_blank" href="https://opensource.com/resources/what-open-source">open source</a> and has a massive community of developers who can help you out when you get stuck. It's simple yet super powerful which is evidenced by the fact that many modern day tech giants such as Instagram, Facebook, Spotify, Amazon and Netflix (to name a few) all use python for some of their back-end services. 

So here's what you need to get started.

# Installing Python

Python comes pre-installed on most new computers. To check if you have python installed already, open up a new <a target="_blank" href="https://www.wikihow.com/Open-the-Command-Prompt-in-Windows">command prompt</a> or <a target="_blank" href="https://www.wikihow.com/Open-a-Terminal-Window-in-Mac">terminal</a> window and type `python` or `python3`. If you get an error, then chances are python isn't yet installed on your machine.

Head over to <a target="_blank" href="https://www.python.org/">python.org</a> and navigate to the downloads page where you'll be able to find the latest version of python for your operating system. During the installation process, be sure to check the box that says 'Add Python to PATH' - this will allow you to use python from anywhere on your computer. If you would like a step-by-step guide on how to install python on your computer, you should be able to find one at <a target="_blank" href="https://realpython.com/installing-python/">realpython.com</a>

Another way to get python onto your computer, which works particularly well if you're on a computer that is controlled by your employer's IT administrator, is to install <a href="https://www.anaconda.com/distribution/">Anaconda</a> (or <a target="_blank" href="https://docs.conda.io/en/latest/miniconda.html">Miniconda</a> if you're looking to save some space). This includes everything you need to get started, such as python itself, a few popular python packages as well as Jupyter Notebooks - a great tool used to create and share documents that contain live code, equations, visualizations and explanatory text. Even if you already have python installed, I would still recommend that you check out the Anaconda distribution.

# What is pip?

<a href="https://pip.pypa.io/en/stable/">pip</a> is the standard package manager for python. It will allow you to install and manage additional libraries and dependencies which are not included in the standard python library. pip is typically included in the standard python installer. To check if you have pip, after installing python, you can type `pip --version` in a command prompt or terminal window. You can install python packages by using the command `pip install package_name` or `pip install package_name==version` to install a specific version of a package.

A python package is made up of python modules, which are essentially files with a .py extension containing pre-written python code that other developers have created for you. There have been a multitude of python packages made, which you can find on <a target="_blank" href="https://pypi.org/">PyPI</a> (the Python Package Index) which is the official repository for third-party software for the python programming language. PyPI is where pip gets python packages from when you use pip to install a new package on your computer.

# A text editor

The last thing you would need, in order to start coding, would be a decent text editor or an <a target="_blank" href="https://www.google.com/search?q=Integrated+Development+Environment">Integrated Development Environment (IDE)</a>. My recommendation would be <a target="_blank" href="https://code.visualstudio.com/">Visual Studio Code</a>, which is a Microsoft product that can be used with just about any language. It's clean and customizable with some cool themes but more importantly, it's free and open source! Once you've installed it you would need to install the python extension and you should be good to go. They have also made a tutorial in setting up a development environment in VS Code which I will link <a target="_blank" href="https://code.visualstudio.com/docs/python/python-tutorial">here</a>.


Other popular choices include <a target="_blank" href="https://atom.io/">Atom</a>, <a target="_blank" href="https://www.sublimetext.com/">Sublime Text</a>, <a target="_blank" href="https://www.vim.org/">VIM</a> and <a target="_blank" href="https://www.jetbrains.com/pycharm/">PyCharm</a>.


# Your first Python programme

Once you're all setup, it's almost tradition to create a 'Hello World' programme to ensure that everything is working correctly. You can do this by creating a file named hello.py which contains the following code.

```
print('Hello World!')
```

If everything works as expected, you should see a 'Hello World!' on your screen. If not, don't panic. One of the great things about python, as I mentioned before, is the community. You should be able to do a quick google search for just about any issue you have (you could even copy and paste an error you get straight into google) and chances are that someone else has had and solved the exact same problem.

Good luck and happy coding!